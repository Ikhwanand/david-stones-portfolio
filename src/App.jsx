import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skill from "./components/Skill"
import Testimonials from "./components/Testimonials"


function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relative z-10">
        <Navbar/>
        <Hero/>
        <Project/>
        <Skill/>
        <Experience/>
        <Education/>
        <Testimonials/>
        <Contact/>
      </div>
    </main>
  )
}

export default App
