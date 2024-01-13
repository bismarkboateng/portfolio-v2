import { createPortal } from "react-dom"
import FileSaver from "file-saver"
import { IoCloseOutline } from "react-icons/io5"


import { Button } from ".."
import { Resume } from "../../assets"

export default function index(props) {
  
  const linkStyles = `font-inter text-base text-[#7a878d]
  leading-6 font-light cursor-pointer`

  const onGetCvHandler = () => {
    FileSaver.saveAs(Resume, "resume.pdf")
  }


  return createPortal(
    <section className="fixed lg:hidden z-[1000] top-0 right-0
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
          <li className={linkStyles} onClick={props.refHandlers.scrollToTech}>Tech Stack</li>
          <li className={linkStyles} onClick={props.refHandlers.scrollToProjects}>Projects</li>
          <li className={linkStyles} onClick={props.refHandlers.scrollToArticles}>Articles</li>
          <li className={linkStyles} onClick={props.refHandlers.scrollToFaq}>FAQs</li>
        </ul>
        <Button className="text-[#000] text-center bg-[#fefdfb]
          rounded cursor-pointer font-medium py-2 px-4 outline-none
          border-none w-full"
          onClick={onGetCvHandler}  
        >
          Get CV
        </Button>
      </section>

    </section>,
    document.getElementById("sidebar")
  )
}