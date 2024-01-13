
import { profilePic } from "../../assets"

export default function index() {
  return (
    <section>
      <section className="flex flex-col items-center mt-20">
        <div className="w-[120px] lg:w-[150px] 2xl:w-[190px] h-[120px]
          lg:h-[150px] 2xl:h-[190px] rounded-full">
          <img
           src={profilePic}
           alt="profile"
           className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h1 className="mt-5 w-[90%] md:w-[95%] lg:w-[80%] 2xl:w-[50%]
          text-4xl md:text-[52px] lg:text-[80px] text-center
          font-normal leading-[48px] md:leading-[62.4px] lg:leading-[96px]">
            I'm a software developer based in Ghana
            who specializes in web development.
        </h1>
      </section>
    </section>
  )
}
