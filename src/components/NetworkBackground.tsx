import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      const nodeCount = Math.min(Math.floor((canvas.width * canvas.height) / 40000), 25);
      nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: [],
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        const distances: { index: number; dist: number }[] = [];
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dist = Math.hypot(node.x - other.x, node.y - other.y);
            distances.push({ index: j, dist });
          }
        });
        distances.sort((a, b) => a.dist - b.dist);
        node.connections = distances.slice(0, 3).map(d => d.index);
      });
    };

    const spawnPacket = () => {
      if (packets.length < 8 && nodes.length > 1) {
        const fromNode = Math.floor(Math.random() * nodes.length);
        const toNode = nodes[fromNode].connections[
          Math.floor(Math.random() * nodes[fromNode].connections.length)
        ];
        if (toNode !== undefined) {
          packets.push({
            fromNode,
            toNode,
            progress: 0,
            speed: 0.005 + Math.random() * 0.01,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.08)';
      ctx.lineWidth = 1;
      nodes.forEach((node, i) => {
        node.connections.forEach(j => {
          if (j > i) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.4)';
        ctx.fill();

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.05)';
        ctx.fill();
      });

      // Draw and update packets
      packets = packets.filter(packet => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) return false;

        const from = nodes[packet.fromNode];
        const to = nodes[packet.toNode];
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;

        // Packet glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 12);
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.8)');
        gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.2)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Packet core
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 1)';
        ctx.fill();

        return true;
      });

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      if (Math.random() < 0.02) spawnPacket();

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NetworkBackground;
