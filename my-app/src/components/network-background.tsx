"use client";

import { useEffect, useRef } from "react";

interface Point {
	x: number;
	y: number;
	vx: number;
	vy: number;
	connections: Point[];
}

export default function NetworkBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let points: Point[] = [];
		let mouseX = 0;
		let mouseY = 0;
		let isMouseMoving = false;
		let mouseTimeout: NodeJS.Timeout;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initPoints();
		};

		const initPoints = () => {
			points = [];
			const pointCount = Math.floor(
				(window.innerWidth * window.innerHeight) / 15000
			);

			for (let i = 0; i < pointCount; i++) {
				points.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
					connections: [],
				});
			}
		};

		const connectPoints = () => {
			const connectionDistance = Math.min(200, canvas.width * 0.15);

			// Reset connections
			points.forEach((point) => {
				point.connections = [];
			});

			// Create connections
			for (let i = 0; i < points.length; i++) {
				for (let j = i + 1; j < points.length; j++) {
					const dx = points[i].x - points[j].x;
					const dy = points[i].y - points[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < connectionDistance) {
						points[i].connections.push(points[j]);
						points[j].connections.push(points[i]);
					}
				}
			}
		};

		const draw = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Update points
			points.forEach((point) => {
				point.x += point.vx;
				point.y += point.vy;

				// Bounce off edges
				if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
				if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

				// Mouse interaction
				if (isMouseMoving) {
					const dx = point.x - mouseX;
					const dy = point.y - mouseY;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const maxDistance = 200;

					if (distance < maxDistance) {
						const force = (maxDistance - distance) / maxDistance;
						point.vx += (dx / distance) * force * 0.2;
						point.vy += (dy / distance) * force * 0.2;

						// Limit velocity
						const speed = Math.sqrt(point.vx * point.vx + point.vy * point.vy);
						if (speed > 2) {
							point.vx = (point.vx / speed) * 2;
							point.vy = (point.vy / speed) * 2;
						}
					}
				}
			});

			// Reconnect points
			connectPoints();

			// Draw connections
			ctx.strokeStyle =
				getComputedStyle(document.documentElement)
					.getPropertyValue("--foreground")
					.trim() || "#888";
			ctx.lineWidth = 0.5;

			points.forEach((point) => {
				point.connections.forEach((connectedPoint) => {
					const dx = point.x - connectedPoint.x;
					const dy = point.y - connectedPoint.y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const maxDistance = 200;

					// Only draw each connection once
					if (points.indexOf(point) < points.indexOf(connectedPoint)) {
						ctx.beginPath();
						ctx.moveTo(point.x, point.y);
						ctx.lineTo(connectedPoint.x, connectedPoint.y);

						// Fade out connections as they get further apart
						const opacity = 1 - distance / maxDistance;
						ctx.globalAlpha = opacity * 0.5;

						ctx.stroke();
					}
				});
			});

			// Draw points
			ctx.globalAlpha = 0.7;
			ctx.fillStyle =
				getComputedStyle(document.documentElement)
					.getPropertyValue("--primary")
					.trim() || "#4f46e5";

			points.forEach((point) => {
				ctx.beginPath();
				ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
				ctx.fill();
			});

			ctx.globalAlpha = 1.0;

			animationFrameId = requestAnimationFrame(draw);
		};

		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
			isMouseMoving = true;

			clearTimeout(mouseTimeout);
			mouseTimeout = setTimeout(() => {
				isMouseMoving = false;
			}, 2000);
		};

		window.addEventListener("resize", resizeCanvas);
		window.addEventListener("mousemove", handleMouseMove);

		resizeCanvas();
		draw();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
			clearTimeout(mouseTimeout);
		};
	}, []);

	return <canvas ref={canvasRef} className="w-full h-full" />;
}
