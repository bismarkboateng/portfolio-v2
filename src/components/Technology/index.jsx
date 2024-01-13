import { data } from "./Data"

const TechStack = (props) => {
  return (
    <div className="flex flex-row items-center gap-4
    text-[#09e85e]">
      <i>
        {props.icon}
      </i>
      <p className="font-bold md:text-lg">{props.name}</p>
    </div>
  )
}

export default function index() {
  return (
    <section className="w-[90%] md:w-[92%] 2xl:w-[75%] mx-auto mt-32
    flex flex-col md:flex-row md:items-start 2xl:items-center md:justify-between
    md:gap-14">
      <section className="md:w-[50%]">
        <h2 className="text-[#FEFDFB] text-4xl md:text-[44px] leading-[43.2px]
         md:leading-[52.8px] md:font-normal">
          Technologies I work with
        </h2>
        <p className="text-[#7a878d] font-light text-base md:text-lg
        leading-[22.4px] mt-8 2xl:w-[70%]">
          I work with these technologies on a daily basis and have over 1.5 years of expertise with them.
        </p>
      </section>

      <section className="grid grid-cols-2 mt-14 md:mt-0 gap-y-9 md:gap-y-12
        gap-x-7 md:w-[50%]">
        {data.map( item => (
          <TechStack
            key={item.id}
            icon={item.icon}
            name={item.title}
          />
        ))}
      </section>

    </section>
  )
}