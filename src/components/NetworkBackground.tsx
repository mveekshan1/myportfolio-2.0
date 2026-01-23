import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const drawNode = (node: Node) => {
      if (!ctx) return;
      
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 3
      );
      gradient.addColorStop(0, `hsla(180, 100%, 70%, ${node.opacity})`);
      gradient.addColorStop(0.5, `hsla(180, 100%, 50%, ${node.opacity * 0.5})`);
      gradient.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(180, 100%, 80%, ${node.opacity})`;
      ctx.fill();
    };

    const drawLine = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      if (!ctx) return;
      
      const opacity = (1 - distance / maxDistance) * 0.4;
      const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
      gradient.addColorStop(0, `hsla(180, 100%, 50%, ${opacity})`);
      gradient.addColorStop(0.5, `hsla(200, 100%, 60%, ${opacity * 0.8})`);
      gradient.addColorStop(1, `hsla(280, 100%, 65%, ${opacity})`);

      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxDistance = 150;
      const mouseMaxDistance = 200;

      nodesRef.current.forEach((node, i) => {
        // Mouse attraction
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);

        if (mouseDistance < mouseMaxDistance && mouseDistance > 0) {
          const force = (mouseMaxDistance - mouseDistance) / mouseMaxDistance;
          node.vx += (dx / mouseDistance) * force * 0.02;
          node.vy += (dy / mouseDistance) * force * 0.02;
        }

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Boundary check
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw connections
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const other = nodesRef.current[j];
          const distance = Math.sqrt(
            Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
          );

          if (distance < maxDistance) {
            drawLine(node, other, distance, maxDistance);
          }
        }

        // Draw mouse connections
        if (mouseDistance < mouseMaxDistance) {
          const opacity = (1 - mouseDistance / mouseMaxDistance) * 0.6;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `hsla(180, 100%, 60%, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        drawNode(node);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    createNodes();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createNodes();
    });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default NetworkBackground;
