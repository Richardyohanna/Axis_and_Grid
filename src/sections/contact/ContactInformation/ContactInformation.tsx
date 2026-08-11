// ContactInformation.tsx
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const ContactInformation = () => {
  return (
    <aside className="bg-white px-6 py-10 lg:sticky lg:top-32 lg:self-start lg:px-10 lg:py-14">
      <div>
        <h2 className="text-2xl font-black uppercase">
          Start a conversation.
        </h2>
        <p className="mt-3 text-sm leading-6 text-black/50">
          Prefer to talk directly? Reach us here while you fill out the form.
        </p>
      </div>

      {/* Primary actions */}
      <div className="mt-10 space-y-2">
        <ActionRow
          icon={<Phone size={16} />}
          label="Call"
          value="+234 (0) 706 627 3818"
          href="tel:+2347066273818"
          tag="Fastest"
        />
        <ActionRow
          icon={<Mail size={16} />}
          label="Email"
          value="info@axisandgrids.ng"
          href="mailto:info@axisandgrids.ng"
        />
        <ActionRow
          icon={<MapPin size={16} />}
          label="Location"
          value="Abuja, FCT — Nigeria"
        />
      </div>

      {/* Response time — the one number that matters most here */}
      <div className="mt-10 border border-black/10 p-6">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
          Typical Response Time
        </span>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-4xl font-black tracking-tight">24</span>
          <span className="text-sm font-bold uppercase text-black/50">hrs</span>
        </div>
        <p className="mt-3 text-xs leading-6 text-black/50">
          Every enquiry is reviewed by our team before the next stage of
          consultation.
        </p>
      </div>

      {/* Office hours */}
      <div className="mt-10 border-t border-black/10 pt-8">
        <span className="font-['Barlow_Condensed'] text-[18px] font-extrabold uppercase tracking-[0.2em] text-black">
          Office Hours
        </span>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monday — Friday</span>
            <span className="font-mono text-xs">08:00 — 17:00</span>
          </div>
          <div className="flex justify-between text-black/40">
            <span>Saturday</span>
            <span className="font-mono text-xs">By appointment</span>
          </div>
        </div>
      </div>

      {/* Site coordinates — quiet nod to the brand's blueprint language */}
      <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
          Site HQ
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/25">
          09.0765°N · 07.3986°E
        </span>
      </div>
    </aside>
  );
};

const ActionRow = ({
  icon,
  label,
  value,
  href,
  tag,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  tag?: string;
}) => {
  const content = (
    <div
      className={`
        group flex items-center gap-4 border border-transparent px-2 py-3 transition-colors duration-300
        ${href ? "hover:border-black/10" : ""}
      `}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-yellow group-hover:bg-[#111111] group-hover:text-yellow">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
            {label}
          </span>
          {tag && (
            <span className="bg-yellow px-1.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.1em] text-[#111111]">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-0.5 truncate text-sm">{value}</p>
      </div>

      {href && (
        <ArrowUpRight
          size={15}
          className="shrink-0 text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
        />
      )}
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow"
    >
      {content}
    </a>
  );
};

export default ContactInformation;