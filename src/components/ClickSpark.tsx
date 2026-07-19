import { useCallback, useEffect, useRef, type MouseEvent, type ReactNode } from "react";

type ClickSparkProps = {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-in-out" | "ease-out";
  extraScale?: number;
  children: ReactNode;
};

type Spark = {
  x: number;
  y: number;
  angle: number;
  startTime: number;
};

export default function ClickSpark({
  sparkColor = "#99e9f2",
  sparkSize = 9,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 420,
  easing = "ease-out",
  extraScale = 1,
  children,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      canvas.getContext("2d")?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const ease = useCallback((progress: number) => {
    if (easing === "linear") return progress;
    if (easing === "ease-in") return progress * progress;
    if (easing === "ease-in-out") return progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;
    return progress * (2 - progress);
  }, [easing]);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    sparksRef.current = sparksRef.current.filter((spark) => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= duration) return false;

      const progress = ease(elapsed / duration);
      const distance = progress * sparkRadius * extraScale;
      const lineLength = sparkSize * (1 - progress);
      const cos = Math.cos(spark.angle);
      const sin = Math.sin(spark.angle);

      context.strokeStyle = sparkColor;
      context.globalAlpha = 1 - progress;
      context.lineWidth = 1.5;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(spark.x + distance * cos, spark.y + distance * sin);
      context.lineTo(spark.x + (distance + lineLength) * cos, spark.y + (distance + lineLength) * sin);
      context.stroke();
      return true;
    });
    context.globalAlpha = 1;

    animationFrameRef.current = sparksRef.current.length
      ? requestAnimationFrame(draw)
      : null;
  }, [duration, ease, extraScale, sparkColor, sparkRadius, sparkSize]);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const startTime = performance.now();
    sparksRef.current.push(...Array.from({ length: sparkCount }, (_, index) => ({
      x: event.clientX,
      y: event.clientY,
      angle: (2 * Math.PI * index) / sparkCount,
      startTime,
    })));

    if (animationFrameRef.current === null) {
      animationFrameRef.current = requestAnimationFrame(draw);
    }
  };

  return <div className="click-spark-root" onClick={handleClick}>
    <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />
    {children}
  </div>;
}
