import React from "react";
import Image from "next/image";
function Sectionone() {
  return (
    <section className="bg-black">
      <div className="h-full container">
        <div className="flex ">
          <div className="lg:w-1/2 ">
            <div className="lg:flex justify-center px-4">
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
        <div className="lg:flex gap-4 py-8 px-8">
          <div className="lg:w-1/3 mb-8 bg-gradient-to-b rounded-xl from-[#F08E5A] to-[#FA5245]">
            <div className="flex justify-center">
              <Image src={"/mcp.svg"} height={150} width={150} />
            </div>
            <p className="text-center px-12">
              MCP our powerhouse content factory
            </p>
          </div>

          <div className="lg:w-1/3 mb-8 py-4 bg-gradient-to-b rounded-xl from-[#DD9CCE] to-[#B865D3]">
            {" "}
            <div className="flex justify-center">
              <Image src={"/lc.svg"} height={150} width={150} />
            </div>
            <p className="text-center px-12">
              Link City the link engineers for your link building needs
            </p>
          </div>
          <div className="lg:w-1/3 mb-8 bg-gradient-to-b rounded-xl p-4 from-[#8C2ADA] to-[#120940]">
            {" "}
            <div className="flex justify-center">
              <Image src={"/s4h.svg"} height={150} width={150} />
            </div>
            <p className="text-center px-12">
              Seo for Hire will find the perfect candidate to implement your
              content and links for killer SEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
