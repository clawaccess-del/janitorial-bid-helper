import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Shield, CheckCircle, FileText, ArrowRight, Clock, UserCheck, AlertOctagon, Mail, MapPin, Phone, DollarSign, BookOpen, Layers } from 'lucide-react';

/* ============================================================================
   SHARED FOOTER & HEADER CTA
   ============================================================================ */

export function OpportunityCTA() {
  return (
    <div className="card" style={{ border: '1px solid rgba(16, 185, 129, 0.2)', backgroundColor: 'rgba(16, 185, 129, 0.02)', padding: '3.5rem 3rem', textAlign: 'center', marginTop: '4rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Have a Janitorial Solicitation in Hand?</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
        Let us analyze the scope, build the task-based workloading model, run prevailing wage comparisons, and compile a compliant bid package.
      </p>
      <div className="flex justify-between align-center gap-2" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/government-contract-readiness-assessment/" className="btn btn-primary">
          Check Bid Readiness <ArrowRight size={16} />
        </Link>
        <Link to="/contact/" className="btn btn-secondary">
          Request Solicitation Review
        </Link>
      </div>
    </div>
  );
}

/* ============================================================================
   1. HOMEPAGE
   ============================================================================ */

export function Home() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 0 6rem' }}>
        <h1 className="text-gradient">Find, Price, and Prepare<br />Government Cleaning Bids</h1>
        <p style={{ maxWidth: '750px', margin: '0 auto 2.5rem', fontSize: '1.2rem', lineHeight: '1.7' }}>
          Find public-sector cleaning opportunities, check whether your company is ready, understand every requirement, calculate an auditable price, and prepare a compliant bid package using your verified company information.
        </p>
        <div className="flex justify-between align-center gap-2" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/government-contract-readiness-assessment/" className="btn btn-primary">
            Check Bid Readiness <ArrowRight size={16} />
          </Link>
          <Link to="/how-it-works/" className="btn btn-secondary">
            See How It Works
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>The Bid Barrier</span>
          <h2 style={{ marginTop: '0.5rem' }}>Why Cleaning Companies Lose Government Bids</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="card">
            <div style={{ color: 'var(--danger)', marginBottom: '1.25rem' }}>
              <AlertOctagon size={32} />
            </div>
            <h3>Scattered Portals & Forms</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Wasting hours hunting for bids on SAM.gov and local portals, then struggling with confusing agency registration forms.
            </p>
          </div>
          <div className="card">
            <div style={{ color: 'var(--danger)', marginBottom: '1.25rem' }}>
              <AlertOctagon size={32} />
            </div>
            <h3>Prevailing Wage Risks</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Service Contract Labor Standards (SCLS) are complex. Missing a wage determination or health/welfare fringe requirement triggers automatic rejection.
            </p>
          </div>
          <div className="card">
            <div style={{ color: 'var(--danger)', marginBottom: '1.25rem' }}>
              <AlertOctagon size={32} />
            </div>
            <h3>Unstructured Pricing</h3>
            <p style={{ fontSize: '0.95rem' }}>
              Guessing cleaning rates by square footage instead of using deterministic task-based workloading formulas leads to thin margins or immediate losses.
            </p>
          </div>
        </div>
      </section>

      {/* What the System Does */}
      <section style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderRadius: '16px', padding: '5rem 3rem' }}>
        <div className="grid grid-2col align-center">
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>End-to-End Concierge</span>
            <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>AI-Assisted, Operator-Reviewed</h2>
            <p>
              We own the complete task journey. We do not use fully automated scripts to write proposal templates or invent corporate credentials. Every claim is source-backed.
            </p>
            <ul className="checklist" style={{ marginBottom: '2rem' }}>
              <li className="checklist-item">
                <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Ingest & Extract</strong>: AI flags scope details, site-visit deadlines, and wage requirements.</span>
              </li>
              <li className="checklist-item">
                <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Deterministic Pricing</strong>: Formulas calculate labor burden, supplies, and option year escalation.</span>
              </li>
              <li className="checklist-item">
                <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span><strong>Compliance Matrix</strong>: Every mandatory instruction maps to a verify-ready checklist.</span>
              </li>
            </ul>
            <Link to="/how-it-works/" className="btn btn-secondary">
              Explore Our Workflow <ArrowRight size={16} />
            </Link>
          </div>
          <div className="card" style={{ border: '1px solid rgba(59, 130, 246, 0.15)' }}>
            <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} style={{ color: 'var(--secondary)' }} /> Release Controls
            </h3>
            <div className="flex flex-col gap-2" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              <div className="flex justify-between" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <span>Factual claim mappings</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>100% verified</span>
              </div>
              <div className="flex justify-between" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <span>Unresolved blocker gate</span>
                <span style={{ color: 'var(--danger)', fontWeight: 600 }}>Blocks release</span>
              </div>
              <div className="flex justify-between" style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <span>Wages & fringe audit</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Deterministic</span>
              </div>
              <div className="flex justify-between" style={{ padding: '0.5rem 0' }}>
                <span>Customer signoff required</span>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Mandatory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Partner Promo Section */}
      <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <div className="card" style={{ border: '1px solid var(--primary)', backgroundColor: 'rgba(59, 130, 246, 0.03)', padding: '3rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', backgroundColor: 'var(--primary)', color: '#ffffff', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', borderBottomLeftRadius: '12px' }}>
            Limited Offer
          </div>
          <div className="grid grid-2col align-center">
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Beta Launch Partner</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '1rem', color: '#ffffff' }}>Get Our Complete Bidding Services for Free</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                Janitorial Bid Helper is brand new, and we want to guarantee it delivers massive value to commercial cleaning businesses. We are looking for our first three partners to walk through the entire onboarding and bidding process.
              </p>
              <ul className="checklist" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <li className="checklist-item">
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  <span><strong>100% Free Onboarding & Setup</strong> (Valued at $1,500).</span>
                </li>
                <li className="checklist-item">
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  <span><strong>Free First Bid Opportunity Analysis</strong> (Valued at $750).</span>
                </li>
                <li className="checklist-item">
                  <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
                  <span><strong>Lifetime Upgrade Access</strong>: Get the final version for free as well.</span>
                </li>
              </ul>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ padding: '2rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>Apply for Beta Access</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  We are selecting only the first three eligible companies to receive this complete package for free in exchange for honest feedback.
                </p>
                <Link to="/contact/?promo=beta-partner" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Claim Free Access <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingBottom: '2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
        <div className="grid grid-cols-2 gap-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="card">
            <h4>Do you guarantee we will win the award?</h4>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              No. We guarantee a 100% compliant, complete, and audited submission package. Winning depends on agency evaluation, past performance rankings, and your pricing margins.
            </p>
          </div>
          <div className="card">
            <h4>Do you submit the bid on our behalf?</h4>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              No. The cleaning company retains full commercial and legal authority. We prepare the package and checklists, but you perform the final upload, signature, and submission.
            </p>
          </div>
          <div className="card">
            <h4>How do you calculate cleaning pricing?</h4>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              We use task-based workloading based on public benchmarks (ISSA/APPA) and your historical performance records. We model labor loaded hours, payroll burden, travel, overhead, and margin.
            </p>
          </div>
          <div className="card">
            <h4>What is the Bid-Ready Setup?</h4>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              It is a one-time onboarding service ($1,500) where we compile your business credentials, safety policies, insurance profiles, capability statements, and run your first opportunity analysis.
            </p>
          </div>
        </div>
      </section>

      <OpportunityCTA />
    </div>
  );
}

