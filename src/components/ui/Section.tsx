import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`py-20 lg:py-22 ${className}`}>
      {children}
    </section>
  );
};

export default Section;