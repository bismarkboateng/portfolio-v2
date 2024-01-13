
import { Tag } from ".."

export default function index({ item }) {
  return (
    <section className="border border-green-400 pb-1" data-aos="fade-up">
     <div className="w-full h-[252px]">
      <img
        src={item.image}
        className="w-full h-full object-cover"
      />
     </div>
     <div className="w-[87%] mx-auto
      mt-5">
      <h3 className="text-lg text-[#fefdfb] leading-[21.6px] mb-3">
        {item.Title}
      </h3>
      <p className="text-base text-[#7a878d] font-light leading-[22.4px]
       mb-3">
        {item.description}
      </p>
      <div className="flex flex-row items-center gap-2 mb-3">
        {item.tech.map(index => <Tag key={index}>{index}</Tag>)}
      </div>

      <div>
        <a href={item.repoLink} target="_blank" className="mr-4 underline text-sm">
          View Code
        </a>
        <a href={item.liveLink} target="_blank" className="underline text-sm ">
          Live app
        </a>
      </div>
     </div>

    </section>
  )
}
