import { useRef, useEffect } from "react";
import "./Canvas.scss";
import recordImage from "./record.svg";

export const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const img = new Image();
    img.src = recordImage;

    let particles = [];

    const addParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          radius: Math.random() * 8 + 10,
          color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`,
        });
      }
    };

    const updateParticles = () => {
      particles = particles.map((p) => {
        const newX = p.x + p.vx;
        const newY = p.y + p.vy;

        if (newX < 0 || newX > canvas.width) {
          p.vx *= -1;
        }
        if (newY < 0 || newY > canvas.height) {
          p.vy *= -1;
        }

        return {
          ...p,
          x: newX,
          y: newY,
        };
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();

        ctx.translate(p.x, p.y);
        ctx.rotate(Math.random() * 360);

        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        ctx.drawImage(img, -p.radius / 2, -p.radius / 2, p.radius, p.radius);

        ctx.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    addParticles();
    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} className="canvas_bg" />;
};