/* ============================================================================
   2. HOW IT WORKS
   ============================================================================ */

export function HowItWorks() {
  const steps = [
    { title: 'Qualify & Assess', desc: 'Run the readiness check to verify experience, insurance, location, and identify hard blockers.', icon: <UserCheck /> },
    { title: 'Ingest Solicitation', desc: 'Upload the SOW, pricing forms, wage documents, and Portal guidelines. We build the opportunity summary.', icon: <FileText /> },
    { title: 'Task Workloading', desc: 'Calculate daily/annual cleaning minutes using deterministic formulas based on square footage and benchmarks.', icon: <Layers /> },
    { title: 'Loaded Labor Burdens', desc: 'Determine wage requirements, FICA, unemployment, workers comp, benefits, and required fringe benefits.', icon: <DollarSign /> },
    { title: 'Draft Proposal & Audits', desc: 'Draft technical proposals, map claims to approved customer records, run checklists, and resolve blockers.', icon: <BookOpen /> },
    { title: 'Customer Release', desc: 'Review pricing scenarios, approve final margins, sign certifications, and upload to the agency portal.', icon: <Shield /> }
  ];

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Workflow</span>
        <h1 style={{ marginTop: '0.5rem' }}>Our Concierge Process</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>Six distinct gates to ensure your proposal is complete, compliant, and auditable.</p>
      </div>

      <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '4rem' }}>
        {steps.map((s, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div style={{ color: 'var(--primary)' }}>
                {s.icon}
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.05)', fontFamily: 'var(--font-display)' }}>
                0{idx + 1}
              </span>
            </div>
            <h3>{s.title}</h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ backgroundColor: 'rgba(59,130,246,0.02)', border: '1px solid rgba(59,130,246,0.1)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={20} style={{ color: 'var(--secondary)' }} /> Release Constraints</h3>
        <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
          Unlike generic writing tools, our Concierge Operating Manual enforces strict gates:
        </p>
        <ul className="checklist">
          <li className="checklist-item">
            <CheckCircle size={16} style={{ color: 'var(--primary)', marginTop: '3px' }} />
            <span><strong>No invented facts</strong>: Every claim must map to approved customer credentials.</span>
          </li>
          <li className="checklist-item">
            <CheckCircle size={16} style={{ color: 'var(--primary)', marginTop: '3px' }} />
            <span><strong>Hard Blockers</strong>: Missing site visits, expired registrations, or missing certifications block release.</span>
          </li>
          <li className="checklist-item">
            <CheckCircle size={16} style={{ color: 'var(--primary)', marginTop: '3px' }} />
            <span><strong>Reconciliation</strong>: Annual, monthly, base-year, and option-year pricing totals are checked independently.</span>
          </li>
        </ul>
      </div>

      <OpportunityCTA />
    </div>
  );
}

