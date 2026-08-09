interface Props {
  value: string;
  label: string;
}

const EngineeringMetric = ({ value, label }: Props) => {
  return (
    <div className="border-l border-white/10 pl-5">
      <div className="font-mono text-2xl font-bold text-yellow">
        {value}
      </div>

      <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
        {label}
      </div>
    </div>
  );
};

export default EngineeringMetric;