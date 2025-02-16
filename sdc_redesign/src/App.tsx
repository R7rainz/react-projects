import React from 'react'
import { Header, WelcomeSection, Footer, MembersShowcase, EventsSection, ContactSection } from './components/MainContent'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
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
