
import { ProjectCard } from ".."
import { projectInfo } from "./project-data"

export default function index() {
  return (
    <section className="w-[90%] md:w-[92%] 2xl:w-[75%] mx-auto mt-24">
      <h2 className="text-4xl text-[#fefdfb] font-normal
       leading-[43.2px]">
        Projects
      </h2>
      <p className="text-[#7a878d] text-base leading-[22.4px]
      font-light mt-5">
        Check out my most recent projects, which range from
        e-commerce applications to a landing pages.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 lg:gap-x-8 md:gap-x-5 gap-y-8">
        {projectInfo.map(item => <ProjectCard key={item.id} item={item} />)}
      </div>
    
    </section>
  )
}
