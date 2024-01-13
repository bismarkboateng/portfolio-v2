import { useEffect, useState, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Navbar, HeroSection,
  Sidebar, Technology,
  Projects, FAQ, Articles,
  Footer
} from "./components"


export default function App() {
  const [isClicked, setIsClicked] = useState(false)

  const techStackRef = useRef(null)
  const projectRef = useRef(null)
  const articlesRef = useRef(null)
  const faqRef = useRef(null)

  const scrollToTech = () => {
    techStackRef.current.scrollIntoView({
      behavior: 'smooth',
    })
    onMenuClickHandler()
  }

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({
      behavior: 'smooth',
    })
    onMenuClickHandler()
  }

  const scrollToArticles = () => {
    articlesRef.current.scrollIntoView({
      behavior: 'smooth',
    })
    onMenuClickHandler()
  }

  const scrollToFaq = () => {
    faqRef.current.scrollIntoView({
      behavior: 'smooth',
    })
    onMenuClickHandler()
  }

  const refHandlers = {
    scrollToTech,
    scrollToProjects,
    scrollToArticles,
    scrollToFaq
  }

  const onMenuClickHandler = () => {
    setIsClicked(prevState => !prevState)
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    })

    AOS.refresh()
  }, [])

  return (
    <main className="font-inter">
      { isClicked && (
        <Sidebar
          refHandlers={refHandlers}
          onMenuClickHandler={onMenuClickHandler}
        />
      ) }
      <Navbar
        onMenuClickHandler={onMenuClickHandler}
        refHandlers={refHandlers}
      />
      <HeroSection />
      <div ref={techStackRef}>
        <Technology />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={articlesRef}>
        <Articles />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
