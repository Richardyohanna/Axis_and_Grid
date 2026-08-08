import { cn } from "../../lib/utils";
import { useRef } from "react";
import useBlueprint from "../../hooks/useBlueprint";

interface GridOverlayProps {
  className?: string;
}

const GridOverlay = ({ className }: GridOverlayProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useBlueprint(ref, "x");

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none opacity-25",
        className
      )}
    >
      <div className="grid-pattern h-full w-full" />
    </div>
  );
};

export default GridOverlay;