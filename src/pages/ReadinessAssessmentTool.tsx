import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, ArrowLeft, RefreshCw, Sparkles, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: string;
  section: string;
  question: string;
  description: string;
  weight: number;
  hardStop: boolean;
}

const QUESTIONS: Question[] = [
  { id: 'R1', section: 'Experience', question: 'Has documented recurring commercial or institutional cleaning experience?', description: 'Your company must have previous experience cleaning commercial offices, schools, municipal buildings, or warehouses. Residential-only cleaning experience does not qualify for public-sector janitorial solicitations.', weight: 10, hardStop: true },
  { id: 'R2', section: 'Experience', question: 'Can the company document at least one comparable facility, contract, or reference?', description: 'You must be able to provide past performance records, copy of contracts, or reference contact information for a similar sized commercial job.', weight: 8, hardStop: true },
  { id: 'R3', section: 'Geography', question: "Is the proposed geography within the company's approved service area?", description: 'The facility location must be in a city or county where your staff can realistically commute and execute the daily work.', weight: 8, hardStop: true },
  { id: 'R4', section: 'Capacity', question: 'Does staffing or recruiting capacity plausibly support the opportunity?', description: 'You must have enough cleaners on staff or have a verified, quick recruiting pipeline to hire the required number of workers before the contract start date.', weight: 10, hardStop: true },
  { id: 'R5', section: 'Capacity', question: 'Is a supervisor or quality-control role available?', description: 'Having a designated team lead or inspector ensures service levels are met. (Recommended, but not a hard blocker).', weight: 6, hardStop: false },
  { id: 'R6', section: 'Eligibility', question: 'Can required registrations be active by the solicitation deadline?', description: 'This includes active registrations in SAM.gov (with UEI and CAGE code) for federal work, or state/local business licenses as required.', weight: 8, hardStop: true },
  { id: 'R7', section: 'Eligibility', question: 'Can required insurance, licenses, and ordinary background checks be met?', description: 'Solicitations usually require general liability, workers comp, commercial auto, background checks for guards/cleaners, and sometimes bonding.', weight: 8, hardStop: true },
  { id: 'R8', section: 'Evidence', question: 'Are insurance, registrations, policies, past performance, and references documented or obtainable?', description: 'You have actual PDF certificates, screenshots, resumes, safety plans, quality-control checklists, or other written proof ready to submit.', weight: 7, hardStop: false },
  { id: 'R9', section: 'Pricing', question: 'Can the customer provide or approve wages, burden, production assumptions, supplies, overhead, and margin?', description: 'You know your local labor rates, workers comp insurance percentages, supply costs, and are willing to calculate pricing using deterministic formulas.', weight: 10, hardStop: true },
  { id: 'R10', section: 'Cash flow', question: 'Can the company fund payroll, supplies, mobilization, and payment timing?', description: 'Public contracts pay net 30 or net 45 days. You must be able to carry payroll float and supply costs for the first 60 days before government payment arrives.', weight: 8, hardStop: true },
  { id: 'R11', section: 'Scope', question: 'Is the opportunity within the supported standard janitorial scope?', description: 'Standard offices, schools, libraries, municipal facilities, and warehouses. Excludes high-risk spaces like healthcare/labs, biohazards, and high-security sites.', weight: 8, hardStop: true },
  { id: 'R12', section: 'Process', question: 'Will the customer attend required site visits and answer bid-specific questions?', description: 'Attending mandatory pre-bid walkthroughs is critical. Missing a mandatory site visit results in immediate disqualification.', weight: 5, hardStop: true },
  { id: 'R13', section: 'Approval', question: 'Will the customer approve facts, pricing, representations, certifications, signatures, and submission?', description: 'A corporate officer must review the final price model, approve all claims made in the proposal text, and sign the official forms.', weight: 8, hardStop: true },
  { id: 'R14', section: 'Truthfulness', question: 'Does the customer accept that unsupported claims will be blocked?', description: 'Janitorial Bid Helper follows a strict truthfulness standard. We will block any attempt to exaggerate experience, certifications, or employee numbers.', weight: 5, hardStop: true },
  { id: 'R15', section: 'Expectations', question: 'Does the customer understand that the process does not guarantee an award?', description: 'We guarantee a 100% complete, compliant, and audited proposal package. We do not guarantee the agency will choose your company as the winner.', weight: 4, hardStop: true }
];

type AnswerValue = 'Yes' | 'Partial' | 'No' | 'Unknown' | '';

