// ContactForm.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  AlertCircle,
  Home,
  Building2,
  HardHat,
  Wrench,
  Mail,
  Phone,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData | "projectType" | "budget", string>>;

const PROJECT_TYPES = [
  { label: "Residential", icon: Home },
  { label: "Commercial", icon: Building2 },
  { label: "Civil Works", icon: HardHat },
  { label: "Renovation", icon: Wrench },
];

const BUDGETS = [
  { value: "under-10m", label: "Under ₦10M" },
  { value: "10-50m", label: "₦10M — ₦50M" },
  { value: "50-100m", label: "₦50M — ₦100M" },
  { value: "100m-plus", label: "₦100M+" },
];

const STEPS = [
  { id: 1, label: "Your Details" },
  { id: 2, label: "Project Details" },
  { id: 3, label: "Review & Submit" },
] as const;

type Step = 1 | 2 | 3;

const ContactForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [maxStepReached, setMaxStepReached] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [preferredContact, setPreferredContact] = useState<"email" | "phone">("email");
  const [errors, setErrors] = useState<Errors>({});
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber] = useState(() => `AX-${Date.now().toString().slice(-6)}`);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (target: 1 | 2): boolean => {
    const nextErrors: Errors = {};

    if (target === 1) {
      if (!formData.name.trim()) nextErrors.name = "Enter your full name";
      if (!formData.email.trim()) nextErrors.email = "Enter your email address";
      else if (!/^\S+@\S+\.\S+$/.test(formData.email))
        nextErrors.email = "Enter a valid email address";
      if (preferredContact === "phone" && !formData.phone.trim())
        nextErrors.phone = "Add a number so we can call you";
    }

    if (target === 2) {
      if (!projectType) nextErrors.projectType = "Select a project type";
      if (!formData.message.trim())
        nextErrors.message = "Tell us a little about the project";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goToStep = (target: Step) => {
    if (target <= maxStepReached) setStep(target);
  };

  const goNext = () => {
    if (step === 3) return;
    if (!validateStep(step)) return;
    const next = (step + 1) as Step;
    setStep(next);
    setMaxStepReached((prev) => (next > prev ? next : prev));
  };

  const goBack = () => {
    if (step > 1) setStep((step - 1) as Step);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2) || !confirmed) return;
    console.log("Form submitted", { ...formData, projectType, budget, preferredContact, refNumber });
    setSubmitted(true);
  };

  const progressIndex = step - 1; // 0, 1, 2
  const progressPercent = (progressIndex / (STEPS.length - 1)) * 100;

  /* ---------------------------------------------------------- */
  /* Success state — logged like a stamped drawing submission   */
  /* ---------------------------------------------------------- */
  if (submitted) {
    return (
      <div className="relative overflow-hidden border border-black/10 bg-yellow px-6 py-24 text-center md:px-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="inline-flex flex-col items-center border-[3px] border-black px-6 py-3"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-black">
              Enquiry Logged
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-black/40">
              REF: {refNumber}
            </span>
          </motion.div>

          <h2 className="mt-10 text-2xl font-black uppercase tracking-tight md:text-3xl">
            Thanks, {formData.name.split(" ")[0] || "there"}.
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-black/55">
            We've logged your project details and will reach you by{" "}
            {preferredContact === "phone" ? "phone" : "email"} at{" "}
            <span className="text-black">
              {preferredContact === "phone" ? formData.phone : formData.email}
            </span>{" "}
            within one business day.
          </p>
{/* 
          <div className="mt-12 grid w-full max-w-sm grid-cols-3 gap-2 border-t border-black/10 pt-8 text-left">
            {["Reviewed", "Contacted", "Site Visit"].map((label, i) => (
              <div key={label} className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-black/25">0{i + 1}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-black/60">
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className="border border-black/10 bg-yellow px-6 py-10 md:px-10 md:py-14 lg:px-14">
      {/* Sheet header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
          Project Enquiry
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
          Sheet 0{step} / 03
        </span>
      </div>

      {/* Survey-tape progress ruler */}
      <div className="relative mt-6">
        <svg viewBox="0 0 600 22" preserveAspectRatio="none" className="h-[22px] w-full overflow-visible">
          {Array.from({ length: 49 }).map((_, i) => {
            const x = i * (600 / 48);
            const isMajor = i % 24 === 0;
            return (
              <line
                key={i}
                x1={x} x2={x}
                y1={isMajor ? 2 : 8}
                y2={isMajor ? 18 : 14}
                stroke={isMajor ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.12)"}
                strokeWidth={isMajor ? 1.4 : 1}
              />
            );
          })}
          <motion.line
            x1={0} y1={20} x2={600} y2={20}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth={2}
          />
          <motion.line
            x1={0} y1={20} x2={600}
            y2={20}
            stroke="#F5C400"
            strokeWidth={2}
            initial={false}
            animate={{ pathLength: 1 }}
            style={{
              strokeDasharray: 600,
              strokeDashoffset: 600 - (progressPercent / 100) * 600,
              transition: "stroke-dashoffset 0.4s ease",
            }}
          />
        </svg>

        <div className="relative mt-1 flex justify-between">
          {STEPS.map((s, i) => {
            const isActive = s.id === step;
            const isComplete = s.id < step;
            const isReachable = s.id <= maxStepReached;

            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToStep(s.id)}
                disabled={!isReachable}
                className={`
                  group relative flex flex-col items-center gap-2 pt-2 font-mono text-[10px] font-bold
                  uppercase tracking-[0.1em] transition-colors duration-300
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow
                  ${isReachable ? "cursor-pointer" : "cursor-default"}
                  ${i === 0 ? "items-start text-left" : i === STEPS.length - 1 ? "items-end text-right" : "items-center text-center"}
                `}
              >
                <span className="relative flex h-6 w-6 items-center justify-center">
                  {isActive && (
                    <motion.span
                      layoutId="survey-pulse"
                      className="absolute inline-flex h-6 w-6 rounded-full bg-white/60"
                      animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  )}
                  <span
                    className={`
                      relative flex h-4 w-4 items-center justify-center rounded-full border text-[8px]
                      ${isActive ? "border-white bg-white" : ""}
                      ${!isActive && isComplete ? "border-black bg-black text-white" : ""}
                      ${!isActive && !isComplete ? "border-black/20 bg-black text-black/30" : ""}
                    `}
                  >
                    {isComplete && !isActive ? <Check size={9} /> : ""}
                  </span>
                </span>
                <span
                  className={`hidden sm:inline ${isActive ? "text-black" : isReachable ? "text-black/40 group-hover:text-black" : "text-black/20"}`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-10" noValidate>
        <AnimatePresence mode="wait">
          {/* STEP 1 — CONTACT DETAILS */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                  Tell us about you.
                </h2>
                <p className="mt-2 text-sm text-black/50">
                  So we know who we're speaking with, and how to reach you.
                </p>
              </div>

              <Field
                id="name"
                label="Full Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(v) => handleChange("name", v)}
                error={errors.name}
                
              />

              <Field
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(v) => handleChange("email", v)}
                error={errors.email}
              />

              <Field
                id="phone"
                label={preferredContact === "phone" ? "Phone Number" : "Phone Number (optional)"}
                type="tel"
                placeholder="+234 ..."
                value={formData.phone}
                onChange={(v) => handleChange("phone", v)}
                error={errors.phone}
              />

              <div>
                <span className="mb-3 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Best Way To Reach You
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { key: "email" as const, label: "Email", icon: Mail },
                      { key: "phone" as const, label: "Phone Call", icon: Phone },
                    ]
                  ).map(({ key, label, icon: Icon }) => {
                    const active = preferredContact === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setPreferredContact(key)}
                        className={`
                          flex items-center gap-3 border px-4 py-4 text-left font-mono text-[9px] font-bold
                          uppercase tracking-[0.12em] transition-colors duration-300
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow
                          ${active ? "border-yellow bg-[#111111] text-white" : "border-black/10 bg-white hover:border-black/30"}
                        `}
                      >
                        <Icon size={14} className={active ? "text-yellow" : "text-black/40"} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2 — PROJECT DETAILS */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                  Tell us about the project.
                </h2>
                <p className="mt-2 text-sm text-black/50">
                  Rough details are fine — we'll refine scope together.
                </p>
              </div>

              <div>
                <span className="mb-4 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Project Type
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {PROJECT_TYPES.map(({ label: type, icon: Icon }) => {
                    const active = projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          setProjectType(type);
                          if (errors.projectType)
                            setErrors((p) => ({ ...p, projectType: undefined }));
                        }}
                        className={`
                          flex items-center gap-3 border px-4 py-4 text-left font-mono text-[9px] font-bold
                          uppercase tracking-[0.12em] transition-colors duration-300
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow
                          ${active ? "border-yellow bg-[#111111] text-white" : "border-black/10 bg-white hover:border-black/30"}
                        `}
                      >
                        <Icon size={15} className={active ? "text-yellow" : "text-black/40"} />
                        {type}
                      </button>
                    );
                  })}
                </div>
                {errors.projectType && <FieldError message={errors.projectType} />}
              </div>

              <div>
                <span className="mb-4 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Estimated Budget (optional)
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {BUDGETS.map((b) => {
                    const active = budget === b.value;
                    return (
                      <button
                        type="button"
                        key={b.value}
                        onClick={() => setBudget(active ? "" : b.value)}
                        className={`
                          border px-4 py-4 text-left font-mono text-[9px] font-bold
                          uppercase tracking-[0.12em] transition-colors duration-300
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow
                          ${active ? "border-yellow bg-[#111111] text-white" : "border-black/10 bg-white hover:border-black/30"}
                        `}
                      >
                        {b.label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-[11px] text-black/35">
                  Helps us assign the right team. An estimate is fine.
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label
                    htmlFor="message"
                    className="block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40"
                  >
                    Project Details
                  </label>
                  <span className="font-mono text-[9px] text-black/25">
                    {formData.message.length}/600
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={600}
                  placeholder="Site, scope, location and requirements..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  className={`
                    w-full resize-none border-b bg-white pl-5 py-4 text-sm leading-7 outline-none
                    placeholder:text-black/25 transition-colors
                    ${errors.message ? "border-red-400" : "border-black/15 focus:border-yellow"}
                  `}
                />
                {errors.message && <FieldError message={errors.message} />}
              </div>
            </motion.div>
          )}

          {/* STEP 3 — REVIEW */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight md:text-3xl">
                  Review your enquiry.
                </h2>
                <p className="mt-2 text-sm text-black/50">
                  Check everything looks right before you send it.
                </p>
              </div>

              {/* Document title block */}
              <div className="grid grid-cols-2 gap-px border border-black/10 bg-black/10 sm:grid-cols-4">
                {[
                  { label: "Dwg No.", value: refNumber },
                  { label: "Type", value: projectType || "—" },
                  { label: "Contact", value: preferredContact === "phone" ? "Phone" : "Email" },
                  { label: "Status", value: "Draft" },
                ].map((cell) => (
                  <div key={cell.label} className="bg-white px-4 py-3">
                    <span className="block font-mono text-[8px] uppercase tracking-[0.15em] text-black/35">
                      {cell.label}
                    </span>
                    <span className="mt-1 block truncate text-xs font-bold uppercase text-black/80">
                      {cell.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-black/10">
                <ReviewRow label="Name" value={formData.name} onEdit={() => goToStep(1)} />
                <ReviewRow label="Email" value={formData.email} onEdit={() => goToStep(1)} />
                <ReviewRow
                  label="Phone"
                  value={formData.phone || "—"}
                  onEdit={() => goToStep(1)}
                />
                <ReviewRow
                  label="Project Type"
                  value={projectType || "—"}
                  onEdit={() => goToStep(2)}
                />
                <ReviewRow
                  label="Budget"
                  value={BUDGETS.find((b) => b.value === budget)?.label ?? "—"}
                  onEdit={() => goToStep(2)}
                />
                <ReviewRow
                  label="Details"
                  value={formData.message}
                  onEdit={() => goToStep(2)}
                  multiline
                />
              </div>

              {/* Trust note, right where it matters */}
              <div className="border  border-black/10 bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/60">
                    What happens next
                  </span>
                  <span className="h-2 w-2 bg-yellow" />
                </div>
                <p className="mt-3 text-xs leading-6 text-black/50">
                  Our team reviews every enquiry and responds within one
                  business day to schedule a call or site visit.
                </p>
              </div>

              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-yellow"
                />
                <span className="text-xs leading-5 text-black/55">
                  I confirm the details above are correct and can be shared
                  with the Axis &amp; Grids project team.
                </span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/50 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              <ArrowLeft size={14} />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="group inline-flex items-center gap-4 bg-[#111111] px-7 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow cursor-pointer"
            >
              Continue
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!confirmed}
              className="group inline-flex items-center gap-4 bg-[#111111] px-7 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:enabled:bg-white hover:enabled:text-[#111111] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
            >
              Send Project Enquiry
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

/* --- Small building blocks --- */

const FieldError = ({ message }: { message: string }) => (
  <p className="mt-2 flex items-center gap-1.5 text-[11px] text-red-600">
    <AlertCircle size={12} />
    {message}
  </p>
);

const Field = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-invalid={!!error}
      className={`
        w-full border-b bg-white pl-5 py-4 text-base outline-none
        placeholder:text-black/25 transition-colors
        ${error ? "border-red-400" : "border-black/15 focus:border-yellow"}
      `}
    />
    {error && <FieldError message={error} />}
  </div>
);

const ReviewRow = ({
  label,
  value,
  onEdit,
  multiline,
}: {
  label: string;
  value: string;
  onEdit: () => void;
  multiline?: boolean;
}) => (
  <div className="flex items-start bg-white pl-5 pr-5 justify-between gap-6 border-b border-black/10 py-5">
    <div className="min-w-0">
      <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
        {label}
      </span>
      <p
        className={`mt-2 text-sm text-black/80 ${multiline ? "leading-6" : "truncate"}`}
      >
        {value}
      </p>
    </div>
    <button
      type="button"
      onClick={onEdit}
      className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black/40 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow cursor-pointer"
    >
      Edit
    </button>
  </div>
);

export default ContactForm;