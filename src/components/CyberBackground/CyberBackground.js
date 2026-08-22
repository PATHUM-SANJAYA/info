import React from 'react';
import './CyberBackground.scss';

class CyberBackground extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.animationId = null;
    }

    componentDidMount() {
        // Only run on desktop
        if (window.innerWidth < 1024) return;

        const canvas = this.canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Binary rain columns
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

        // Network nodes
        const nodes = [];
        const nodeCount = 25;
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: 2 + Math.random() * 2,
                pulse: Math.random() * Math.PI * 2
            });
        }

        const animate = () => {
            const isDark = document.body.classList.contains('dark-mode');

            // Dynamic overlay matching current theme background
            ctx.fillStyle = isDark ? 'rgba(10, 10, 10, 0.08)' : 'rgba(248, 249, 250, 0.12)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const rgb = isDark ? '0, 238, 255' : '9, 132, 227';

            // Draw binary rain
            ctx.font = isDark ? `${fontSize}px monospace` : `600 ${fontSize}px monospace`;
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                const alpha = isDark ? (0.08 + Math.random() * 0.06) : (0.28 + Math.random() * 0.15);
                ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
                ctx.fillText(char, x, y);

                // Reset drop
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            // Update and draw network nodes
            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                node.x += node.vx;
                node.y += node.vy;
                node.pulse += 0.02;

                // Bounce off edges
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Draw connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const other = nodes[j];
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200) {
                        const alpha = (1 - dist / 200) * (isDark ? 0.12 : 0.35);
                        ctx.strokeStyle = `rgba(${rgb}, ${alpha})`;
                        ctx.lineWidth = isDark ? 0.5 : 0.8;
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                }

                // Draw node with pulse
                const pulseRadius = node.radius + Math.sin(node.pulse) * 1;
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${isDark ? (0.3 + Math.sin(node.pulse) * 0.15) : (0.7 + Math.sin(node.pulse) * 0.2)})`;
                ctx.fill();

                // Glow
                ctx.beginPath();
                ctx.arc(node.x, node.y, pulseRadius + 4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${rgb}, ${isDark ? (0.05 + Math.sin(node.pulse) * 0.03) : (0.15 + Math.sin(node.pulse) * 0.08)})`;
                ctx.fill();
            }

            this.animationId = requestAnimationFrame(animate);
        };

        animate();

        this._cleanup = () => {
            window.removeEventListener('resize', resize);
            if (this.animationId) cancelAnimationFrame(this.animationId);
        };
    }

    componentWillUnmount() {
        if (this._cleanup) this._cleanup();
    }

    render() {
        return (
            <canvas
                ref={this.canvasRef}
                className="cyber-background"
                aria-hidden="true"
            />
        );
    }
}

export default CyberBackground;
