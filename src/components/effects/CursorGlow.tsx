import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        z-0
        h-96
        w-96
        rounded-full
        blur-3xl
        opacity-10
      "
      style={{
        background: "#F5C400",
        left: position.x - 192,
        top: position.y - 192,
      }}
    />
  );
};

export default CursorGlow;