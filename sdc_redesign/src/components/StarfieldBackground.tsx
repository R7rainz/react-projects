"use client"

import { useEffect, useRef } from "react"
import React from "react"

interface Particle {
  x: number
  y: number
  z: number
  prevZ?: number
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const speed = useRef(0.5)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      particles.current = []
      for (let i = 0; i < 200; i++) {
        particles.current.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * 1000,
        })
      }
    }

    const moveParticles = () => {
      particles.current.forEach((particle) => {
        particle.prevZ = particle.z
        particle.z -= speed.current
        if (particle.z <= 1) {
          particle.z = 1000
          particle.prevZ = 1000
          particle.x = Math.random() * canvas.width - canvas.width / 2
          particle.y = Math.random() * canvas.height - canvas.height / 2
        }
      })
    }

    const drawParticles = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach((particle) => {
        const scale = 1000 / particle.z
        const prevScale = 1000 / (particle.prevZ || particle.z)

        const x2 = canvas.width / 2 + particle.x * scale
        const y2 = canvas.height / 2 + particle.y * scale
        const x1 = canvas.width / 2 + particle.x * prevScale
        const y1 = canvas.height / 2 + particle.y * prevScale

        const size = (1 - particle.z / 1000) * 3

        ctx.beginPath()
        ctx.strokeStyle = `rgba(123, 97, 255, ${1 - particle.z / 1000})`
        ctx.lineWidth = size
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      })
    }

    const animate = () => {
      moveParticles()
      drawParticles()
      animationFrameId.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

