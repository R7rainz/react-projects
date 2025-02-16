"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import React from "react"

export default function WelcomeSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const cta = ctaRef.current

    gsap.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power3.out" })

    gsap.fromTo(text, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" })

    gsap.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power3.out" })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      gsap.to(text, {
        x: moveX * 0.01,
        y: moveY * 0.01,
        duration: 0.3,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-600 opacity-50" />
      <h1 ref={textRef} className="text-6xl md:text-8xl font-bold text-center z-10 mb-8">
        Welcome to SDC Club
      </h1>
      <p ref={ctaRef} className="text-xl md:text-2xl text-center z-10">
        Innovate. Create. Collaborate.
      </p>
    </section>
  )
}

