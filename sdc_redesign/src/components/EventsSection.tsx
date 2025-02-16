"use client"
import React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    name: "Annual Hackathon",
    date: "July 15-17, 2023",
    time: "48 hours",
    location: "Virtual Event",
    description: "Join us for 48 hours of coding, innovation, and fun!",
  },
  {
    name: "Tech Talk: AI in Healthcare",
    date: "August 5, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Main Auditorium",
    description: "Learn about the latest AI applications in healthcare.",
  },
  {
    name: "Workshop: Intro to React",
    date: "September 10, 2023",
    time: "10:00 AM - 3:00 PM",
    location: "Computer Lab 3",
    description: "A hands-on workshop for beginners to learn React.",
  },
]

export default function EventsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const eventCards = gsap.utils.toArray(".event-card")

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

    eventCards.forEach((card, index) => {
      gsap.fromTo(
        card as gsap.TweenTarget,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 90%",
          },
        },
      )
    })
  }, [])

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.name}
              className="event-card bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{event.name}</h3>
              <div className="flex items-center text-muted-foreground mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <p className="mb-6">{event.description}</p>
              <Button className="w-full">Register Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

