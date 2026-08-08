interface Props {
  children: React.ReactNode;
}

const EngineeringBackground = ({ children }: Props) => {
  return (
    <div className="relative overflow-hidden">
      {/* Blueprint Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Axis Reference */}
      <div className="absolute left-5 top-0 h-full w-px bg-yellow/20" />
      <div className="absolute top-10 left-0 h-px w-full bg-yellow/20" />

      {children}
    </div>
  );
};

export default EngineeringBackground;