/* ============================================================================
   3. COMPANY SETUP
   ============================================================================ */

export function CompanySetup() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="grid grid-2col align-center">
        <div>
          <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Onboarding Package</span>
          <h1 style={{ marginTop: '0.5rem' }}>Bid-Ready Company Setup</h1>
          <p style={{ fontSize: '1.15rem' }}>
            A comprehensive, one-time onboarding service that gets your cleaning business ready to pursue public contracts.
          </p>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            $1,500 <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>One-time fee</span>
          </div>
          <ul className="checklist" style={{ marginBottom: '2rem' }}>
            <li className="checklist-item">
              <CheckCircle size={18} style={{ color: 'var(--primary)', marginTop: '3px' }} />
              <span><strong>Verified Company Profile</strong>: Build a structured database of legal identity, UEI, CAGE code, and SAM status.</span>
            </li>
            <li className="checklist-item">
              <CheckCircle size={18} style={{ color: 'var(--primary)', marginTop: '3px' }} />
              <span><strong>Document & Evidence Library</strong>: Organize active insurance certificates, licenses, and references.</span>
            </li>
            <li className="checklist-item">
              <CheckCircle size={18} style={{ color: 'var(--primary)', marginTop: '3px' }} />
              <span><strong>Pricing Defaults</strong>: Setup baseline cleaner wages, workers comp details, overheads, and target margins.</span>
            </li>
            <li className="checklist-item">
              <CheckCircle size={18} style={{ color: 'var(--primary)', marginTop: '3px' }} />
              <span><strong>First Opportunity Analysis</strong>: Includes one full solicitation extraction, compliance matrix, and bid/no-bid score.</span>
            </li>
          </ul>
          <Link to="/government-contract-readiness-assessment/" className="btn btn-primary">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>Included Outputs</h3>
          <ul className="checklist" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li className="checklist-item">
              <FileText size={18} style={{ color: 'var(--secondary)' }} />
              <div>
                <strong>Capability Statement</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>A professional, one-page PDF overview of your services, registrations, and past performance.</div>
              </div>
            </li>
            <li className="checklist-item">
              <FileText size={18} style={{ color: 'var(--secondary)' }} />
              <div>
                <strong>Reusable Response Library</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Standard templates for safety policies, environmental plans, and quality-control programs.</div>
              </div>
            </li>
            <li className="checklist-item">
              <FileText size={18} style={{ color: 'var(--secondary)' }} />
              <div>
                <strong>Entity Registration Audit</strong>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Active check of your CAGE code, NAICS classifications, and SBA certifications.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   4. BID BUILDER
   ============================================================================ */

