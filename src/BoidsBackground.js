// src/BoidsBackground.js
import { useEffect, useRef } from "react";

export default function BoidsBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const boids = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }));

    function draw() {
      ctx.fillStyle = "#161616";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#cccccc";
      for (const b of boids) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function update() {
      for (const b of boids) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < 0) b.x = canvas.width;
        if (b.y < 0) b.y = canvas.height;
        if (b.x > canvas.width) b.x = 0;
        if (b.y > canvas.height) b.y = 0;
      }
    }

    function animate() {
      draw();
      update();
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}