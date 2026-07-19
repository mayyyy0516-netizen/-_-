import { useCallback, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import "./BorderGlow.css";

type BorderGlowProps = {
  children: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
};

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>;

const gradientPositions = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
const gradientKeys = ["--gradient-one", "--gradient-two", "--gradient-three", "--gradient-four", "--gradient-five", "--gradient-six", "--gradient-seven"];
const colorMap = [0, 1, 2, 0, 1, 2, 1];

function parseHsl(value: string) {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match
    ? { h: Number.parseFloat(match[1]), s: Number.parseFloat(match[2]), l: Number.parseFloat(match[3]) }
    : { h: 187, s: 70, l: 78 };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHsl(glowColor);
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  return Object.fromEntries(opacities.map((opacity, index) => [
    `--glow-color${keys[index]}`,
    `hsl(${h}deg ${s}% ${l}% / ${Math.min(opacity * intensity, 100)}%)`,
  ]));
}

function buildGradientVars(colors: string[]) {
  const values = Object.fromEntries(gradientKeys.map((key, index) => {
    const color = colors[Math.min(colorMap[index], colors.length - 1)];
    return [key, `radial-gradient(at ${gradientPositions[index]}, ${color} 0px, transparent 50%)`];
  }));
  return { ...values, "--gradient-base": `linear-gradient(${colors[0]} 0 100%)` };
}

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);
const easeInCubic = (value: number) => value * value * value;

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (value: number) => number;
  onUpdate: (value: number) => void;
  onEnd?: () => void;
}) {
  const startTime = performance.now() + delay;
  let frameId = 0;
  let timeoutId = 0;
  const tick = () => {
    const progress = Math.min((performance.now() - startTime) / duration, 1);
    onUpdate(start + (end - start) * ease(progress));
    if (progress < 1) frameId = requestAnimationFrame(tick);
    else onEnd?.();
  };
  timeoutId = window.setTimeout(() => { frameId = requestAnimationFrame(tick); }, delay);
  return () => {
    window.clearTimeout(timeoutId);
    cancelAnimationFrame(frameId);
  };
}

export default function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "187 70 78",
  backgroundColor = "#0a1020",
  borderRadius = 20,
  glowRadius = 28,
  glowIntensity = 0.6,
  coneSpread = 22,
  animated = false,
  colors = ["#7dd3fc", "#a5f3fc", "#60a5fa"],
  fillOpacity = 0.16,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const getCenter = useCallback((element: HTMLElement) => {
    const { width, height } = element.getBoundingClientRect();
    return [width / 2, height / 2] as const;
  }, []);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const [centerX, centerY] = getCenter(card);
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const scaleX = deltaX === 0 ? Infinity : centerX / Math.abs(deltaX);
    const scaleY = deltaY === 0 ? Infinity : centerY / Math.abs(deltaY);
    const edge = Math.min(Math.max(1 / Math.min(scaleX, scaleY), 0), 1);
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }, [getCenter]);

  useEffect(() => {
    const card = cardRef.current;
    if (!animated || !card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cleanups = [
      animateValue({ duration: 500, onUpdate: (value) => card.style.setProperty("--edge-proximity", `${value}`) }),
      animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: (value) => card.style.setProperty("--cursor-angle", `${110 + 3.55 * value}deg`) }),
      animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: (value) => card.style.setProperty("--cursor-angle", `${110 + 3.55 * value}deg`) }),
      animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0, onUpdate: (value) => card.style.setProperty("--edge-proximity", `${value}`), onEnd: () => card.classList.remove("sweep-active") }),
    ];
    card.classList.add("sweep-active");
    card.style.setProperty("--cursor-angle", "110deg");
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [animated]);

  const style: GlowStyle = {
    "--card-bg": backgroundColor,
    "--edge-sensitivity": edgeSensitivity,
    "--border-radius": `${borderRadius}px`,
    "--glow-padding": `${glowRadius}px`,
    "--cone-spread": coneSpread,
    "--fill-opacity": fillOpacity,
    ...buildGlowVars(glowColor, glowIntensity),
    ...buildGradientVars(colors),
  };

  return <div ref={cardRef} onPointerMove={handlePointerMove} className={`border-glow-card ${className}`} style={style}>
    <span className="edge-light" />
    <div className="border-glow-inner">{children}</div>
  </div>;
}
