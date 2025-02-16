import Header from "@/components/Header"
import WelcomeSection from "@/components/WelcomeSection"
import MembersShowcase from "@/components/MembersShowcase"
import EventsSection from "@/components/EventsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <Header />
      <WelcomeSection />
      <MembersShowcase />
      <EventsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

