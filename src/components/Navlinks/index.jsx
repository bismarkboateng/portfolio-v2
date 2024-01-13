import FileSaver from "file-saver"

import { Button } from ".."
import { Resume } from "../../assets"


const Dot = () => (
  <div className="w-[4px] h-[4px] items-center
    rounded-full bg-[#09e85e]"
    />
  )

export default function index({ refHandlers }) {
  
  const linkStyles = `text-sm lg:text-base text-[#7a878d] cursor-pointer
  font-light leading-5 flex flex-col items-center gap-2`

  const onGetCvHandler = () => {
    FileSaver.saveAs(Resume, "resume.pdf")
  }

  return (
    <section className="hidden lg:flex flex-row items-center
      gap-10">
      <ul className="flex flex-row items-center gap-10">
        <li
          className={linkStyles}
          onClick={refHandlers.scrollToTech}  
        >
          <p>Tech Stack</p>
          <Dot />
        </li>
        <li 
          className={linkStyles}
          onClick={refHandlers.scrollToProjects}
        >
          <p>Projects</p>
          <Dot />
        </li>
        <li
          className={linkStyles}
          onClick={refHandlers.scrollToArticles}
        >
          <p>Articles</p>
          <Dot />
        </li>
        <li
          className={linkStyles}
          onClick={refHandlers.scrollToFaq}
        >
          <p>FAQs</p>
          <Dot />
        </li>
      </ul>

      <Button className="text-[#000] text-center bg-[#fefdfb]
        rounded cursor-pointer font-medium py-2 px-4 outline-none
        border-none"
        onClick={onGetCvHandler}  
      >
        Get CV
      </Button>
    </section>
  )
}
