import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { LinkedinIcon as LinkedIn } from "lucide-react"
import React from "react"

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
    name: "Prof. Alice Williams",
    subject: "Computer Science",
    image: "/placeholder.svg",
    linkedin: "https://linkedin.com",
  },
  { name: "Dr. Robert Taylor", subject: "Data Science", image: "/placeholder.svg", linkedin: "https://linkedin.com" },
]

export default function MembersShowcase() {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollRef.current

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    tl.to(scrollContainer, {
      x: "-50%",
      ease: "none",
    })

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % members.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="members" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Teachers</h2>
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
                  <p className="text-sm font-semibold mb-2 text-primary-foreground">{teacher.subject}</p>
                  <a href={teacher.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="w-6 h-6 text-primary-foreground" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-bold mb-12 text-center">Our Members</h2>
      </div>
      <div className="overflow-hidden">
        <div ref={scrollRef} className="flex space-x-8 w-[200%]">
          {[...members, ...members].map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`w-64 flex-shrink-0 transition-all duration-300 ${
                index % members.length === activeIndex ? "scale-110 shadow-lg z-10" : "scale-100"
              }`}
            >
              <div className="relative w-64 h-64 mb-4 group">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="rounded-lg transition-all duration-300 group-hover:scale-105 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/80 rounded-lg">
                  <p className="text-sm font-semibold mb-2 text-primary-foreground">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedIn className="w-6 h-6 text-primary-foreground" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
