import { MapPinned } from "lucide-react";

const FloatingProjectCard = () => {
  return (
    <div className="absolute bottom-20 right-10 hidden w-80 rounded-xl border border-white/20 bg-black/60 p-6 backdrop-blur-md xl:block">
      <span className="text-xs uppercase tracking-[0.3em] text-yellow">
        Featured Project
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        Abuja River Bridge
      </h3>

      <div className="mt-5 flex items-center gap-3 text-white/70">
        <MapPinned size={18} />

        Abuja, Nigeria
      </div>

      <div className="mt-8 border-t border-white/10 pt-5">
        <div className="flex justify-between">
          <span>Project Type</span>

          <strong>Infrastructure</strong>
        </div>

        <div className="mt-3 flex justify-between">
          <span>Status</span>

          <strong className="text-yellow">
            Completed
          </strong>
        </div>
      </div>
    </div>
  );
};

export default FloatingProjectCard;