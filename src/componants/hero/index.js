import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <section className="bg-black">
      <div className="lg:flex  h-screen  container">
        <div className="lg:w-1/2 flex justify-center">
          <Image src={"/top.svg"} height={600} width={600} />
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image src={"/handshake.svg"} height={600} width={600} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
