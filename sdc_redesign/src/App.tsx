import Header from "./components/Header"
import WelcomeSection from "./components/WelcomeSection"
import MembersShowcase from "./components/MembersShowcase"
import EventsSection from "./components/EventsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
      <Header />
      <WelcomeSection />
      <MembersShowcase />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App

