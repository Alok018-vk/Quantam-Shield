import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Shield,
  FileSignature,
  Search,
  ArrowRight,
  FileText,
  Key,
  FileCheck,
  ShieldCheck,
  Award,
  Atom,
  Activity,
  AlertTriangle,
  Lock,
  Download,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export const PrototypeEntryPage: React.FC = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState<string | null>(null);

  const handleEnterSigner = async () => {
    setIsNavigating('signer');
    try {
      if (user?.role !== 'DIGITAL_SIGNATURE_USER') {
        await login({ email: 'user@qshield.com', password: 'UserPassword123!' });
      }
      navigate('/signature/dashboard');
    } catch (err) {
      console.error('Signer entry error:', err);
      navigate('/signature/dashboard');
    } finally {
      setIsNavigating(null);
    }
  };

  const handleEnterAnalyst = async () => {
    setIsNavigating('analyst');
    try {
      if (user?.role !== 'SECURITY_ANALYST') {
        await login({ email: 'analyst@qshield.com', password: 'AnalystPassword123!' });
      }
      navigate('/security/dashboard');
    } catch (err) {
      console.error('Analyst entry error:', err);
      navigate('/security/dashboard');
    } finally {
      setIsNavigating(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        
        {/* ==================================================================== */}
        {/* BRAND HEADER                                                         */}
        {/* ==================================================================== */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan via-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20 mb-1">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Q-SHIELD
          </h1>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Quantum-Inspired Cyber Threat Detection
          </p>
          <p className="text-xs text-slate-500 max-w-lg mx-auto">
            Select a prototype role below to enter the operational console and experience the complete digital signature security lifecycle.
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 1. DUAL ROLE ENTRY OPTIONS                                           */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* OPTION 1: CREATE SIGNATURE */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <FileSignature size={24} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                  Role Option 01
                </span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                  CREATE SIGNATURE
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Go to Signer Dashboard
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Upload raw evidence documents, apply cryptographic digital signatures, bind X.509 certificates, and inspect signed artifact records.
              </p>
            </div>

            <button
              onClick={handleEnterSigner}
              disabled={isNavigating !== null}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 px-5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>{isNavigating === 'signer' ? 'Entering Signer Workspace...' : 'ENTER →'}</span>
              {isNavigating !== 'signer' && (
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>

          {/* OPTION 2: SECURITY ANALYST */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan transition-all p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-cyan flex items-center justify-center font-bold">
                <Search size={24} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-cyan-hover uppercase tracking-wider block">
                  Role Option 02
                </span>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight mt-0.5">
                  SECURITY ANALYST
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Analyse & Verify Documents
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Execute classical signature digest verification, certificate trust inspection, multi-qubit QDS teleportation, and threat anomaly detection.
              </p>
            </div>

            <button
              onClick={handleEnterAnalyst}
              disabled={isNavigating !== null}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-cyan border border-cyan/40 py-3 px-5 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center space-x-2 cursor-pointer group"
            >
              <span>{isNavigating === 'analyst' ? 'Entering SOC Workspace...' : 'ENTER →'}</span>
              {isNavigating !== 'analyst' && (
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>

        </div>

        {/* ==================================================================== */}
        {/* 3. HOW Q-SHIELD WORKS DIAGRAM                                        */}
        {/* ==================================================================== */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-200 pb-4 text-center">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight uppercase">
              HOW Q-SHIELD WORKS
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              End-to-End Cryptographic Intake, Quantum-Inspired Inspection & Forensic Reporting Pipeline
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="flex flex-col items-center space-y-3 max-w-xl mx-auto text-xs">
            
            {/* Step 1: Document */}
            <div className="w-full max-w-xs p-3 bg-slate-50 border border-slate-200 rounded-xl text-center shadow-xs flex items-center justify-center space-x-2">
              <FileText size={16} className="text-slate-600" />
              <span className="font-bold text-slate-900">DOCUMENT</span>
            </div>

            <div className="text-slate-400 font-bold text-sm">↓</div>

            {/* Step 2: Digital Signature */}
            <div className="w-full max-w-xs p-3 bg-blue-50 border border-blue-200 rounded-xl text-center shadow-xs flex items-center justify-center space-x-2">
              <Key size={16} className="text-blue-600" />
              <span className="font-bold text-blue-900">DIGITAL SIGNATURE</span>
            </div>

            <div className="text-slate-400 font-bold text-sm">↓</div>

            {/* Step 3: Signed Document */}
            <div className="w-full max-w-xs p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center shadow-xs flex items-center justify-center space-x-2">
              <FileCheck size={16} className="text-emerald-700" />
              <span className="font-bold text-emerald-900">SIGNED DOCUMENT</span>
            </div>

            <div className="text-slate-400 font-bold text-sm">↓</div>

            {/* Dual Role Split */}
            <div className="w-full grid grid-cols-2 gap-4 pt-1">
              
              {/* Branch Left: Signer Dashboard */}
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-center flex flex-col items-center justify-center space-y-1">
                <FileSignature size={18} className="text-blue-600" />
                <span className="font-bold text-blue-900 text-xs">SIGNER DASHBOARD</span>
                <span className="text-[10px] text-blue-700">Creates & manages signed document records</span>
              </div>

              {/* Branch Right: Security Analyst */}
              <div className="p-3 bg-slate-900 border border-cyan/40 rounded-xl text-center flex flex-col items-center justify-center space-y-1 text-white">
                <Search size={18} className="text-cyan" />
                <span className="font-bold text-cyan text-xs">SECURITY ANALYST</span>
                <span className="text-[10px] text-slate-300">Inspects evidence & initiates 7-stage security analysis</span>
              </div>
            </div>

            <div className="w-full flex justify-end pr-14 text-slate-400 font-bold text-sm">↓</div>

            {/* Security Analyst 7-Stage Pipeline Container */}
            <div className="w-full border border-slate-200 rounded-xl bg-slate-50/60 p-4 space-y-2.5">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center border-b border-slate-200 pb-1.5">
                Security Analyst Verification Pipeline
              </div>

              {/* Stage 1 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">CLASSICAL VERIFICATION</span>
                  <span className="text-[10px] text-slate-500">RSA/ECDSA digest verification & byte-range integrity</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 2 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <Award size={15} className="text-blue-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">CERTIFICATE ANALYSIS</span>
                  <span className="text-[10px] text-slate-500">X.509 trust chain, issuer verification, validity period, & revocation</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 3 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <Atom size={15} className="text-indigo-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">QDS / QUANTUM ANALYSIS</span>
                  <span className="text-[10px] text-slate-500">Conjugate-basis encoding, Bell teleportation, & Pauli operators</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 4 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <Activity size={15} className="text-purple-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">STATISTICAL ANALYSIS</span>
                  <span className="text-[10px] text-slate-500">Born-rule outcome distribution, Total Variation Distance (TVD), & Chi-Square</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 5 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <AlertTriangle size={15} className="text-amber-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">THREAT DETECTION</span>
                  <span className="text-[10px] text-slate-500">Rule-based threat classifier: forgery, bit/phase flip, intercept, replay</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 6 */}
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center space-x-2.5">
                <Lock size={15} className="text-red-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-slate-900 block">RISK ASSESSMENT</span>
                  <span className="text-[10px] text-slate-500">Multi-criteria deterministic scoring (Low, Medium, High, Critical)</span>
                </div>
              </div>

              <div className="text-center text-slate-400 font-bold text-xs">↓</div>

              {/* Stage 7 */}
              <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300 flex items-center space-x-2.5">
                <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                <div className="min-w-0 flex-1">
                  <span className="font-bold text-emerald-950 block">SECURITY REPORT</span>
                  <span className="text-[10px] text-emerald-800">Final security decision verdict, tamper-evident audit trail, & PDF dossier</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ==================================================================== */}
        {/* FOOTER & MANUAL LOGIN ALTERNATIVE                                    */}
        {/* ==================================================================== */}
        <div className="text-center space-y-2 pt-2">
          <button
            onClick={() => navigate('/login')}
            className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
          >
            Need custom credentials? Go to Password Login Form →
          </button>
          <p className="text-[11px] text-slate-400">
            Q-SHIELD Prototype Console &copy; 2026. Designed for Smart India Hackathon.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrototypeEntryPage;