export function BidBuilder() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Proposal Support</span>
        <h1 style={{ marginTop: '0.5rem' }}>Opportunity Analysis & Bid Builder</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>Turn a live solicitation package into a priced, audited, and submission-ready proposal.</p>
      </div>

      <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '4rem' }}>
        <div className="card">
          <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phase A</span>
          <h3 style={{ margin: '0.5rem 0' }}>Opportunity Analysis</h3>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.5rem' }}>$750 - $1,200 per bid</div>
          <p style={{ fontSize: '0.95rem' }}>
            Deep analysis of solicitation files and amendments to verify qualifications and identify hard stops.
          </p>
          <ul className="checklist">
            <li className="checklist-item"><CheckCircle size={16} /> Opportunity Summary Calendar</li>
            <li className="checklist-item"><CheckCircle size={16} /> Compliance Matrix Standard</li>
            <li className="checklist-item"><CheckCircle size={16} /> Bid/No-Bid Decision Score</li>
            <li className="checklist-item"><CheckCircle size={16} /> Bid-specific Clarification Log</li>
          </ul>
        </div>

        <div className="card">
          <span style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phase B</span>
          <h3 style={{ margin: '0.5rem 0' }}>Full Proposal Production</h3>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '1.5rem' }}>$1,500 - $2,500 per bid</div>
          <p style={{ fontSize: '0.95rem' }}>
            Full task-based workloading, wages calculations, proposal drafting, and release checklists.
          </p>
          <ul className="checklist">
            <li className="checklist-item"><CheckCircle size={16} /> Task-based Pricing Scenarios</li>
            <li className="checklist-item"><CheckCircle size={16} /> Prevailing Wage Reconciliation</li>
            <li className="checklist-item"><CheckCircle size={16} /> Evidence-backed Proposal Text</li>
            <li className="checklist-item"><CheckCircle size={16} /> Portal Submission Checklist</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-info" style={{ padding: '1.5rem', borderRadius: '12px' }}>
        <Shield size={24} style={{ flexShrink: 0 }} />
        <div>
          <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.25rem' }}>Strict Gate Rule</strong>
          <span style={{ fontSize: '0.9rem' }}>
            We only proceed to Full Proposal Production (Phase B) after the readiness, source-completeness, and bid/no-bid decision gates in Phase A pass successfully. We do not write proposal text for unqualified opportunities.
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   5. CONTRACT RADAR
   ============================================================================ */

export function ContractRadar() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '650px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.08)', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
            <Clock size={40} />
          </div>
          <span style={{ color: 'var(--secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Upcoming Tool</span>
          <h1 style={{ fontSize: '2.25rem', marginTop: '0.5rem' }}>Contract Radar</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            An intelligent opportunity match feed that monitors SAM.gov, county portals, and municipal sites, parser alert links, and tracks addenda/deadlines specifically for commercial cleaning contracts.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group" style={{ textAlign: 'left', marginBottom: 0 }}>
                <label className="form-label">Join the Waitlist</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email to secure early beta access" 
                  className="form-input" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Secure Early Access <ArrowRight size={16} />
              </button>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                Contract Radar is currently in expert-calibration. Estimated release: Q4 2026.
              </div>
            </form>
          ) : (
            <div className="alert alert-info" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CheckCircle size={32} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: 700, color: '#ffffff' }}>You are on the list!</div>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                We will email you at <strong>{email}</strong> when early access spots open up.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   6. METHODOLOGY
   ============================================================================ */

