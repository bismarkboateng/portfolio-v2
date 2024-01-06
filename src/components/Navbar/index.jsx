import { IoMenuOutline } from "react-icons/io5"

import { Navlinks } from ".."


export default function index(props) {


  return (
    <nav className="sticky top-0 left-0 bg-[#1b1b1b] w-full py-3">
      <section className="w-[90%] md:w-[92%] mx-auto flex flex-row items-center
     justify-between">
        <h1 className="text-3xl font-medium">
          B<span className="text-[#09e85e] font-bold">B</span>
        </h1>
        <IoMenuOutline
          onClick={props.onMenuClickHandler}
          className="text-[#09e85e] lg:hidden"
          fontSize={40}
       />
       <Navlinks />
      </section>
    </nav>
  )
}
