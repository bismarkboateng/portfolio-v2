import { useState } from "react"

import { MdOutlineMail } from "react-icons/md"
import { IoCallOutline } from "react-icons/io5"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const phone = "+233553597847"
  const emailAddress = "bismarkb609@gmail.com"
  const IconMailailToLink = `mailto:${emailAddress}`
  const callPhone = `tel:${phone}`
  const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.name)}&
    body=${encodeURIComponent(formData.message)}`


  const onFieldChangeHandler = (event) => {
    const { name, value } = event.target
    setFormData(prevData => ({...prevData, [name]: value }))
  }


  return (
    <footer className="w-[90%] md:w-[92%] 2xl:w-[75%] mx-auto mt-24">
      <section className="w-full flex flex-col md:flex-row md:items-start md:gap-7
        lg:gap-14">
        <div className="2xl:w-[50%]">
          <h2 className="text-4xl md:text-[44px] text-[#fefdfb] font-normal
          leading-10 md:leading-[52.8px]">
            Get in touch
          </h2>
          <p className="text-[#7a878d] font-light text-base md:text-lg leading-[22.4px]
            mt-3">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>
          <div className="flex flex-row items-center gap-2 mt-7">

            <i>
              <a href={IconMailailToLink}>
                <MdOutlineMail
                  fontSize={30}
                  className="text-[#7a878d]"
                />
              </a>
            </i>
            <p>bismarkb609@gmail.com</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-7">
            <i>
              <a href={callPhone}>
                <IoCallOutline
                  fontSize={30}
                  className="text-[#7a878d]"
                />
              </a>
            </i>
            <p>+233553597847</p>
          </div>
        </div>

        <div className="2xl:w-[50%]">
          <form className="md:mt-0 mt-7 w-full flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="mb-1">Name</label>
              <input
                className="bg-black outline-none border border-green-600
                py-2 pl-2"
                value={formData.name}
                onChange={onFieldChangeHandler}
                name="name"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Email</label>
              <input
                className="bg-black outline-none border border-green-600
                py-2 pl-2"
                value={formData.email}
                onChange={onFieldChangeHandler}
                name="email"
              />
            </div>

            <div className="mb-1">
              <label>Message</label>
              <textarea
                rows={8}
                cols={50}
                className="w-full bg-black outline-none border border-green-600
                pl-2"
                value={formData.message}
                onChange={onFieldChangeHandler}
                name="message"
              />
            </div>

            <a className="bg-[#fefdfb] text-[#000] font-medium rounded-md
            w-[40%] max-w-max py-2 px-2 md:px-3 2xl:w-[20%] cursor-pointer outline-none"
            href={mailToLink}>
              Submit
            </a>
          </form>
        </div>
      </section>

      <section className="mt-20">
        <h1 className="text-3xl font-medium text-center">
          B<span className="text-[#09e85e] font-bold">B</span>
        </h1>

        <div className="flex flex-row items-center justify-center gap-3
        border-b border-[#7a878d] pb-7 mt-8">
          <p className="flex flex-row items-center gap-4">
            <FaTwitter
              fontSize={20}
              className="text-[#7a878d] cursor-pointer"
            />
            <a href={`https://www.linkedin.com/public-profile/settings`}
            target="_blank">
              <FaLinkedin
                fontSize={20}
                className="text-[#7a878d] cursor-pointer"
              />
            </a>
          </p>
        </div>
        <p className="text-[#7a878d] text-sm mt-5">
          &copy;
          Bismark Boateng. All rights reserved.
        </p>
      </section>
    </footer>
  )
}