export function Methodology() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Scientific Estimating</span>
        <h1 style={{ marginTop: '0.5rem' }}>Pricing & Estimating Methodology</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>Deterministic, task-based workloading that ensures all contract economics are verifiable.</p>
      </div>

      <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '4rem' }}>
        <div className="card">
          <h3>Production Rate Source Hierarchy</h3>
          <p style={{ fontSize: '0.95rem' }}>
            We never use generic averages or square footage pricing alone. We follow a strict hierarchy for workloading calculations:
          </p>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Customer Measured History</strong>: Verified times from comparable facilities cleaned by your staff.</li>
            <li><strong>Site Walkthrough Study</strong>: Bid-specific measurements and timed cleaning trials.</li>
            <li><strong>Industry References</strong>: Customer-owned ISSA Cleaning Times & Tasks or APPA Operational Guidelines.</li>
            <li><strong>Public Examples</strong>: Weak benchmarks used only as provisional placeholders requiring customer verification.</li>
          </ol>
        </div>

        <div className="card">
          <h3>Deterministic Math Standards</h3>
          <p style={{ fontSize: '0.95rem' }}>
            All calculations are built around audit-ready mathematical formulas:
          </p>
          <ul className="checklist">
            <li className="checklist-item">
              <CheckCircle size={16} />
              <span><strong>Square-Foot Task</strong>: <code style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>minutes = sqft / rate * 60</code></span>
            </li>
            <li className="checklist-item">
              <CheckCircle size={16} />
              <span><strong>Loaded Wages</strong>: Base wage (highest of local minimum, customer wage, or SCLS wage) + payroll taxes + workers comp % + fringe benefits.</span>
            </li>
            <li className="checklist-item">
              <CheckCircle size={16} />
              <span><strong>Margin Formula</strong>: <code style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>price = cost / (1 - margin %)</code>. We target true margins, never arbitrary markup.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>SCLS & Prevailing Wage Compliance</h3>
        <p style={{ fontSize: '0.95rem', marginBottom: 0 }}>
          Federal service contracts require payment of local prevailing wages and separate health/welfare fringe benefits. Janitorial Bid Helper tracks these variables explicitly on a dedicated sheet, ensuring that health/welfare fringes are documented and verified separately from base wages. Inactive registrations, missing SCLS documents, or wage calculation contradictions immediately trigger a release block until resolved.
        </p>
      </div>
    </div>
  );
}

/* ============================================================================
   7. SECURITY & PRIVACY
   ============================================================================ */

export function Security() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Security & Privacy Baseline</h1>
        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.15rem' }}>
          How we protect your company records, proposal credentials, and sensitive bidding facts.
        </p>

        <div className="flex flex-col gap-3">
          <div className="card">
            <h3>Separate Customer Workspaces</h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              Your company credentials, past performance logs, pricing defaults, and solicitation files are stored in isolated, secure workspaces. We enforce strict role-based access rules so that customer contributor accounts cannot view or modify pricing defaults without owner delegation.
            </p>
          </div>

          <div className="card">
            <h3>Factual Mappings & Traceability</h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              Every claim made in a proposal draft maps directly to an approved customer record or evidence document (e.g. general liability certificate, reference letter, SAM.gov registration). No facts are invented.
            </p>
          </div>

          <div className="card">
            <h3>Audit Trails & Logs</h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              Our concierge workbook logs modification history, effective dates, and approval states for every pricing default and proposal section. Unresolved issues, expired evidence, or customer refusal of final approval responsibility immediately blocks package release.
            </p>
          </div>

          <div className="card">
            <h3>No Shared Training Data</h3>
            <p style={{ fontSize: '0.95rem', margin: 0 }}>
              We do not train generic public AI models on your proprietary pricing assumptions, client reference details, or employee resumes. Your data remains strictly your own.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   8. PRICING
   ============================================================================ */
