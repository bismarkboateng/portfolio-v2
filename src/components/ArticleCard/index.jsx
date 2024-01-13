
export default function index({ article }) {

  return (
    <section className="border border-red-300">
     <div className="w-full h-[250px]">
      <img
        src={article?.image}
        alt="blog image"
        className="w-full h-full object-cover"
      />
     </div>
     <div className="w-[87%] mx-auto mt-5">
      <h3 className="text-lg text-[#fefdfb] leading-[21.6px] mb-3
      mt-3">
        {article?.title}
      </h3>
      <p className="text-base text-[#7a878d] font-light leading-[22.4px]
        mb-3">
        {article?.description}
      </p>
      <a href={article?.link} target="_blank" className="underline text-sm
        cursor-pointer mb-3 block">
        Check it out
      </a>
     </div>
    </section>
  )
}