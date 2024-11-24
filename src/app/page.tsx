import Image from "next/image";
import heroImg from "../../public/1.png";
export default function Home() {
  return (
    <>
      <div className="flex  items-center gap-12">
        <div className="flex flex-col gap-20">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            velit soluta quasi enim deleniti!
          </p>
          <button>See Our Works</button>
        </div>
        <div className="flex-grow">
          <Image
            src={heroImg}
            alt="hero-image"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </>
  );
}
