import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * WireframeBuilding — Civil Engineering Edition
 * ----------------------------------------------
 * A self-drawing isometric structural wireframe of a 3-story building:
 * frame + mid-span columns, floor slabs with edge overhang, punched
 * windows, ground-floor entrance/canopy, foundation plinth, a dashed
 * site boundary, blueprint dimension lines, a roof survey marker, a
 * level index, and a drawing title block — all in white line work with
 * a yellow (engineering-caution) accent glow, on a dark blueprint field.
 *
 * No animation library required (pure SVG + CSS transitions), so it
 * drops into any React project without extra dependencies.
 *
 * Usage:
 *   <WireframeBuilding floors={3} activeFloor={3} />
 */

type Vec3 = [number, number, number];
type Vec2 = [number, number];
type Edge = [Vec3, Vec3];

const ISO_COS = Math.cos(Math.PI / 6);
const ISO_SIN = 0.5;
const ORIGIN_X = 330;
const ORIGIN_Y = 640;

const project = ([x, y, z]: Vec3): Vec2 => [
  ORIGIN_X + (x - y) * ISO_COS,
  ORIGIN_Y - z - (x + y) * ISO_SIN,
];

const dist2D = (a: Vec2, b: Vec2): number => Math.hypot(a[0] - b[0], a[1] - b[1]);

const boxEdges = (x0: number, y0: number, z0: number, w: number, d: number, h: number): Edge[] => {
  const c: Record<number, Vec3> = {
    0: [x0, y0, z0], 1: [x0 + w, y0, z0], 2: [x0 + w, y0 + d, z0], 3: [x0, y0 + d, z0],
    4: [x0, y0, z0 + h], 5: [x0 + w, y0, z0 + h], 6: [x0 + w, y0 + d, z0 + h], 7: [x0, y0 + d, z0 + h],
  };
  return [
    [c[0], c[1]], [c[1], c[2]], [c[2], c[3]], [c[3], c[0]],
    [c[4], c[5]], [c[5], c[6]], [c[6], c[7]], [c[7], c[4]],
    [c[0], c[4]], [c[1], c[5]], [c[2], c[6]], [c[3], c[7]],
  ];
};

const rectFront = (x: number, y: number, z: number, w: number, h: number): Edge[] => {
  const p = (dx: number, dz: number): Vec3 => [x + dx, y, z + dz];
  return [[p(0, 0), p(w, 0)], [p(w, 0), p(w, h)], [p(w, h), p(0, h)], [p(0, h), p(0, 0)]];
};
const rectSide = (x: number, y: number, z: number, d: number, h: number): Edge[] => {
  const p = (dy: number, dz: number): Vec3 => [x, y + dy, z + dz];
  return [[p(0, 0), p(d, 0)], [p(d, 0), p(d, h)], [p(d, h), p(0, h)], [p(0, h), p(0, 0)]];
};

// Punched-window grid on the front (y = y0) and side (x = x0+w) faces.
const windowsOnFloor = (x0: number, y0: number, z0: number, w: number, d: number, h: number): Edge[] => {
  const edges: Edge[] = [];
  const marginZ = h * 0.28, winH = h * 0.4;

  const fCols = 5, fMargin = 10;
  const fWinW = (w - fMargin * (fCols + 1)) / fCols;
  for (let i = 0; i < fCols; i++) {
    const x = x0 + fMargin + i * (fWinW + fMargin);
    edges.push(...rectFront(x, y0, z0 + marginZ, fWinW, winH));
  }

  const sCols = 3, sMargin = 12;
  const sWinD = (d - sMargin * (sCols + 1)) / sCols;
  for (let i = 0; i < sCols; i++) {
    const y = y0 + sMargin + i * (sWinD + sMargin);
    edges.push(...rectSide(x0 + w, y, z0 + marginZ, sWinD, winH));
  }
  return edges;
};

// Mid-span vertical columns (structural grid) on front + side faces.
const midColumns = (x0: number, y0: number, z0: number, w: number, d: number, h: number): Edge[] => [
  [[x0 + w / 3, y0, z0], [x0 + w / 3, y0, z0 + h]],
  [[x0 + (2 * w) / 3, y0, z0], [x0 + (2 * w) / 3, y0, z0 + h]],
  [[x0 + w, y0 + d / 2, z0], [x0 + w, y0 + d / 2, z0 + h]],
];

