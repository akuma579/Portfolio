"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouse = { x: -999, y: -999 };
    let animId: number;

    type Dot = { x: number; y: number; alpha: number; size: number; hue: number };
    const dots: Dot[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
      // push a new dot
      dots.push({
        x: mouse.x,
        y: mouse.y,
        alpha: 0.6,
        size: Math.random() * 3 + 1.5,
        hue: Math.random() > 0.5 ? 20 : 270, // orange or violet
      });
      if (dots.length > 40) dots.shift();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        d.alpha -= 0.018;
        d.size  *= 0.97;
        if (d.alpha <= 0) continue;
        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(d.size, 0.1), 0, Math.PI * 2);
        // orange = hsl(20, 100%, 60%), violet = hsl(270, 70%, 65%)
        const sat  = d.hue === 20 ? "100%" : "70%";
        const ligh = d.hue === 20 ? "60%"  : "65%";
        ctx.fillStyle = `hsla(${d.hue}, ${sat}, ${ligh}, ${d.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[998]"
      aria-hidden="true"
    />
  );
}
