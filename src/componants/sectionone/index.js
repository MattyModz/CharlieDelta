import React from "react";
// import Card from "./card";
import Link from "next/link";
import Image from "next/image";
function Sectionone() {
  return (
    <section className="bg-black ">
      <div className="h-full container">
        <div className="flex ">
          <div className="lg:w-1/2 py-8">
            <div className="lg:flex justify-center px-4  ">
              {" "}
              <Image src={"/CD.svg"} height={300} width={600} />
            </div>
            <div className="flex justify-center px-8 ">
              {" "}
              <Image src={"/sub.svg"} height={150} width={600} />
            </div>

            <div className="py-4"> </div>
          </div>
          <div className="lg:w-1/2 py-16 flex justify-start sm:block hidden">
            {" "}
            <Image src={"/squiggle.svg"} height={350} width={350} />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <Image src={"/sub2.svg"} height={100} width={400} />
      </div>
      <div className="container text-white text-2xl  ">
        <div className=""></div>
        <div className="lg:flex gap-24 py-4 px-8 z-50">
          <div className="lg:w-1/3 p-16 mb-8 bg-gradient-to-b rounded-xl from-[#F08E5A] to-[#FA5245]">
            <a href={"https://www.mycontentpal.com"} passHref>
              <div className="flex justify-center">
                <Image src={"/mcp.svg"} height={250} width={250} />
              </div>
            </a>
            <div className="flex justify-center">
              {" "}
              <Image src={"/s2/MCP.svg"} height={250} width={250} />
            </div>
          </div>

          <div className="lg:w-1/3 mb-8 rounded-xl p-16 bg-gradient-to-b rounded-xl from-[#DD9CCE] to-[#B865D3]">
            {" "}
            <a href={"https://link-city.co"} passHref>
              <div className="flex justify-center">
                <Image src={"/lc.svg"} height={250} width={250} />
              </div>
            </a>
            <div className="flex justify-center">
              {" "}
              <Image src={"/s2/LC.svg"} height={250} width={250} />
            </div>
          </div>
          <div className="lg:w-1/3 mb-8 rounded-xl p-16 bg-gradient-to-b from-[#8C2ADA] to-[#120940]">
            {" "}
            <a href={"https://seoforhire.co"} passHref>
              <div className="flex justify-center">
                <Image src={"/s4h.svg"} height={250} width={250} />
              </div>
            </a>
            <div className="flex justify-center">
              {" "}
              <Image src={"/s2/SFH.svg"} height={250} width={250} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
