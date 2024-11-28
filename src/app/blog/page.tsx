import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogImg1 from "../../../public/blog-img1.png";
import blogImg2 from "../../../public/blog-img2.png";
import blogImg3 from "../../../public/blog-img3.png";
import blogImg4 from "../../../public/blog-img4.png";

import styles from "./page.module.css";
const Blog = () => {
  return (
    <div className="flex flex-col gap-10 pt-14 pb-20">
      <Link
        href={"blog/testid"}
        className="flex flex-col md:flex-row gap-10 items-center"
      >
        <div>
          <Image
            src={blogImg1}
            alt="social media"
            className="max-w-[220px] min-h-[220px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold py-4">Social Media</h1>
          <p className="text-lg">
            Merits: Enhances connectivity, promotes businesses, spreads
            awareness, and fosters creativity.
            <br />
            Demerits: Encourages misinformation, addiction, privacy issues, and
            negatively impacts mental health due to overexposure or
            cyberbullying.
          </p>
        </div>
      </Link>
      <Link
        href={"blog/testid"}
        className="flex flex-col md:flex-row gap-10 items-center"
      >
        <div>
          <Image
            src={blogImg2}
            alt="social media"
            className="max-w-[220px] min-h-[220px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold py-4">Encrypted Security</h1>
          <p className="text-lg">
            Encrypted security ensures safe data transmission, protecting users
            from cyber threats like hacking and identity theft. It safeguards
            sensitive information, ensures privacy, and fosters trust in online
            communications and transactions.
          </p>
        </div>
      </Link>
      <Link
        href={"blog/testid"}
        className="flex flex-col md:flex-row gap-10 items-center"
      >
        <div>
          <Image
            src={blogImg3}
            alt="social media"
            className="max-w-[220px] min-h-[220px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold py-4">Innovation</h1>
          <p className="text-lg">
            Modern innovation drives progress through advanced technologies like
            AI, renewable energy, and automation. It enhances efficiency, solves
            global challenges, and transforms industries, shaping a sustainable,
            interconnected future.
          </p>
        </div>
      </Link>
      <Link
        href={"/testid"}
        className="flex flex-col md:flex-row gap-10 items-center"
      >
        <div>
          <Image
            src={blogImg4}
            alt="social media"
            className="max-w-[220px] min-h-[220px] object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl font-semibold py-4">Modern Technology</h1>
          <p className="text-lg">
            Modern technology integrates cutting-edge advancements like AI, IoT,
            5G, and renewable energy, revolutionizing communication, healthcare,
            education, and industries while enhancing convenience, efficiency,
            and connectivity in everyday life.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