// Slab edge overhang ring at the top of a floor.
const slabRing = (x0: number, y0: number, z: number, w: number, d: number, o = 7): Edge[] => [
  [[x0 - o, y0 - o, z], [x0 + w + o, y0 - o, z]],
  [[x0 + w + o, y0 - o, z], [x0 + w + o, y0 + d + o, z]],
  [[x0 + w + o, y0 + d + o, z], [x0 - o, y0 + d + o, z]],
  [[x0 - o, y0 + d + o, z], [x0 - o, y0 - o, z]],
];

interface WireframeBuildingProps {
  floors?: number;
  activeFloor?: number;
  line?: string;
  accent?: string;
  onFloorSelect?: (floor: number) => void;
  className?: string;
}

const WireframeBuilding: React.FC<WireframeBuildingProps> = ({
  floors = 3,
  activeFloor,
  line = "#F3F6FA",
  accent = "#FFCF33",
  onFloorSelect,
  className = "",
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState<boolean>(false);
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const active = activeFloor ?? floors;

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -6, y: px * 8 });
  };
  const handleLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredFloor(null);
  };

  const VIEW_W = 820, VIEW_H = 780;
  const FLOOR_H = 96;
  const X0 = 0, Y0 = 0, W = 172, D = 122;

  const geo = useMemo(() => {
    const floorGroups = Array.from({ length: floors }, (_, i) => {
      const z0 = i * FLOOR_H;
      const h = FLOOR_H - 10;
      return {
        id: `L${i + 1}`,
        index: i + 1,
        frame: boxEdges(X0, Y0, z0, W, D, h),
        columns: midColumns(X0, Y0, z0, W, D, h),
        windows: windowsOnFloor(X0, Y0, z0, W, D, h),
        slab: slabRing(X0, Y0, z0 + h, W, D),
        delay: i * 0.22,
      };
    });

    const roofZ = floors * FLOOR_H - 10;
    const roofUnit = boxEdges(X0 + W - 46, Y0 + 20, roofZ, 30, 24, 18);
    const parapet = slabRing(X0, Y0, roofZ, W, D, 4);
    const antenna: Edge[] = [[[X0 + 18, Y0 + 18, roofZ], [X0 + 18, Y0 + 18, roofZ + 46]]];

    const doorZ0 = 0, doorH = FLOOR_H * 0.5, doorW = 40;
    const doorX = X0 + W / 2 - doorW / 2;
    const door = rectFront(doorX, Y0, doorZ0, doorW, doorH);
    const canopy = boxEdges(doorX - 10, Y0 - 26, doorH + 4, doorW + 20, 26, 4);

    const foundation = boxEdges(X0 - 16, Y0 - 16, -20, W + 32, D + 32, 20);

    const siteBoundary: Edge[] = [
      [[X0 - 90, Y0 - 90, -2], [X0 + W + 90, Y0 - 90, -2]],
      [[X0 + W + 90, Y0 - 90, -2], [X0 + W + 90, Y0 + D + 90, -2]],
      [[X0 + W + 90, Y0 + D + 90, -2], [X0 - 90, Y0 + D + 90, -2]],
      [[X0 - 90, Y0 + D + 90, -2], [X0 - 90, Y0 - 90, -2]],
    ];

    const dimZ = -58;
    const widthDim: Edge[] = [
      [[X0, Y0, 0], [X0, Y0, dimZ]],
      [[X0 + W, Y0, 0], [X0 + W, Y0, dimZ]],
      [[X0, Y0, dimZ], [X0 + W, Y0, dimZ]],
    ];
    const heightDim: Edge[] = [
      [[X0 + W, Y0 + D, 0], [X0 + W + 60, Y0 + D + 40, 0]],
      [[X0 + W, Y0 + D, roofZ + 10], [X0 + W + 60, Y0 + D + 40, roofZ + 10]],
      [[X0 + W + 60, Y0 + D + 40, 0], [X0 + W + 60, Y0 + D + 40, roofZ + 10]],
    ];

    const buildEnd = floorGroups[floorGroups.length - 1].delay + 0.35;

    return { floorGroups, roofUnit, parapet, antenna, door, canopy, foundation, siteBoundary, widthDim, heightDim, roofZ, buildEnd };
  }, [floors]);

  const apex = project([X0 + 18, Y0 + 18, geo.roofZ + 46]);
  const widthLabelPt = project([X0 + W / 2, Y0, -58]);
  const heightLabelPt = project([X0 + W + 60, Y0 + D + 40, geo.roofZ / 2]);

  interface RenderEdgesOpts {
    stroke: string;
    opacity: number;
    delayStart?: number;
    width?: number;
    animate?: boolean;
    dashed?: boolean;
  }

  const renderEdges = (edges: Edge[], { stroke, opacity, delayStart = 0, width = 1, animate = true, dashed = false }: RenderEdgesOpts) =>
    edges.map((e, i) => {
      const p1 = project(e[0]);
      const p2 = project(e[1]);
      const len = dist2D(p1, p2) || 0.001;
      const delay = delayStart + i * 0.018;
      return (
        <line
          key={i}
          x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]}
          stroke={stroke}
          strokeWidth={width}
          strokeOpacity={animate && !drawn ? 0 : opacity}
          strokeDasharray={dashed ? "5 5" : len}
          strokeDashoffset={animate ? (drawn ? 0 : len) : 0}
          style={
            animate
              ? { transition: `stroke-dashoffset 0.55s ease ${delay}s, stroke-opacity 0.35s ease ${delay}s` }
              : { transition: `stroke-opacity 0.6s ease ${delayStart}s` }
          }
        />
      );
    });

  return (
    <div
      ref={wrapRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full min-h-[560px] overflow-hidden transparent font-mono ${className}`}
    >
      {/* blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(to right, rgba(243,246,250,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(243,246,250,0.045) 1px, transparent 1px)",
        //   backgroundSize: "32px 32px",
        //   maskImage: "radial-gradient(ellipse 78% 72% at 48% 46%, black 35%, transparent 92%)",
        //   WebkitMaskImage: "radial-gradient(ellipse 78% 72% at 48% 46%, black 35%, transparent 92%)",
        // }}
      />

      {/* yellow ambient glow behind roof */}
      {/* <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340, height: 340,
          left: `${(apex[0] / VIEW_W) * 100}%`,
          top: `${(apex[1] / VIEW_H) * 100}%`,
          transform: "translate(-50%, -30%)",
          background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
          filter: "blur(28px)",
        }}
      /> */}

      {/* header */}
      <div className="absolute top-4 left-4 pointer-events-none select-none">
        <div className="text-[11px] tracking-[0.25em] uppercase" style={{ color: line, opacity: 0.85 }}>
          Civil / Structural Wireframe
        </div>
        <div className="text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: accent, opacity: 0.9 }}>
          3-Story Model — Live Draft
        </div>
      </div>

      {/* compass */}
      <div className="absolute top-4 right-4 flex flex-col items-center pointer-events-none select-none">
        <svg width="34" height="34" viewBox="0 0 34 34">
          <circle cx="17" cy="17" r="14" fill="none" stroke={line} strokeOpacity="0.35" strokeWidth="1" />
          <line x1="17" y1="4" x2="17" y2="30" stroke={line} strokeOpacity="0.25" strokeWidth="1" />
          <line x1="4" y1="17" x2="30" y2="17" stroke={line} strokeOpacity="0.25" strokeWidth="1" />
          <path d="M17 6 L21 17 L17 15 L13 17 Z" fill={accent} />
        </svg>
        <span className="text-[9px] tracking-widest mt-1" style={{ color: line, opacity: 0.6 }}>N</span>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="relative w-full h-full"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.3s ease-out",
          transformStyle: "preserve-3d",
        }}
        fill="none"
      >
        <defs>
          <filter id="wf-glow-yellow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* site boundary (dashed, fades in after build) */}
        {renderEdges(geo.siteBoundary, { stroke: line, opacity: 0.2, delayStart: geo.buildEnd, width: 1, dashed: true, animate: false })}

        {/* foundation */}
        {renderEdges(geo.foundation, { stroke: line, opacity: 0.4, delayStart: 0, width: 1 })}

        {/* floors */}
        {/* {geo.floorGroups.map((f) => {
          const isActive = active === f.index;
          const isHovered = hoveredFloor === f.index;
          const glow = isActive || isHovered;
          const stroke = glow ? accent : line;
          return (
            <g
              key={f.id}
              onPointerEnter={() => setHoveredFloor(f.index)}
              onClick={() => onFloorSelect?.(f.index)}
              style={{ cursor: onFloorSelect ? "pointer" : "default" }}
              filter={glow ? "url(#wf-glow-yellow)" : undefined}
            >
              {renderEdges(f.frame, { stroke, opacity: glow ? 0.95 : 0.6, delayStart: f.delay, width: glow ? 1.6 : 1.1 })}
              {renderEdges(f.columns, { stroke, opacity: glow ? 0.6 : 0.3, delayStart: f.delay + 0.05, width: 0.8 })}
              {renderEdges(f.windows, { stroke, opacity: glow ? 0.7 : 0.4, delayStart: f.delay + 0.08, width: 0.7 })}
              {renderEdges(f.slab, { stroke, opacity: glow ? 0.8 : 0.45, delayStart: f.delay + 0.1, width: 1 })}
            </g>
          );
        })} */}

        {geo.floorGroups.map((f) => {
        const isActive = active === f.index;
        const isHovered = hoveredFloor === f.index;
        const glow = isActive || isHovered;
        const stroke = glow ? accent : line;

        return (
            <g
            key={f.id}
            onPointerEnter={() => {
                setHoveredFloor(f.index);
            }}
            onPointerLeave={() => {
                setHoveredFloor(null);
            }}
            onClick={() => {
                console.log("CLICKED FLOOR:", f.index);
                onFloorSelect?.(f.index);
            }}
            style={{
                cursor: onFloorSelect ? "pointer" : "default",
            }}
            filter={glow ? "url(#wf-glow-yellow)" : undefined}
            >
            {/* Invisible clickable floor area */}
            <rect
                x={project([X0, Y0, f.index * FLOOR_H])[0] - 80}
                y={project([X0, Y0, f.index * FLOOR_H])[1] - 50}
                width="300"
                height="100"
                fill="transparent"
                pointerEvents="all"
            />

            {/* Actual wireframe */}
            {renderEdges(f.frame, {
                stroke,
                opacity: glow ? 0.95 : 0.6,
                delayStart: f.delay,
                width: glow ? 1.6 : 1.1,
            })}

            {renderEdges(f.columns, {
                stroke,
                opacity: glow ? 0.6 : 0.3,
                delayStart: f.delay + 0.05,
                width: 0.8,
            })}

            {renderEdges(f.windows, {
                stroke,
                opacity: glow ? 0.7 : 0.4,
                delayStart: f.delay + 0.08,
                width: 0.7,
            })}

            {renderEdges(f.slab, {
                stroke,
                opacity: glow ? 0.8 : 0.45,
                delayStart: f.delay + 0.1,
                width: 1,
            })}
            </g>
        );
        })}

        {/* ground-floor entrance + canopy */}
        {renderEdges(geo.door, { stroke: line, opacity: 0.55, delayStart: geo.buildEnd - 0.1, width: 1 })}
        {renderEdges(geo.canopy, { stroke: accent, opacity: 0.6, delayStart: geo.buildEnd - 0.05, width: 1 })}

        {/* roof parapet + plant unit */}
        {renderEdges(geo.parapet, { stroke: line, opacity: 0.6, delayStart: geo.buildEnd, width: 1 })}
        {renderEdges(geo.roofUnit, { stroke: line, opacity: 0.45, delayStart: geo.buildEnd + 0.05, width: 0.9 })}
        {renderEdges(geo.antenna, { stroke: accent, opacity: 0.7, delayStart: geo.buildEnd + 0.1, width: 1 })}

        {/* dimension lines */}
        {renderEdges(geo.widthDim, { stroke: line, opacity: 0.35, delayStart: geo.buildEnd + 0.2, width: 0.8 })}
        {renderEdges(geo.heightDim, { stroke: line, opacity: 0.35, delayStart: geo.buildEnd + 0.25, width: 0.8 })}

        <text
          x={widthLabelPt[0]} y={widthLabelPt[1] + 14}
          textAnchor="middle"
          fontSize="10"
          fill={line}
          opacity={drawn ? 0.55 : 0}
          style={{ transition: `opacity 0.5s ease ${geo.buildEnd + 0.35}s`, fontFamily: "monospace", letterSpacing: "0.05em" }}
        >
          W (N.T.S.)
        </text>
        <text
          x={heightLabelPt[0] + 8} y={heightLabelPt[1]}
          textAnchor="start"
          fontSize="10"
          fill={line}
          opacity={drawn ? 0.55 : 0}
          style={{ transition: `opacity 0.5s ease ${geo.buildEnd + 0.4}s`, fontFamily: "monospace", letterSpacing: "0.05em" }}
        >
          H (N.T.S.)
        </text>

        {/* survey marker at roof apex */}
        <g opacity={drawn ? 1 : 0} style={{ transition: `opacity 0.5s ease ${geo.buildEnd + 0.5}s` }}>
          <circle cx={apex[0]} cy={apex[1]} r="9" fill="none" stroke={accent} strokeOpacity="0.5">
            <animate attributeName="r" values="6;13;6" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx={apex[0]} cy={apex[1]} r="3" fill={accent} />
        </g>
      </svg>

      {/* survey marker label */}
      <div
        className="absolute flex items-center gap-2 pointer-events-none select-none"
        style={{
          left: `${(apex[0] / VIEW_W) * 100}%`,
          top: `${(apex[1] / VIEW_H) * 100}%`,
          transform: "translate(18px, -50%)",
          opacity: drawn ? 1 : 0,
          transition: `opacity 0.6s ease ${geo.buildEnd + 0.6}s`,
        }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: accent }}>
          Survey Point · Roof
        </span>
      </div>

      {/* level index */}
      {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 select-none">
        {[...geo.floorGroups].reverse().map((f) => {
          const isActive = active === f.index;
          const isHovered = hoveredFloor === f.index;
          const glow = isActive || isHovered;
          return (
            <button
              key={f.id}
              onPointerEnter={() => setHoveredFloor(f.index)}
              onPointerLeave={() => setHoveredFloor(null)}
              onClick={() => onFloorSelect?.(f.index)}
              className="text-[10px] tracking-[0.15em] uppercase text-right px-2 py-1 rounded-sm transition-colors"
              style={{
                color: glow ? accent : line,
                opacity: glow ? 1 : 0.45,
                background: glow ? `${accent}14` : "transparent",
                border: `1px solid ${glow ? accent + "55" : "transparent"}`,
              }}
            >
              {f.index === floors ? `ROOF · L${f.index}` : `LEVEL ${f.index}`}
            </button>
          );
        })}
      </div> */}

      {/* hover / selection readout */}
      {/* <div className="absolute bottom-4 left-4 select-none">
        {hoveredFloor ? (
          <div className="text-[10px] tracking-widest uppercase" style={{ color: accent }}>
            Level {hoveredFloor} Selected · Typical Floor Plate
          </div>
        ) : (
          <div className="text-[10px] tracking-widest uppercase" style={{ color: line, opacity: 0.4 }}>
            Hover a level to inspect
          </div>
        )}
      </div> */}

      {/* title block */}
      {/* <div
        className="absolute bottom-4 right-4 select-none text-[9px] leading-relaxed uppercase tracking-wide"
        style={{ color: line, opacity: 0.7 }}
      >
        <div className="border px-3 py-2" style={{ borderColor: `${line}30` }}>
          <div className="flex justify-between gap-6"><span style={{ opacity: 0.5 }}>Project</span><span>Wireframe Structure Study</span></div>
          <div className="flex justify-between gap-6"><span style={{ opacity: 0.5 }}>Dwg No.</span><span style={{ color: accent }}>WF—003</span></div>
          <div className="flex justify-between gap-6"><span style={{ opacity: 0.5 }}>Scale</span><span>N.T.S.</span></div>
          <div className="flex justify-between gap-6"><span style={{ opacity: 0.5 }}>Status</span><span>Live Model</span></div>
        </div>
      </div> */}
    </div>
  );
};

export default WireframeBuilding;