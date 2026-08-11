import React, { useState, useCallback } from "react";
import { Mail, Copy, Check, Send, MapPin, Loader2 } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "./SocialIcons";

// ─────────────────────────────────────────────────────────────────────────────
// Web3Forms  →  https://web3forms.com
// 1. Visit the link above, enter your email, click "Create Access Key".
// 2. Paste the key below — that's it, no account, no backend, completely free.
// ─────────────────────────────────────────────────────────────────────────────
const WEB3FORMS_KEY = "8b0b9bfb-5eab-4112-b59e-62d0bb1d8a0e";

type Status = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

// ─── Small reusable field wrapper ────────────────────────────────────────────
const Field: React.FC<{
  label: string;
  required?: boolean;
  children: React.ReactNode;
}> = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-semibold uppercase tracking-wide text-muted">
      {label}
      {required && " *"}
    </label>
    {children}
  </div>
);

// ─── Info card ───────────────────────────────────────────────────────────────
const InfoCard: React.FC<{
  icon: React.ReactNode;
  accent: "blue" | "green";
  label: string;
  value: string;
  action?: React.ReactNode;
}> = ({ icon, accent, label, value, action }) => (
  <div className="clean-card p-4 flex items-center justify-between gap-3">
    <div className="flex items-center gap-3 min-w-0">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
          accent === "blue"
            ? "bg-accent-blue/10 text-accent-blue"
            : "bg-accent-green/10 text-accent-green"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase font-semibold text-muted mb-0.5">
          {label}
        </p>
        <p className="text-xs font-semibold text-main font-code truncate">
          {value}
        </p>
      </div>
    </div>
    {action}
  </div>
);

// ─── Main component ──────────────────────────────────────────────────────────
export const ContactSection: React.FC = () => {
  const { contactInfo, socialLinks } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const githubLink = socialLinks.find((s) => s.platform === "github")?.url;
  const twitterLink = socialLinks.find((s) => s.platform === "twitter")?.url;
  const linkedinLink = socialLinks.find((s) => s.platform === "linkedin")?.url;

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, [contactInfo.email]);

  const set =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio contact from ${form.name}`,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm(EMPTY_FORM);
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message ?? "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setErrMsg("Could not send message. Please email me directly.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const isBusy = status === "sending" || status === "success";

  return (
    <section id="contact" className="py-16 border-b border-border-color">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="section-label">
          <Mail className="w-3.5 h-3.5" />
          <span>Contact</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">
          Let's Work Together
        </h2>
        <p className="text-sm text-muted mb-8 max-w-xl">
          Open to senior full-stack &amp; AI engineering roles. Drop me a
          message and I'll get back within 24 hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left — info cards */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <InfoCard
              icon={<Mail className="w-4 h-4" />}
              accent="blue"
              label="Email Address"
              value={contactInfo.email}
              action={
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg border border-border-color hover:border-border-hover text-muted hover:text-main transition-all shrink-0 vercel-btn"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-accent-green" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              }
            />

            <InfoCard
              icon={<MapPin className="w-4 h-4" />}
              accent="green"
              label="Location"
              value={contactInfo.location}
            />

            {/* Social links */}
            <div className="clean-card p-4">
              <p className="text-[10px] uppercase font-semibold text-muted mb-3">
                Social Profiles
              </p>
              <div className="flex gap-2">
                {[
                  { href: githubLink, Icon: GithubIcon, label: "GitHub" },
                  { href: twitterLink, Icon: TwitterIcon, label: "X" },
                  { href: linkedinLink, Icon: LinkedinIcon, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg
                               border border-border-color text-xs font-semibold text-muted
                               hover:text-main hover:border-border-hover transition-all vercel-btn"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="clean-card p-6 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Smith"
                    className="form-field"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jane@company.com"
                    className="form-field"
                  />
                </Field>
              </div>

              <Field label="Subject">
                <input
                  type="text"
                  value={form.subject}
                  onChange={set("subject")}
                  placeholder="Project opportunity / Collaboration"
                  className="form-field"
                />
              </Field>

              <Field label="Message" required>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Hi Vivek, I'd love to discuss a project…"
                  className="form-field"
                />
              </Field>

              {/* Feedback banners */}
              {status === "success" && (
                <div
                  className="flex items-center gap-2 text-xs font-semibold text-accent-green
                                bg-accent-green/10 border border-accent-green/25 rounded-lg px-3 py-2.5"
                >
                  <Check className="w-4 h-4 shrink-0" />
                  Message sent! I'll reply within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div
                  className="text-xs font-semibold text-red-400 bg-red-500/10
                                border border-red-500/25 rounded-lg px-3 py-2.5"
                >
                  {errMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={isBusy}
                className="mt-1 flex items-center justify-center gap-2 w-full py-2.5 px-4
                           rounded-lg bg-accent-blue text-white text-sm font-semibold
                           hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed
                           transition-all vercel-btn"
              >
                {status === "sending" && (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending…</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Sent!</span>
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
