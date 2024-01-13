import { createPortal } from "react-dom"
import { IoCloseOutline } from "react-icons/io5"

import { Button } from ".."

export default function index(props) {
  
  const linkStyles = `font-inter text-base text-[#7a878d]
  leading-6 font-light cursor-pointer`

  return createPortal(
    <section className="fixed z-[1000] top-0 right-0
      w-[84%] md:w-[50%] h-[100vh] from-slate-800
      bg-[#1b1b1b]"
      data-aos="fade-right" data-aos-duration="400"
    >
      <p className="flex flex-row justify-end mt-3">
        <i>
          <IoCloseOutline 
            className="text-[#09e85e]"
            onClick={props.onMenuClickHandler}
            fontSize={40}
          />
        </i>
      </p>

      <section className="w-[93%] mx-auto mt-20">
        <ul className="flex flex-col gap-5 items-center mb-7">
          <li className={linkStyles}>Tech Stack</li>
          <li className={linkStyles}>Projects</li>
          <li className={linkStyles}>Testimonials</li>
          <li className={linkStyles}>FAQs</li>
        </ul>
        <Button className="text-[#000] w-[95%] mx-auto text-center bg-[#fefdfb]
          rounded cursor-pointer font-medium py-2 px-4 outline-none
          border-none">
          Get in touch
        </Button>
      </section>

    </section>,
    document.getElementById("sidebar")
  )
}