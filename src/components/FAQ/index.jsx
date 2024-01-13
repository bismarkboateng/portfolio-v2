import { useState } from "react"
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const state = {
  stack: false,
  availability: false,
  team: false,
}


const ArrowComponent = ({click}) => {
  return (
    <i>{ click
      ? 
      <MdKeyboardArrowUp
        fontSize={30}
        className="text-[#6e7e85]"
        onClick={() => onClickHandler("stack")}
      />
      :
      <MdOutlineKeyboardArrowDown
        fontSize={30}
        className="text-[#6e7e85]"
        onClick={() => onClickHandler("stack")}
      />
      }
     </i>
  )
}

export default function index() {
  const [isClicked, setIsClicked] = useState(state)

  const onClickHandler = (clicked) => {
    setIsClicked({...state, [clicked]: true })
  }

  return (
    <section className="w-[90%] md:w-[92%] 2xl:w-[75%] mx-auto mt-24">
      <h2 className="text-[#fefdfb] text-4xl leading-[43.2px]
      font-normal">
        FAQs
      </h2>
      <p className="text-[#7a878d] font-light text-base md:text-lg leading-[22.4px]
        mt-5">
        What you might want to know about me.
      </p>

      <section>

       <div className="border-b border-green-600 pb-4 cursor-pointer">
        <div className="flex flex-row items-center justify-between mt-3"
          onClick={() => onClickHandler("stack")}>
          <p className="text-base md:text-2xl text-[#fefdfb] font-light leading-6">
            What technology stack do you use?
          </p>
          <ArrowComponent click={isClicked.stack} />
        </div>
        {isClicked.stack && (
          <p className="text-[#7a878d] font-light text-base md:text-lg leading-[22.4px]
           lg:leading-[33.6px] mt-1">
            The key technologies I utilize on a daily basis are javaScript, React, and Next.
            However, I feel that programming languages are tools for solving problems,
            so I don't define myself by a single framework because I can change dependent
            on the technology required for the task.
          </p>
        )}
       </div>

       <div className="mt-5 border-b border-green-600 pb-4 cursor-pointer">
        <div className="flex flex-row items-center justify-between mt-3"
          onClick={() => onClickHandler("availability")}>
          <p className="text-base md:text-2xl text-[#fefdfb] font-light leading-6">
            What is your current availability?
          </p>
          <ArrowComponent click={isClicked.availability} />
        </div>
        {isClicked.availability && (
          <p className="text-[#7a878d] font-light text-base md:text-lg leading-[22.4px]
           lg:leading-[33.6px] mt-1">
             I am currently available for frontend roles.
          </p>
        )}
       </div>

       <div className="mt-5 cursor-pointer">
        <div className="flex flex-row items-center justify-between mt-3"
          onClick={() => onClickHandler("team")}>
          <p className="text-base md:text-2xl text-[#fefdfb] font-light leading-6">
            Do you work alone or with a team?
          </p>
          <ArrowComponent click={isClicked.team} />
        </div>
        {isClicked.team && (
          <p className="text-[#7a878d] font-light text-base md:text-lg leading-[22.4px]
           lg:leading-[33.6px] mt-1">
            I am a good team player, yet I can also work independently if necessary.
          </p>
        )}
       </div>

      </section>
    </section>
  )
}
