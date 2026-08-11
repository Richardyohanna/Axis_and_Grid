import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * ServicesWireframeHero
 * ----------------------
 * Drop-in replacement for the plain "Our Services" title block. Renders
 * the section heading over a self-drawing, landscape isometric wireframe
 * of a cable-stayed bridge — echoing the Axis & Grids mark (the circled
 * "1" apex tag and circled "A" foundation tag come straight from the
 * logo's coordinate-dot language).
 *
 * Usage — swap directly for the old header block:
 *   <ServicesWireframeHero
 *     title="Our Services"
 *     description="Explore the construction services provided by Axis & Grids, ..."
 *   />
 */

type Vec3 = [number, number, number];
type Vec2 = [number, number];
type Edge = [Vec3, Vec3];

const ISO_COS = Math.cos(Math.PI / 6);
const ISO_SIN = 0.5;
const ORIGIN_X = 90;
const ORIGIN_Y = 300;

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

interface ServicesWireframeHeroProps {

  line?: string;
  accent?: string;
  className?: string;
}

const ServicesWireframeHero: React.FC<ServicesWireframeHeroProps> = ({
  
  line = "#000000",
  accent = "#F5C400",
  className = "",
}) => {
  const [drawn, setDrawn] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 80);
    return () => clearTimeout(t);
  }, []);

  const VIEW_W = 2000;
  const VIEW_H = 20;

  // Bridge geometry: two A-frame pylons on piers, deck spanning three
  // bays, fan cables, abutments, and a hatched river below.
  const DECK_Z = 0, DECK_H = 14, DECK_W = 70;
  const SPAN_L = 940;
  const PIER_X = [230, 620];
  const PYLON_TOP = DECK_Z + DECK_H + 150;
  const GROUND_Z = -150;

  const geo = useMemo(() => {
    const deck = boxEdges(0, 0, DECK_Z, SPAN_L, DECK_W, DECK_H);

    const piers: Edge[] = [];
    const pylons: Edge[] = [];
    const ties: Edge[] = [];
    const cables: Edge[] = [];
    const apexes: Vec3[] = [];

    PIER_X.forEach((px) => {
      // pier column down to the riverbed
      piers.push(...boxEdges(px - 12, DECK_W / 2 - 12, GROUND_Z, 24, 24, -GROUND_Z));

      // A-frame pylon legs rising from each deck edge to a shared apex
      const apex: Vec3 = [px, DECK_W / 2, PYLON_TOP];
      apexes.push(apex);
      const legL: Vec3 = [px, 0, DECK_Z + DECK_H];
      const legR: Vec3 = [px, DECK_W, DECK_Z + DECK_H];
      pylons.push([legL, apex], [legR, apex]);

      // cross ties for structural read
      [0.35, 0.7].forEach((t) => {
        const z = (DECK_Z + DECK_H) + (PYLON_TOP - (DECK_Z + DECK_H)) * t;
        const x = px; // legs are vertical in x,y — tie is a straight width-wise line
        ties.push([[x, 0, z], [x, DECK_W, z]]);
      });

      // fan cables to deck points on both sides of the pylon
      const span = 190;
      for (let i = 1; i <= 4; i++) {
        const dx = (span / 4) * i;
        cables.push([apex, [px - dx, DECK_W / 2, DECK_Z + DECK_H]]);
        cables.push([apex, [px + dx, DECK_W / 2, DECK_Z + DECK_H]]);
      }
    });

    // abutments at both ends
    const abutmentA = boxEdges(-26, -6, GROUND_Z * 0.5, 26, DECK_W + 12, -GROUND_Z * 0.5);
    const abutmentB = boxEdges(SPAN_L, -6, GROUND_Z * 0.5, 26, DECK_W + 12, -GROUND_Z * 0.5);

    // riverbed hatch — short ripple dashes across the main span
    const water: Edge[] = [];
    const waterZ = GROUND_Z + 18;
    for (let row = 0; row < 5; row++) {
      const y = 6 + row * 15;
      for (let x = 40; x < SPAN_L - 40; x += 46) {
        const offset = row % 2 === 0 ? 0 : 20;
        water.push([[x + offset, y, waterZ], [x + offset + 24, y, waterZ]]);
      }
    }

    // dimension line under the full span
    const dimZ = GROUND_Z - 34;
    const dims: Edge[] = [
      [[0, 0, GROUND_Z], [0, 0, dimZ]],
      [[SPAN_L, 0, GROUND_Z], [SPAN_L, 0, dimZ]],
      [[0, 0, dimZ], [SPAN_L, 0, dimZ]],
    ];

    return { deck, piers, pylons, ties, cables, apexes, abutmentA, abutmentB, water, dims };
  }, []);

  const apexTagPt = project([PIER_X[0], DECK_W / 2, PYLON_TOP]);
  const pierTagPt = project([PIER_X[0] - 12, DECK_W / 2 - 12, GROUND_Z]);
  const dimLabelPt = project([SPAN_L / 2, 0, GROUND_Z - 34]);

  const renderEdges = (
    edges: Edge[],
    stroke: string,
    opacity: number,
    delayStart: number,
    width = 1
  ) =>
    edges.map((e, i) => {
      const p1 = project(e[0]);
      const p2 = project(e[1]);
      const len = dist2D(p1, p2) || 0.001;
      const delay = delayStart + i * 0.012;
      return (
        <line
          key={i}
          x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]}
          stroke={stroke}
          strokeWidth={width}
          strokeOpacity={drawn ? opacity : 0}
          strokeDasharray={len}
          strokeDashoffset={drawn ? 0 : len}
          style={{ transition: `stroke-dashoffset 0.6s ease ${delay}s, stroke-opacity 0.4s ease ${delay}s` }}
        />
      );
    });

  return (
    <div ref={wrapRef} className={`relative w-full overflow-hidden bg-transparent ${className}`}>
      {/* faint blueprint grid, matching the logo's grid mark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(237,237,237,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,237,237,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 92%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 40%, black 30%, transparent 92%)",
        }}
      />

      {/* yellow ambient glow behind the pylon apex */}
      {/* <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 420, height: 420,
          left: `${(apexTagPt[0] / VIEW_W) * 100}%`,
          top: `${(apexTagPt[1] / VIEW_H) * 100}%`,
          transform: "translate(-50%, -35%)",
          background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
      /> */}



      <div className="relative w-full aspect-[1200/420]">
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-full" fill="none">
          {renderEdges(geo.water, line, 0.18, 0, 0.8)}
          {renderEdges(geo.abutmentA, line, 0.4, 0.1)}
          {renderEdges(geo.abutmentB, line, 0.4, 0.1)}
          {renderEdges(geo.piers, line, 0.45, 0.15)}
          {renderEdges(geo.deck, line, 0.75, 0.35, 1.4)}
          {renderEdges(geo.pylons, accent, 0.85, 0.55, 1.4)}
          {renderEdges(geo.ties, line, 0.4, 0.65, 0.8)}
          {renderEdges(geo.cables, accent, 0.5, 0.8, 0.7)}
          {renderEdges(geo.dims, line, 0.3, 1.3, 0.8)}

          <text
            x={dimLabelPt[0]} y={dimLabelPt[1] + 14}
            textAnchor="middle"
            fontSize="10"
            fill={line}
            opacity={drawn ? 0.5 : 0}
            style={{ transition: "opacity 0.6s ease 1.6s", fontFamily: "monospace", letterSpacing: "0.05em" }}
          >
            SPAN (N.T.S.)
          </text>

          {/* apex tag — echoes the logo's circled "1" */}
          <g opacity={drawn ? 1 : 0} style={{ transition: "opacity 0.5s ease 1.4s" }}>
            <circle cx={apexTagPt[0]} cy={apexTagPt[1] - 22} r="9" fill="none" stroke={accent} strokeWidth="1.2" />
            <text x={apexTagPt[0]} y={apexTagPt[1] - 18} textAnchor="middle" fontSize="10" fill={accent} fontFamily="monospace">1</text>
            <line x1={apexTagPt[0]} y1={apexTagPt[1] - 13} x2={apexTagPt[0]} y2={apexTagPt[1]} stroke={accent} strokeWidth="1" strokeOpacity="0.6" />
          </g>

          {/* pier tag — echoes the logo's circled "A" */}
          <g opacity={drawn ? 1 : 0} style={{ transition: "opacity 0.5s ease 1.5s" }}>
            <circle cx={pierTagPt[0] - 20} cy={pierTagPt[1]} r="9" fill="none" stroke={line} strokeWidth="1.2" />
            <text x={pierTagPt[0] - 20} y={pierTagPt[1] + 4} textAnchor="middle" fontSize="10" fill={line} fontFamily="monospace">A</text>
            <line x1={pierTagPt[0] - 12} y1={pierTagPt[1]} x2={pierTagPt[0]} y2={pierTagPt[1]} stroke={line} strokeWidth="1" strokeOpacity="0.5" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-4 right-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25 select-none">
        AX / SERVICES
      </div>
    </div>
  );
};

export default ServicesWireframeHero;