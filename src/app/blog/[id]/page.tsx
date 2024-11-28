import Image from "next/image";
import React from "react";
import person1 from "../../../../public/person1.jpg";
import socialMedia from "../../../../public/social-media.jpg";

const BlogPost = ({ params }: { params: any }) => {
  return (
    <div>
      <div className="md:flex items-center justify-center gap-10 pb-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Social Media</h1>
          <p className="text-lg py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A id
            recusandae modi earum dolores soluta nisi perspiciatis, iste
            distinctio nemo consequuntur sed, et placeat qui? Enim temporibus
            quam velit sequi.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={person1}
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={socialMedia}
            alt=""
            className="w-full h-[240px] rounded-lg"
          />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius
          excepturi tempora voluptate iste modi veritatis consequatur recusandae
          nesciunt perferendis? Ducimus dolorem dolor, esse officiis eligendi
          ratione saepe magnam assumenda.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          pariatur repudiandae quod!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          obcaecati saepe sunt sint ipsam rem praesentium non iusto. Nesciunt
          et, vel tenetur velit corrupti aliquam corporis sequi dolorem unde
          consequatur quam similique ullam, dolor quis tempore cum veritatis
          iure minus.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
