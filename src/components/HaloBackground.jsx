// HaloBackground.jsx
import React, { useEffect, useRef } from "react";

const HaloBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
    };

    // ---------- RESIZE ----------
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    resize();

    // ---------- WAVES ----------
    class Wave {
      constructor(index) {
        this.index = index;

        this.y = height * 0.5;

        this.length = 0.003 + index * 0.0008;

        this.amplitude = 40 + index * 30;

        this.frequency = 0.002 + index * 0.001;

        this.phase = Math.random() * Math.PI * 2;

        this.color = [
          "rgba(214,181,122,0.10)",
          "rgba(255,255,255,0.03)",
          "rgba(214,181,122,0.06)",
        ][index];
      }

      draw(time) {
        ctx.beginPath();

        for (let x = 0; x <= width; x++) {
          const y =
            this.y +
            Math.sin(x * this.length + time * this.frequency + this.phase) *
              this.amplitude;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle = this.color;

        ctx.lineWidth = 1.2;

        ctx.shadowBlur = 25;
        ctx.shadowColor = "#d6b57a";

        ctx.stroke();
      }
    }

    const waves = [new Wave(0), new Wave(1), new Wave(2)];

    // ---------- FLOATING ORBS ----------
    class Orb {
      constructor() {
        this.radius = Math.random() * 120 + 60;

        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = (Math.random() - 0.5) * 0.15;

        this.opacity = Math.random() * 0.08 + 0.03;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // mouse attraction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          this.x += dx * 0.0008;
          this.y += dy * 0.0008;
        }

        // wrap
        if (this.x < -200) this.x = width + 200;
        if (this.x > width + 200) this.x = -200;

        if (this.y < -200) this.y = height + 200;
        if (this.y > height + 200) this.y = -200;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );

        gradient.addColorStop(
          0,
          `rgba(214,181,122,${this.opacity})`
        );

        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }
    }

    const orbs = [];

    for (let i = 0; i < 6; i++) {
      orbs.push(new Orb());
    }

    // ---------- PARTICLES ----------
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        this.size = Math.random() * 2 + 0.5;

        this.speedY = Math.random() * 0.4 + 0.1;

        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y -= this.speedY;

        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.beginPath();

        ctx.arc(
          this.x,
          this.y,
          this.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";

        ctx.fill();
      }
    }

    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push(new Particle());
    }

    // ---------- GRID ----------
    function drawPerspectiveGrid(time) {
      ctx.save();

      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;

      const spacing = 60;

      for (let i = 0; i < width; i += spacing) {
        ctx.beginPath();

        ctx.moveTo(i, height);

        ctx.lineTo(
          width / 2 +
            (i - width / 2) * 0.2,
          height * 0.35
        );

        ctx.stroke();
      }

      for (let y = 0; y < 16; y++) {
        const yy =
          height * 0.4 +
          y * 45 +
          Math.sin(time * 0.0004 + y) * 4;

        ctx.beginPath();

        ctx.moveTo(0, yy);

        ctx.lineTo(width, yy);

        ctx.stroke();
      }

      ctx.restore();
    }

    // ---------- MAIN ANIMATION ----------
    function animate(time) {
      ctx.clearRect(0, 0, width, height);

      // Background gradient
      const bg = ctx.createLinearGradient(
        0,
        0,
        0,
        height
      );

      bg.addColorStop(0, "#050505");
      bg.addColorStop(1, "#000000");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Floating orbs
      orbs.forEach((orb) => {
        orb.update();
        orb.draw();
      });

      // Grid
      drawPerspectiveGrid(time);

      // Waves
      waves.forEach((wave) => {
        wave.draw(time);
      });

      // Particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate(0);

    // ---------- EVENTS ----------
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default HaloBackground;



// import { useEffect, useRef } from "react";

// const HaloBackground = () => {
//   const vantaRef = useRef(null);
//   const effectRef = useRef(null);

//   useEffect(() => {
//     // Check if VANTA is loaded
//     if (window.VANTA && window.VANTA.HALO) {
//       effectRef.current = window.VANTA.HALO({
//         el: vantaRef.current,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200,
//         minWidth: 200,
//         baseColor: 0x09216d,
//         backgroundColor: 0xb,
//         amplitudeFactor: 1.6,
//         xOffset: -0.01,
//         size: 1.5,
//       });
//     } else {
//       console.error("VANTA.HALO not loaded");
//     }

//     return () => {
//       effectRef.current?.destroy();
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//       }}
//     />
//   );
// };

// export default HaloBackground;