export function Pricing() {
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planName: string, priceAmount: number, mode: 'payment' | 'subscription' = 'payment') => {
    setLoadingPlan(planName);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
          priceAmount,
          mode
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initiate checkout.');
      }
    } catch (e) {
      console.error(e);
      alert('An error occurred during checkout.');
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Simple Offers</span>
        <h1 style={{ marginTop: '0.5rem' }}>Service Engagement Plans</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '1.5rem' }}>Clear, transparent pricing with no hidden ranges or administrative surprises.</p>
        
        {/* Quick Promo Banner */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '99px', fontSize: '0.9rem' }}>
          <span style={{ backgroundColor: 'var(--primary)', color: '#ffffff', padding: '0.2rem 0.65rem', borderRadius: '99px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Beta Launch</span>
          <span style={{ color: '#ffffff' }}>Our first three clients get all services <strong>100% free</strong>.</span>
          <a href="#beta-partner-promo" style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 600 }}>Learn More &rarr;</a>
        </div>
      </div>

      {/* SECTION 1: ONBOARDING & PROPOSAL SERVICES */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
        Onboarding & Bidding Services
      </h2>
      <div className="grid grid-cols-3 gap-3" style={{ marginBottom: '4rem' }}>
        {/* Bid-Ready Setup */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Bid-Ready Setup</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', margin: '1rem 0' }}>
            $1,500 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>One-time</span>
          </div>
          <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            Full administrative onboarding, capability statement design, custom policies library, SAM.gov audit, and database pricing workbook.
          </p>
          <button 
            disabled={loadingPlan !== null}
            onClick={() => handleCheckout('Bid-Ready Setup', 150000, 'payment')}
            className="btn btn-secondary" 
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            {loadingPlan === 'Bid-Ready Setup' ? 'Loading...' : 'Select Setup'}
          </button>
        </div>

        {/* Commercial Bid Analysis */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--primary-hover)' }}>
          <h3>Commercial Bid Analysis</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', margin: '1rem 0' }}>
            $750 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Per bid</span>
          </div>
          <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            Compliance matrix, local prevailing wage checks, overhead pricing calculations, proposal drafting, and submission checklist for commercial and local municipal tenders.
          </p>
          <button 
            disabled={loadingPlan !== null}
            onClick={() => handleCheckout('Commercial Bid Analysis', 75000, 'payment')}
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            {loadingPlan === 'Commercial Bid Analysis' ? 'Loading...' : 'Select Analysis'}
          </button>
        </div>

        {/* Complex Bid Analysis */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Complex Bid Analysis</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', margin: '1rem 0' }}>
            $1,500 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Per bid</span>
          </div>
          <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            Advanced compliance reviews, federal SAM.gov RFPs, healthcare sanitation requirements, security clearance processing, and union/CBA compliance checks.
          </p>
          <button 
            disabled={loadingPlan !== null}
            onClick={() => handleCheckout('Complex Bid Analysis', 150000, 'payment')}
            className="btn btn-secondary" 
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            {loadingPlan === 'Complex Bid Analysis' ? 'Loading...' : 'Select Analysis'}
          </button>
        </div>
      </div>

      {/* SECTION 2: SMART OPPORTUNITY ALERTS */}
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
        Smart Opportunity Monitoring
      </h2>
      <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '4rem' }}>
        {/* Metro Radar */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Metro Radar</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', margin: '1rem 0' }}>
            $199 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Per month</span>
          </div>
          <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            Real-time janitorial bid alerts, deadline reminders, and amendment tracking targeted strictly to your primary metropolitan area and local counties.
          </p>
          <button 
            disabled={loadingPlan !== null}
            onClick={() => handleCheckout('Metro Radar Subscription', 19900, 'subscription')}
            className="btn btn-secondary" 
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            {loadingPlan === 'Metro Radar Subscription' ? 'Loading...' : 'Subscribe'}
          </button>
        </div>

        {/* Statewide Radar */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--primary-hover)' }}>
          <h3>Statewide Radar</h3>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)', margin: '1rem 0' }}>
            $399 <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Per month</span>
          </div>
          <p style={{ fontSize: '0.9rem', flexGrow: 1 }}>
            Full-state monitoring, multi-state tenders, airport authority bids, state university system alerts, and advanced filtering for specialized facility tenders.
          </p>
          <button 
            disabled={loadingPlan !== null}
            onClick={() => handleCheckout('Statewide Radar Subscription', 39900, 'subscription')}
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '1.5rem' }}
          >
            {loadingPlan === 'Statewide Radar Subscription' ? 'Loading...' : 'Subscribe'}
          </button>
        </div>
      </div>

      {/* Detailed Promo Section */}
      <div id="beta-partner-promo" className="card" style={{ border: '1px solid var(--primary)', backgroundColor: 'rgba(59, 130, 246, 0.02)', padding: '2.5rem', borderRadius: '12px', marginBottom: '4rem', marginTop: '4rem' }}>
        <div className="flex align-center gap-3" style={{ marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ padding: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.08)', borderRadius: '50%', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Layers size={24} />
          </div>
          <div>
            <h3 style={{ margin: 0, color: '#ffffff' }}>Beta Launch Partner Program</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>Limited Opportunity &mdash; 3 Slots Available</span>
          </div>
        </div>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
          To ensure Janitorial Bid Helper delivers the best possible experience and compliance results, we are launching a Beta Partner Program. The first three janitorial companies to sign up will receive our **Bid-Ready Setup** ($1,500 value) and their first **Commercial Bid Analysis** ($750 value) completely free of charge. 
        </p>
        <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-secondary)', marginTop: '1rem' }}>
          We will work closely with you to set up your profiles and analyze your bid, using your feedback to optimize our workflows. Once the platform upgraded version is ready, you will receive the final, complete version for free as well.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link to="/contact/?promo=beta-partner" className="btn btn-primary">
            Apply for Free Setup <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '4rem' }}>
        <h3 style={{ marginBottom: '1rem' }}>Pricing Exclusions</h3>
        <p style={{ fontSize: '0.95rem', margin: 0 }}>
          We focus strictly on routine commercial office and public facility janitorial bids. Healthcare, hazardous remediation, airport terminals, high-security sites, or CBA union contracts are excluded or handled on an escalation-only basis.
        </p>
      </div>
    </div>
  );
}

