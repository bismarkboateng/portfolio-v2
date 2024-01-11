
export default function index(props) {
  return (
    <section className={`bg-[#09e85e] text-[#1b1b1b] rounded
        font-normal py-1 px-2 outline-none border-none ${props.className}`}>
      {props.children}
    </section>
  )
}
