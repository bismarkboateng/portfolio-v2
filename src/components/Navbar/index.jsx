// import { MdMenu } from "react-icons/md"
import { IoMenuOutline } from "react-icons/io5"

import { Navlinks } from ".."


export default function index() {
  return (
    <nav className="w-full py-3">
      <section className="w-[90%] md:w-[88%] mx-auto flex flex-row items-center
     justify-between">
        <h1 className="text-3xl font-medium">
          Dev<span className="text-[#09e85e] font-bold">Folio</span>
        </h1>
        <IoMenuOutline
          className="text-[#09e85e] lg:hidden"
          fontSize={40}
       />
       <Navlinks />
      </section>
    </nav>
  )
}
