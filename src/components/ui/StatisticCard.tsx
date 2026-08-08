interface Props {
  number: string;
  label: string;
}

const StatisticCard = ({ number, label }: Props) => {
  return (
    <div className="border border-white/20 bg-white/5 backdrop-blur-md p-4 min-w-[170px]">
      <h2 className="text-2xl font-black text-yellow">
        {number}
      </h2>

      <p className="mt-2 uppercase tracking-wider text-sm text-white/70">
        {label}
      </p>
    </div>
  );
};

export default StatisticCard;