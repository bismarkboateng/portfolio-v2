import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import {
  Navbar, HeroSection,
  Sidebar, Technology
} from "./components"


export default function App() {
  const [isClicked, setIsClicked] = useState(false)

  const onMenuClickHandler = () => {
    setIsClicked(prevState => !prevState)
    console.log("clicked")
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
      { isClicked && <Sidebar onMenuClickHandler={onMenuClickHandler} /> }
      <Navbar onMenuClickHandler={onMenuClickHandler} />
      <HeroSection />
      <Technology />
    </main>
  )
}
