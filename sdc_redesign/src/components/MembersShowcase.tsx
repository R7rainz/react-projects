"use client"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LinkedinIcon as LinkedIn, ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const members = [
  { name: "John Doe", role: "Developer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
  { name: "Jane Smith", role: "Designer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
  { name: "Mike Johnson", role: "Project Manager", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
  { name: "Emily Brown", role: "Data Scientist", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
  { name: "Chris Lee", role: "UI/UX Designer", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
]

const teachers = [
  {
    name: "Dr. XYZ",
    subject: "Computer Science",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Cristiano Ronaldo",
    subject: "Data Science",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
  },
]

export default function MembersShowcase() {
  const sectionRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const moveToSlide = useCallback((index: number) => {
    if (typeof window === "undefined" || isAnimating || !sliderRef.current) return

    setIsAnimating(true)
    setActiveIndex(index)

    const slideWidth = 320 // width + gap
    const offset = window.innerWidth / 2 - slideWidth / 2
    const targetX = -(index * slideWidth) + offset

    try {
      gsap.to(sliderRef.current, {
        x: targetX,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          setIsAnimating(false)
          // Reset the timeout for the next slide
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }, [isAnimating, sliderRef, timeoutRef])
          timeoutRef.current = setTimeout(() => {
            moveToSlide((index + 1) % members.length)
          }, 3000)
        },
      })
    } catch (error) {
      console.error("GSAP animation error:", error)
      setIsAnimating(false)
    }
  }

  const handlePrevClick = () => {
    const newIndex = (activeIndex - 1 + members.length) % members.length
    moveToSlide(newIndex)
  }

  const handleNextClick = () => {
    const newIndex = (activeIndex + 1) % members.length
    const newIndex = (activeIndex + 1) % members.length
    moveToSlide(newIndex)

  useEffect(() => {
    const section = sectionRef.current

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    )

    // Initialize the slider position
    moveToSlide(0)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [moveToSlide]) // Added moveToSlide to dependencies

  return (
    <section id="members" ref={sectionRef} className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary dark:text-primary-dark">Our Teachers</h2>
        <div className="flex justify-center space-x-8 mb-16">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 group">
                <img
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  className="rounded-full transition-all duration-300 group-hover:scale-110 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 rounded-full">
                  <p className="text-sm font-semibold mb-2 text-white">{teacher.subject}</p>
                  <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary dark:text-primary-dark">{teacher.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center text-primary dark:text-primary-dark">Our Members</h2>
      </div>

      <div className="relative overflow-hidden py-20">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-8 py-8"
          style={{
            transform: "translateX(0)",
            willChange: "transform",
          }}
        >
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`w-64 flex-shrink-0 transition-all duration-500 ${
                index === activeIndex
                  ? "scale-110 shadow-xl z-10 brightness-100"
                  : "scale-90 brightness-50 hover:brightness-75"
              }`}
            >
              <div className="relative w-64 h-64 mb-4 group">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="rounded-lg w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-secondary/80 rounded-lg ${
                    index === activeIndex ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm font-semibold mb-2 text-white">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-secondary dark:text-secondary-dark">
                {member.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => moveToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-secondary scale-125"
                  : "bg-gray-400 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function useCallback(arg0: (index: number) => void) {
  throw new Error("Function not implemented.")
}

