import Header from "@/components/Header"
import { BrowserRouter as Router} from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App
