"use client"

import React,{ useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LinkedinIcon } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const members = [
  {
    name: "John Doe",
    role: "Developer",
    image: "/images/john.svg",
    linkedin: "https://linkedin.com/johndoe",
  },
  { name: "Jane Smith", role: "Designer", image: "/images/jane.svg", linkedin: "https://linkedin.com/janesmith" },
  {
    name: "Mike Johnson",
    role: "Project Manager",
    image: "/images/mike.svg",
    linkedin: "https://linkedin.com/mikejohnson",
  },
  {
    name: "Emily Brown",
    role: "Data Scientist",
    image: "/images/emily.svg",
    linkedin: "https://linkedin.com/emilybrown",
  },
  { name: "Chris Lee", role: "UI/UX Designer", image: "/images/chris.svg", linkedin: "https://linkedin.com/chrislee" },
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
  const sectionRef = useRef<HTMLElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const slider = sliderRef.current

    if (!section || !slider) return

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

    const slideWidth = 320 // width + gap
    const totalWidth = slideWidth * members.length
    const duration = 5 // Time for one member to pass (in seconds)

    // Create a timeline for the infinite scroll
    const tl = gsap.timeline({ repeat: -1 })

    // Animate the slider
    tl.to(slider, {
      x: -totalWidth,
      duration: duration * members.length,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % totalWidth), // Allows for seamless looping
      },
    })

    // Update active index
    const updateActiveIndex = () => {
      const progress = tl.progress()
      const newActiveIndex = Math.floor(progress * members.length) % members.length
      setActiveIndex(newActiveIndex)
    }

    // Add the updateActiveIndex function to the ticker
    gsap.ticker.add(updateActiveIndex)

    // Spotlight effect
    const updateSpotlight = () => {
      const centerX = window.innerWidth / 2
      const sliderRect = slider.getBoundingClientRect()

      gsap.utils.toArray<HTMLElement>(slider.children).forEach((child, index) => {
        const childRect = child.getBoundingClientRect()
        const childCenterX = childRect.left + childRect.width / 2
        const distanceFromCenter = Math.abs(childCenterX - centerX)
        const maxDistance = window.innerWidth / 2

        const scale = gsap.utils.clamp(0.8, 1.1, 1.1 - (distanceFromCenter / maxDistance) * 0.3)
        const brightness = gsap.utils.clamp(50, 100, 100 - (distanceFromCenter / maxDistance) * 50)

        gsap.to(child, {
          scale: scale,
          filter: `brightness(${brightness}%)`,
          duration: 0.2,
        })
      })
    }

    // Add the updateSpotlight function to the ticker
    gsap.ticker.add(updateSpotlight)

    return () => {
      tl.kill()
      gsap.ticker.remove(updateActiveIndex)
      gsap.ticker.remove(updateSpotlight)
    }
  }, [])

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
                    <LinkedinIcon className="w-6 h-6 text-white" />
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
        <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10"></div>

        <div
          ref={sliderRef}
          className="flex space-x-8 py-8"
          style={{
            width: `${members.length * 320 * 2}px`, // Double the width for seamless looping
            willChange: "transform",
          }}
        >
          {[...members, ...members].map((member, index) => (
            <div key={`${member.name}-${index}`} className="w-64 flex-shrink-0 transition-all duration-500">
              <div className="relative w-64 h-64 mb-4 group">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="rounded-lg w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-secondary/80 rounded-lg ${
                    index % members.length === activeIndex ? "opacity-0 group-hover:opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-sm font-semibold mb-2 text-white">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-secondary dark:text-secondary-dark">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

