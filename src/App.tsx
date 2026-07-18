import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Home, HowItWorks, CompanySetup, BidBuilder, ContractRadar, Methodology, Security, Pricing, Contact, Success } from './pages/StaticPages';
import ReadinessAssessmentTool from './pages/ReadinessAssessmentTool';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
      <Link to="/how-it-works/" className={`nav-link ${isActive('/how-it-works/')}`}>How It Works</Link>
      <Link to="/bid-ready-company-setup/" className={`nav-link ${isActive('/bid-ready-company-setup/')}`}>Company Setup</Link>
      <Link to="/janitorial-bid-builder/" className={`nav-link ${isActive('/janitorial-bid-builder/')}`}>Bid Builder</Link>
      <Link to="/contract-radar/" className={`nav-link ${isActive('/contract-radar/')}`}>Contract Radar</Link>
      <Link to="/methodology/" className={`nav-link ${isActive('/methodology/')}`}>Methodology</Link>
      <Link to="/security-and-privacy/" className={`nav-link ${isActive('/security-and-privacy/')}`}>Security & Privacy</Link>
      <Link to="/pricing/" className={`nav-link ${isActive('/pricing/')}`}>Pricing</Link>
      <Link to="/contact/" className={`nav-link ${isActive('/contact/')}`}>Contact</Link>
      <Link to="/government-contract-readiness-assessment/" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
        Check Readiness
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        {/* Header */}
        <header>
          <div className="container flex justify-between align-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
              <div style={{ padding: '0.4rem', borderRadius: '8px', backgroundColor: 'var(--primary-glow)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={22} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', fontFamily: 'var(--font-display)' }}>
                Janitorial Bid <span style={{ color: 'var(--primary)' }}>Helper</span>
              </span>
            </Link>
            
            <Navigation />
          </div>
        </header>

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works/" element={<HowItWorks />} />
            <Route path="/bid-ready-company-setup/" element={<CompanySetup />} />
            <Route path="/janitorial-bid-builder/" element={<BidBuilder />} />
            <Route path="/contract-radar/" element={<ContractRadar />} />
            <Route path="/methodology/" element={<Methodology />} />
            <Route path="/security-and-privacy/" element={<Security />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/government-contract-readiness-assessment/" element={<ReadinessAssessmentTool />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '3rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Shield size={20} style={{ color: 'var(--primary)' }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                    Janitorial Bid Helper
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Deterministic estimating & compliance matrix automation for U.S. commercial cleaning companies. Built to enforce truthfulness in government procurement.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem' }}>Services</h4>
                <ul className="flex flex-col gap-1" style={{ listStyle: 'none' }}>
                  <li><Link to="/bid-ready-company-setup/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Company Onboarding</Link></li>
                  <li><Link to="/janitorial-bid-builder/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Opportunity Analysis</Link></li>
                  <li><Link to="/contract-radar/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Radar Alert waitlist</Link></li>
                </ul>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem' }}>Governance</h4>
                <ul className="flex flex-col gap-1" style={{ listStyle: 'none' }}>
                  <li><Link to="/methodology/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Estimating Standards</Link></li>
                  <li><Link to="/security-and-privacy/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Security Baseline</Link></li>
                  <li><Link to="/contact/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem' }}>Get in Touch</Link></li>
                </ul>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
              <span>&copy; {new Date().getFullYear()} Janitorial Bid Helper. All rights reserved.</span>
              <span>This system provides operational and estimating guidance; it does not constitute legal, accounting, wage, insurance, or procurement advice.</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