export function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id') || '';
  const plan = searchParams.get('plan') || 'Service Engagement';

  return (
    <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <div className="glass-panel" style={{ maxWidth: '600px', margin: '0 auto', padding: '3.5rem 2rem' }}>
        <CheckCircle size={64} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
        <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>Payment Successful!</h1>
        <p style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '2rem' }}>
          Thank you for purchasing the <strong>{plan}</strong>. Your payment was processed successfully.
        </p>
        <div style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0', marginBottom: '2rem', textAlign: 'left', fontSize: '0.95rem' }}>
          <h3 style={{ marginBottom: '0.75rem', color: '#ffffff' }}>Next Steps:</h3>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>
            <li>An onboarding email has been sent to your registered address.</li>
            <li>Our operations team will set up your workspace within 2 hours.</li>
            <li>If you have a live solicitation document, please prepare to upload it in your workspace.</li>
          </ul>
        </div>
        {sessionId && (
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Receipt Reference: <code style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{sessionId}</code>
          </div>
        )}
        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          Return Home <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}/* ============================================================================
   9. CONTACT
   ============================================================================ */

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '', hasSolicitation: 'No' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div className="grid grid-2col align-center">
        <div>
          <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>Get in Touch</span>
          <h1 style={{ marginTop: '0.5rem' }}>Let&apos;s Discuss Your Next Bid</h1>
          <p>
            Whether you want to setup your Bid-Ready profile, analyze a live solicitation, or request early access to our Contract Radar tool, we are here to assist.
          </p>

          <div style={{ marginTop: '2.5rem' }}>
            <div className="flex align-center gap-2" style={{ marginBottom: '1.25rem' }}>
              <Mail size={18} style={{ color: 'var(--primary)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Email Us</span>
                <span style={{ fontWeight: 600, color: '#ffffff' }}>operator@janitorialbidhelper.com</span>
              </div>
            </div>

            <div className="flex align-center gap-2" style={{ marginBottom: '1.25rem' }}>
              <Phone size={18} style={{ color: 'var(--primary)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Call Support</span>
                <span style={{ fontWeight: 600, color: '#ffffff' }}>+1 (888) 555-BID-HELP</span>
              </div>
            </div>

            <div className="flex align-center gap-2">
              <MapPin size={18} style={{ color: 'var(--primary)' }} />
              <div>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Corporate HQ</span>
                <span style={{ fontWeight: 600, color: '#ffffff' }}>Portland, Oregon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  value={formData.company}
                  onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  required 
                  className="form-input" 
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Do you have a live solicitation in hand?</label>
                <select 
                  className="form-select"
                  value={formData.hasSolicitation}
                  onChange={e => setFormData(prev => ({ ...prev, hasSolicitation: e.target.value }))}
                >
                  <option value="No">No, just exploring</option>
                  <option value="Yes - Federal (SAM.gov)">Yes - Federal (SAM.gov)</option>
                  <option value="Yes - State or Local">Yes - State or Local</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">How can we assist you?</label>
                <textarea 
                  rows={4} 
                  required 
                  className="form-textarea" 
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Request <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle size={48} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Thank you for contacting us, <strong>{formData.name}</strong>. Our operator will email you back within 24 hours to schedule your strategy review call.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
