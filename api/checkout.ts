import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeContext = process.env.STRIPE_CONTEXT;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!stripeSecretKey) {
    console.error('Missing STRIPE_SECRET_KEY');
    return res.status(500).json({ error: 'Stripe configuration missing.' });
  }

  const { planName, priceAmount, mode } = req.body;

  if (!planName || !priceAmount) {
    return res.status(400).json({ error: 'Missing planName or priceAmount in request body.' });
  }

  try {
    // Initialize Stripe with the verified API version
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2024-06-20',
    });

    const isSubscription = mode === 'subscription';

    // We build the line items.
    // If it's a subscription, we configure a recurring price.
    const priceData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData = {
      currency: 'usd',
      product_data: {
        name: planName,
        description: 'Janitorial Bid Helper Professional Bidding Services',
      },
      unit_amount: priceAmount,
    };

    if (isSubscription) {
      priceData.recurring = {
        interval: 'month',
      };
    }

    const sessionOptions: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: priceData,
          quantity: 1,
        },
      ],
      mode: isSubscription ? 'subscription' : 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}&plan=${encodeURIComponent(planName)}`,
      cancel_url: `${req.headers.origin}/pricing`,
    };

    // If Stripe-Context (connected account) is provided, pass it in headers
    const requestOptions: Stripe.RequestOptions = {};
    if (stripeContext) {
      requestOptions.stripeAccount = stripeContext;
    }

    const session = await stripe.checkout.sessions.create(sessionOptions, requestOptions);

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return res.status(500).json({ error: error.message || 'Failed to create Stripe Checkout session.' });
  }
}
