"use client";
import { useEffect, useRef } from "react";
import React from "react";
export default function StarfieldBackground() {
    var canvasRef = useRef(null);
    var particles = useRef([]);
    var speed = useRef(0.5);
    var animationFrameId = useRef(null);
    useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        var resizeCanvas = function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        var initParticles = function () {
            particles.current = [];
            for (var i = 0; i < 200; i++) {
                particles.current.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * 1000,
                });
            }
        };
        var moveParticles = function () {
            particles.current.forEach(function (particle) {
                particle.prevZ = particle.z;
                particle.z -= speed.current;
                if (particle.z <= 1) {
                    particle.z = 1000;
                    particle.prevZ = 1000;
                    particle.x = Math.random() * canvas.width - canvas.width / 2;
                    particle.y = Math.random() * canvas.height - canvas.height / 2;
                }
            });
        };
        var drawParticles = function () {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.current.forEach(function (particle) {
                var scale = 1000 / particle.z;
                var prevScale = 1000 / (particle.prevZ || particle.z);
                var x2 = canvas.width / 2 + particle.x * scale;
                var y2 = canvas.height / 2 + particle.y * scale;
                var x1 = canvas.width / 2 + particle.x * prevScale;
                var y1 = canvas.height / 2 + particle.y * prevScale;
                var size = (1 - particle.z / 1000) * 3;
                ctx.beginPath();
                ctx.strokeStyle = "rgba(123, 97, 255, ".concat(1 - particle.z / 1000, ")");
                ctx.lineWidth = size;
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            });
        };
        var animate = function () {
            moveParticles();
            drawParticles();
            animationFrameId.current = requestAnimationFrame(animate);
        };
        resizeCanvas();
        initParticles();
        animate();
        window.addEventListener("resize", resizeCanvas);
        return function () {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
    return React.createElement("canvas", { ref: canvasRef, className: "fixed inset-0 -z-10" });
}
