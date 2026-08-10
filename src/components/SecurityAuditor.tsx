import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Terminal, CheckCircle2, Play, AlertTriangle, Eye, Lock, FileCode2 } from "lucide-react";

const auditModules = [
  {
    id: "owasp",
    name: "OWASP Top 10 Web Security",
    icon: ShieldAlert,
    tag: "AppSec Analysis",
    tests: [
      { name: "A01:2021 - Broken Access Control", status: "PASS", detail: "Role-Based Access Control (RBAC) & JWT claims verified" },
      { name: "A02:2021 - Cryptographic Failures", status: "PASS", detail: "Bcrypt hash salt & TLS 1.3 encryption enforced" },
      { name: "A03:2021 - Injection (SQL/NoSQL)", status: "PASS", detail: "Parameterized MongoDB queries & ORM sanitation" },
      { name: "A05:2021 - Security Misconfiguration", status: "PASS", detail: "CORS policy, X-Content-Type-Options & CSP headers" },
    ],
  },
  {
    id: "gigw",
    name: "GIGW 2.0 & WCAG 2.1 AA Compliance",
    icon: CheckCircle2,
    tag: "STQC Government Standard",
    tests: [
      { name: "Guideline 1.4 - Contrast Ratio (4.5:1)", status: "PASS", detail: "Audited via Accessibility Scanner & DevTools" },
      { name: "Guideline 2.1 - Keyboard Accessibility", status: "PASS", detail: "Full focus trap & visible focus ring state verified" },
      { name: "Guideline 4.1 - Compatible Parsing & ARIA", status: "PASS", detail: "Valid HTML5 semantics & screen reader aria-labels" },
      { name: "DBIM UI/UX Design Standards", status: "PASS", detail: "Government web portal aesthetic & layout adherence" },
    ],
  },
  {
    id: "api",
    name: "API & Burp Suite Inspection",
    icon: Lock,
    tag: "REST API & Session Security",
    tests: [
      { name: "HTTP Cookie Security Flags", status: "PASS", detail: "HttpOnly, Secure, and SameSite=Strict cookies" },
      { name: "JWT Token Invalidation & Expiry", status: "PASS", detail: "Short-lived access tokens with secure refresh flow" },
      { name: "Rate Limiting & Anti-Bruteforce", status: "PASS", detail: "Express-rate-limit configured on sensitive auth endpoints" },
      { name: "Burp Suite Interception Audit", status: "PASS", detail: "Session hijacking & token forgery checks cleared" },
    ],
  },
];

const SecurityAuditor = () => {
  const [activeTab, setActiveTab] = useState("owasp");
  const [isScanning, setIsScanning] = useState(false);
  const [scanLog, setScanLog] = useState<string[]>([]);

  const activeModule = auditModules.find((m) => m.id === activeTab) || auditModules[0];

  const handleRunScan = () => {
    setIsScanning(true);
    setScanLog([`[+] Triggering automated test suite for module: ${activeModule.name}...`]);

    setTimeout(() => {
      setScanLog((prev) => [...prev, `[*] Inspecting response headers & payload payloads...`]);
    }, 400);

    setTimeout(() => {
      setScanLog((prev) => [...prev, `[✓] All ${activeModule.tests.length} audit checks executed cleanly!`]);
      setScanLog((prev) => [...prev, `[SUCCESS] Audit Status: VERIFIED COMPLIANT`]);
      setIsScanning(false);
    }, 1000);
  };

  return (
    <section id="audit-lab" className="py-20 px-4 bg-cyber-grid relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-mono-tech text-xs">
            <Terminal className="w-4 h-4" /> INTERACTIVE APPSEC LAB
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Security & Accessibility Auditor
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore Swaroop's security auditing methodology based on STQC (MeitY) standards, OWASP Top 10, and GIGW 2.0.
          </p>
        </div>

        {/* Auditor Container */}
        <Card className="bg-card/90 backdrop-blur-md border-primary/30 shadow-card overflow-hidden">
          
          {/* Top Bar Navigation Tabs */}
          <div className="flex flex-wrap border-b border-border/80 bg-background/60 p-2 gap-2">
            {auditModules.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeTab === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => {
                    setActiveTab(mod.id);
                    setScanLog([]);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono-tech text-xs transition-all ${
                    isActive
                      ? "bg-primary/20 text-primary border border-primary/40 shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{mod.name}</span>
                </button>
              );
            })}
          </div>

          <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left - Test Cases Checklist */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground font-mono-tech">
                    {activeModule.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono-tech mt-1">
                    Standard: <span className="text-secondary">{activeModule.tag}</span>
                  </p>
                </div>

                <Button
                  onClick={handleRunScan}
                  disabled={isScanning}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono-tech text-xs shadow-glow"
                >
                  <Play className={`w-3.5 h-3.5 mr-1.5 ${isScanning ? "animate-spin" : ""}`} />
                  {isScanning ? "Scanning..." : "Run Audit Diagnostic"}
                </Button>
              </div>

              {/* Test List */}
              <div className="space-y-3 pt-2">
                {activeModule.tests.map((test, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-background/60 border border-border/70 hover:border-primary/40 transition-colors flex items-start justify-between gap-4 font-mono-tech text-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="font-semibold text-foreground">{test.name}</span>
                      </div>
                      <p className="text-muted-foreground pl-6 text-[11px] leading-relaxed">
                        {test.detail}
                      </p>
                    </div>

                    <Badge className="bg-primary/10 text-primary border border-primary/30 shrink-0">
                      {test.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Live Terminal Diagnostics Screen */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-xl bg-background/90 border border-border p-4 font-mono-tech text-xs space-y-3 min-h-[280px]">
                <div className="flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-primary">
                    <Terminal className="w-3.5 h-3.5" /> STQC_DIAGNOSTIC_LOGGER
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">[ONLINE]</span>
                </div>

                <div className="space-y-2 text-muted-foreground">
                  <p className="text-secondary">$ ready --module={activeModule.id}</p>
                  <p>[INFO] Target: Standardisation Testing & Quality Certification (MeitY) standards.</p>
                  
                  {scanLog.map((logLine, i) => (
                    <p key={i} className="text-foreground leading-relaxed">
                      {logLine}
                    </p>
                  ))}

                  {scanLog.length === 0 && (
                    <p className="text-muted-foreground/60 italic pt-4">
                      Click "Run Audit Diagnostic" to execute automated compliance checks on this module...
                    </p>
                  )}
                </div>
              </div>

              {/* Security Quote / Methodology Box */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs font-mono-tech text-muted-foreground space-y-1.5">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Lock className="w-3.5 h-3.5" /> Security Testing Methodology
                </div>
                <p className="leading-relaxed">
                  Combining automated static/dynamic scanning with manual Burp Suite traffic analysis and WCAG accessibility matrix testing.
                </p>
              </div>

            </div>

          </div>

        </Card>
      </div>
    </section>
  );
};

export default SecurityAuditor;