export default function ReadinessAssessmentTool() {
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>(
    QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {})
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = QUESTIONS[currentStep];

  const handleAnswer = (value: AnswerValue) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: value }));
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    setIsSubmitted(true);
  };

  const resetAssessment = () => {
    setAnswers(QUESTIONS.reduce((acc, q) => ({ ...acc, [q.id]: '' }), {}));
    setCurrentStep(0);
    setIsSubmitted(false);
    setEmail('');
    setCompanyName('');
    setLeadSaved(false);
  };

  // Calculations
  const getQuestionScore = (q: Question, val: AnswerValue) => {
    if (val === 'Yes') return q.weight;
    if (val === 'Partial') return q.weight * 0.5;
    return 0;
  };

  const getQuestionStatus = (q: Question, val: AnswerValue) => {
    if (!val) return q.hardStop ? 'BLOCKER' : 'CLARIFY';
    if (q.hardStop && val !== 'Yes') {
      if (val === 'Unknown') return 'CLARIFY';
      return 'BLOCKER';
    }
    if (val === 'Unknown') return 'CLARIFY';
    return 'OK';
  };

  // Compute overall statistics
  let weightedSum = 0;
  let maxPossibleWeight = 0;
  let hardBlockersCount = 0;
  let clarifyCount = 0;

  QUESTIONS.forEach(q => {
    const val = answers[q.id];
    weightedSum += getQuestionScore(q, val);
    maxPossibleWeight += q.weight;

    const status = getQuestionStatus(q, val);
    if (status === 'BLOCKER') {
      hardBlockersCount++;
    } else if (status === 'CLARIFY') {
      clarifyCount++;
    }
  });

  const weightedScore = maxPossibleWeight > 0 ? weightedSum / maxPossibleWeight : 0;

  // Determine classification
  let classification: 'READY' | 'ALMOST_READY' | 'NOT_READY' | 'NO_BID' = 'NOT_READY';
  let nextActionText = '';
  let classificationLabel = '';
  let classificationClass = '';

  if (hardBlockersCount > 0) {
    classification = 'NO_BID';
    classificationLabel = 'No-Bid / Hold';
    classificationClass = 'alert-danger';
    nextActionText = 'Resolve critical hard blockers before bidding. The current opportunity has conflicts or capacity mismatches that make a submission non-viable.';
  } else if (weightedScore >= 0.8) {
    classification = 'READY';
    classificationLabel = 'Ready Now';
    classificationClass = 'alert-info';
    nextActionText = 'Proceed to setup and opportunity analysis. Your company meets all major credentials, experience, and pricing prerequisites.';
  } else if (weightedScore >= 0.6) {
    classification = 'ALMOST_READY';
    classificationLabel = 'Almost Ready';
    classificationClass = 'alert-warning';
    nextActionText = 'Recommend Bid-Ready Company Setup before bid package. Work with our team to resolve minor gaps in certifications, insurance, or documentation library.';
  } else {
    classification = 'NOT_READY';
    classificationLabel = 'Not Ready';
    classificationClass = 'alert-warning';
    nextActionText = 'Create a custom preparation plan and resources list. You have several operational gaps to close before bidding on public contracts.';
  }

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName) return;
    setIsSubmittingLead(true);
    setTimeout(() => {
      setIsSubmittingLead(false);
      setLeadSaved(true);
      if (classification === 'READY') {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }, 1000);
  };

  const progressPercentage = Math.round((currentStep / totalQuestions) * 100);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {!isSubmitted ? (
          <div className="glass-panel">
            <div className="step-header">
              <div className="flex justify-between align-center" style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Section: {currentQuestion.section}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Question {currentStep + 1} of {totalQuestions}
                </span>
              </div>
              
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>

            <div className="step-container" style={{ minHeight: '280px' }}>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '1rem', color: '#ffffff' }}>
                {currentQuestion.question}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {currentQuestion.description}
              </p>

              {currentQuestion.hardStop && (
                <div className="alert alert-warning" style={{ padding: '0.65rem 1rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>This is a <strong>Hard Stop</strong> question. Answering &quot;No&quot; will flag this opportunity as No-Bid.</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2" style={{ marginTop: '2rem' }}>
              <button onClick={() => handleAnswer('Yes')} className="option-box selected">
                <CheckCircle size={20} style={{ color: 'var(--primary)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>Yes</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Full compliance & proof ready</div>
                </div>
              </button>

              <button onClick={() => handleAnswer('Partial')} className="option-box">
                <Sparkles size={20} style={{ color: 'var(--secondary)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>Partial</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Underway or partially met</div>
                </div>
              </button>

              <button onClick={() => handleAnswer('No')} className="option-box">
                <AlertTriangle size={20} style={{ color: 'var(--danger)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>No</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Cannot meet/refuse responsibility</div>
                </div>
              </button>

              <button onClick={() => handleAnswer('Unknown')} className="option-box">
                <HelpCircle size={20} style={{ color: 'var(--text-secondary)' }} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, color: '#ffffff' }}>Unknown</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Requires research or clarification</div>
                </div>
              </button>
            </div>

            <div className="flex justify-between align-center" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <button 
                onClick={goBack} 
                disabled={currentStep === 0}
                className="btn btn-secondary"
                style={{ opacity: currentStep === 0 ? 0.4 : 1, cursor: currentStep === 0 ? 'not-allowed' : 'pointer' }}
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={resetAssessment} className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
                <RefreshCw size={14} /> Restart
              </button>
            </div>
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '3.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.08)', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                {hardBlockersCount === 0 ? <CheckCircle size={48} /> : <AlertTriangle size={48} style={{ color: 'var(--danger)' }} />}
              </div>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Readiness Audit Results</h1>
              <p style={{ maxWidth: '500px', margin: '0 auto' }}>Assessment of your commercial capacity for public procurement solicitations.</p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-2 gap-3" style={{ marginBottom: '2.5rem' }}>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: hardBlockersCount === 0 ? 'var(--primary)' : 'var(--danger)', fontFamily: 'var(--font-display)' }}>
                  {Math.round(weightedScore * 100)}%
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                  Weighted Score
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: hardBlockersCount === 0 ? 'var(--primary)' : 'var(--danger)', fontFamily: 'var(--font-display)' }}>
                  {hardBlockersCount}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em', marginTop: '0.25rem' }}>
                  Hard Blockers
                </div>
              </div>
            </div>

            {/* Classification Alert Box */}
            <div className={`alert ${classificationClass}`} style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem' }}>
              <div className="flex align-center gap-2" style={{ fontWeight: 700, fontSize: '1.2rem' }}>
                {hardBlockersCount === 0 ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                Classification: {classificationLabel}
              </div>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                {nextActionText}
              </div>
            </div>

            {/* Detailed Question Checklists */}
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Opportunity Audit Checklist</h3>
            <div className="flex flex-col gap-3" style={{ marginBottom: '3.5rem' }}>
              {QUESTIONS.map(q => {
                const val = answers[q.id];
                const status = getQuestionStatus(q, val);
                
                let statusLabel = 'OK';
                let statusClass = 'rgba(16, 185, 129, 0.15)';
                let statusTextColor = 'var(--primary)';
                
                if (status === 'BLOCKER') {
                  statusLabel = 'BLOCKER';
                  statusClass = 'rgba(239, 68, 68, 0.15)';
                  statusTextColor = 'var(--danger)';
                } else if (status === 'CLARIFY') {
                  statusLabel = 'CLARIFY';
                  statusClass = 'rgba(245, 158, 11, 0.15)';
                  statusTextColor = 'var(--warning)';
                }

                return (
                  <div key={q.id} className="flex align-center justify-between" style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.925rem', color: '#ffffff' }}>
                        {q.id}. {q.question}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        Section: {q.section} | Weight: {q.weight}
                      </span>
                    </div>
                    <span style={{ 
                      padding: '0.25rem 0.65rem', 
                      borderRadius: '4px', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      backgroundColor: statusClass, 
                      color: statusTextColor,
                      letterSpacing: '0.05em'
                    }}>
                      {statusLabel}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Lead Capture Form */}
            {!leadSaved ? (
              <div className="card" style={{ border: '1px solid rgba(16, 185, 129, 0.2)', backgroundColor: 'rgba(16, 185, 129, 0.02)' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={20} style={{ color: 'var(--primary)' }} /> Save Audit Report & Setup Onboarding
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Enter your company details below to save this audit, receive a guided submission checklist, and request a personalized opportunity analysis with our operator.
                </p>
                <form onSubmit={handleLeadSubmit}>
                  <div className="grid grid-cols-2 gap-2" style={{ marginBottom: '1rem' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. CleanPro Services LLC" 
                        className="form-input"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. contact@cleanpro.com" 
                        className="form-input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmittingLead} className="btn btn-primary" style={{ width: '100%' }}>
                    {isSubmittingLead ? 'Processing...' : 'Save Audit & Request Consultation'} <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="alert alert-info" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'center', alignItems: 'center' }}>
                <CheckCircle size={32} style={{ color: 'var(--primary)', marginBottom: '0.25rem' }} />
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#ffffff' }}>Audit Report Saved Successfully!</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  A confirmation email has been sent to <strong>{email}</strong>. Our operator will reach out within 24 hours to schedule your Bid-Ready Company Setup onboarding.
                </p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <button onClick={resetAssessment} className="btn btn-secondary">
                <RefreshCw size={16} /> Run Another Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
