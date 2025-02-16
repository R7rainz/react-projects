import React from 'react'
import { Header, WelcomeSection, Footer, MembersShowcase, EventsSection, ContactSection } from './components/MainContent'
function App() {
  return (
    <div>
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
