import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contactImg from "../../../public/contact.png";
import Button from "@/components/primary-button/Button";
const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-7xl mb-10 text-center">Let's keep in touch</h1>
        <div className="flex items-center gap-10">
          <div className="w-1/2 relative">
            <Image src={contactImg} alt="Contact-image" className="h-[500px]" />
          </div>
          <form action="post" className="w-1/2 flex flex-col gap-6">
            <input
              type="text"
              placeholder="name"
              className="p-4 bg-transparent  outline-none text-gray-100  border border-2 border-gray-100 font-semibold text-lg"
            />
            <input
              type="text"
              placeholder="email"
              className="p-4 bg-transparent  outline-none text-gray-100 border border-2 border-gray-100 font-semibold text-lg"
            />
            <textarea
              className="p-4 bg-transparent  outline-none text-gray-100  border border-2 border-gray-100 font-semibold text-lg"
              name=""
              id=""
              placeholder="message"
              cols={30}
              rows={10}
            ></textarea>
            <Button url="#" name="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
