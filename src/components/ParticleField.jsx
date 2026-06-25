import React, { useEffect, useRef } from 'react';

const ICON_PATHS = [
  // Wrench
  'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  // CPU
  'M9 9h6v6H9zM15 2v2M15 20v2M2 9h2M20 9h2M2 15h2M20 15h2M9 2v2M9 20v2',
  // Hard Drive
  'M22 12H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  // Monitor
  'M4 6h16v10H4zM8 20h8',
  // Chip / Circuit
  'M2 10h2M20 10h2M2 14h2M20 14h2M10 2v2M14 2v2M10 20v2M14 20v2M6 6h12v12H6z',
  // Settings / Gear (from lucide Settings)
  'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
];

const drawSvgPath = (ctx, pathStr, size) => {
  const s = size / 24;
  ctx.save();
  ctx.scale(s, s);
  ctx.translate(-12, -12);
  const path = new Path2D(pathStr);
  ctx.fill(path);
  ctx.stroke(path);
  ctx.restore();
};

const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let dots = [];
    let iconsList = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      const area = canvas.width * canvas.height;
      const dotCount = Math.min(60, Math.floor(area / 15000));
      dots = Array.from({ length: dotCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.3 + 0.06,
        hue: Math.random() > 0.5 ? 185 : 280,
      }));

      const iconCount = Math.min(12, Math.floor(area / 30000));
      iconsList = Array.from({ length: iconCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 6 + 10,
        opacity: Math.random() * 0.25 + 0.15,
        hue: Math.random() > 0.5 ? 185 : 280,
        path: ICON_PATHS[Math.floor(Math.random() * ICON_PATHS.length)],
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
      }));
    };

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const applyMouse = (p) => {
      if (mouse.x === null) return;
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius && dist > 0) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x += (dx / dist) * force * 1.2;
        p.y += (dy / dist) * force * 1.2;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        applyMouse(d);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${d.hue}, 100%, 60%, ${d.opacity})`;
        ctx.fill();
      }

      for (const ic of iconsList) {
        ic.x += ic.vx;
        ic.y += ic.vy;
        ic.angle += ic.rotSpeed;
        if (ic.x < 0 || ic.x > canvas.width) ic.vx *= -1;
        if (ic.y < 0 || ic.y > canvas.height) ic.vy *= -1;
        applyMouse(ic);

        ctx.save();
        ctx.translate(ic.x, ic.y);
        ctx.rotate(ic.angle);
        ctx.strokeStyle = `hsla(${ic.hue}, 100%, 70%, ${ic.opacity})`;
        ctx.fillStyle = `hsla(${ic.hue}, 100%, 65%, ${ic.opacity * 0.2})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        drawSvgPath(ctx, ic.path, ic.size);
        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    draw();

    window.addEventListener('resize', () => { resize(); init(); });
    canvas.addEventListener('mousemove', onMouse);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouse);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default ParticleField;
