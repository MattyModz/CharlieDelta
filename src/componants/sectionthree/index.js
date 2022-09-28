import React from "react";
import Image from "next/image";
function Sectionthree() {
  return (
    <div className=" bg-black h-full px-8 ">
      <div className="h-full container">
        <div className="lg:flex justify-center">
          <div className="lg:w-1/2">
            <div className="flex justify-center ">
              <Image src={"/s3/head.svg"} height={350} width={450} />
            </div>

            <div className="flex justify-center">
              <Image src={"/s3/sub.svg"} height={300} width={500} />
            </div>
            <div className="flex justify-center">
              <Image src={"/s3/para.svg"} height={300} width={500} />
            </div>
          </div>
          <div className="lg:w-1/2 px-8 grid items-center">
            {" "}
            <div className="flex justify-center">
              <Image src={"/s3/craig.svg"} height={600} width={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionthree;
