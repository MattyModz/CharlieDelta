import React from "react";
import Image from "next/image";

function Card({ src, text }) {
  return (
    <div className="lg:w-1/3 mb-8 py-4 bg-gradient-to-b rounded-xl from-[#DD9CCE] to-[#B865D3]">
      {" "}
      <div className="flex justify-center">
        <Image src={src} height={150} width={150} />
      </div>
      <p className="text-center px-8  ">{text}</p>
    </div>
  );
}

export default Card;
