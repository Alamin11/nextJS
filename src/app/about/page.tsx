import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutImg from "../../../public/Meeting-bro.png";
import Button from "@/components/primary-button/Button";
const About = () => {
  return (
    <>
      <div className="">
        <div className="w-full  relative  border border-rose-500">
          <Image
            src={aboutImg}
            alt="meeting image"
            className="object-cover grayscale border-red h-[20rem]"
          />
          <div className="absolute bottom-[20px] left-[20px] bg-green-300 p-1 text-white backdrop-blur-md">
            <h1 className="font-bold text-xl">Digital StroyTeller</h1>
            <h2 className="text-lg font-semibold">
              Handcrafting award wining digital experiences
            </h2>
          </div>
        </div>
        <div className="my-10 flex gap-10">
          <div className="">
            <h1 className="font-bold text-2xl">Who are we ?</h1>
            <p className="text-base py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              eum corporis. Laudantium laboriosam tempore rerum est dolor,
              pariatur numquam recusandae!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              ea nobis iste voluptatibus dolor tempora natus eaque hic corporis
              maiores!
              <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sed?
            </p>
          </div>

          <div className="">
            <h1 className="font-bold text-2xl">Who are we ?</h1>
            <p className="text-base py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
              eum corporis. Laudantium laboriosam tempore rerum est dolor,
              pariatur numquam recusandae!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              ea nobis iste voluptatibus dolor tempora natus eaque hic corporis
              maiores!
              <br /> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
              sed?
            </p>
            <Button url="contact" name="Contact us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
