import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send, ShieldCheck, Terminal, FileText, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // open mailto link with prefilled values
      const mailtoUrl = `mailto:swaroopwayadande@gmail.com?subject=${encodeURIComponent(formData.subject || "Security Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  const resumeUrl = "https://drive.google.com/drive/folders/1bcD6wYZ-qgYPaVUNOCsZ5IS9-xpDDt9X?usp=sharing";

  return (
    <section id="contact" className="py-20 px-4 bg-cyber-grid relative">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono-tech text-xs">
            <Mail className="w-4 h-4" /> DISPATCH TERMINAL
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Seeking Application Security & Full-Stack roles. Open for vulnerability assessments, security audits, or technical collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <Card className="p-5 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
              <a href="mailto:swaroopwayadande@gmail.com" className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/30 group-hover:border-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-muted-foreground">EMAIL DISPATCH</span>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    swaroopwayadande@gmail.com
                  </h3>
                  <p className="text-xs text-muted-foreground">Direct inbox for opportunities & security audits</p>
                </div>
              </a>
            </Card>

            {/* Phone Card */}
            <Card className="p-5 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow group">
              <a href="tel:+919850465915" className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl border border-secondary/30 group-hover:border-secondary transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-muted-foreground">DIRECT PHONE</span>
                  <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">
                    +91 9850465915
                  </h3>
                  <p className="text-xs text-muted-foreground">Available for calls & WhatsApp inquiries</p>
                </div>
              </a>
            </Card>

            {/* Location Card */}
            <Card className="p-5 bg-card/80 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/30">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-muted-foreground">LOCATION</span>
                  <h3 className="font-bold text-foreground">
                    Sangli / Kolhapur, Maharashtra, India
                  </h3>
                  <p className="text-xs text-muted-foreground">Open for On-site & Remote roles across India</p>
                </div>
              </div>
            </Card>

            {/* Resume Link Card */}
            <Card className="p-5 bg-card/80 backdrop-blur-md border-primary/30 hover:border-primary/60 transition-all hover:shadow-glow group">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl border border-primary/40 group-hover:border-primary transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono-tech text-primary font-bold">LATEST RESUME (PDF)</span>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                    Download Security Resume <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-xs text-muted-foreground">View certified STQC MeitY experience & projects</p>
                </div>
              </a>
            </Card>

            {/* Social Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                asChild
                className="flex-1 bg-card border border-primary/30 hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary font-mono-tech text-xs"
              >
                <a href="https://github.com/swaroopwayadande" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> GitHub
                </a>
              </Button>
              <Button
                asChild
                className="flex-1 bg-card border border-secondary/30 hover:border-secondary hover:bg-secondary/10 text-foreground hover:text-secondary font-mono-tech text-xs"
              >
                <a href="https://linkedin.com/in/swaroopwayadande" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </Button>
            </div>

          </div>

          {/* Right Column: Encrypted Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-card/90 backdrop-blur-md border-primary/30 shadow-card">
              
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono-tech text-sm font-bold text-foreground">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>SECURE_MESSAGE_DISPATCH</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-primary">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>END_TO_END DIRECT</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono-tech">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-foreground">DISPATCH INITIATED!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Opening your default mail client to deliver your message directly to <span className="text-primary">swaroopwayadande@gmail.com</span>.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="border-primary/30 text-primary font-mono-tech text-xs"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-muted-foreground font-semibold">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background/80 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-muted-foreground font-semibold">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-background/80 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-muted-foreground font-semibold">SUBJECT / ROLE *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Application Security Role / Security Audit Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-background/80 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-muted-foreground font-semibold">MESSAGE *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Swaroop, I am reaching out regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-background/80 border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow text-sm py-3 transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" /> Dispatch Message
                  </Button>

                </form>
              )}

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
