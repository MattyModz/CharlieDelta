import React from "react";
import Image from "next/image";
import Link from "next/link";
function Indexcredits() {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center tails-selected-element container max-w-7xl bg-orange-400 rounded-xl p-8 m-8">
        <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-10 lg:w-3/5">
          <span className="text-xs uppercase tracking-wider font-medium text-white">
            Thanks for getting in touch!
          </span>
          <h2 className="font-semibold text-4xl sm:text-4xl md:text-5xl xl:text-6xl mt-3">
            Sign up today
            <br className="md:block hidden" /> and you&apos;ll receive $100 free
            credit
          </h2>

          <div className=" py-4">
            <Link href="https://mycontentpal.spp.io/signup/" passHref>
              <button className="font-inter bg-black/5 rounded-xl text-2xl text-white py-4 p-4">
                Free $100 Content Credit
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-grow w-full  relative items-center justify-center lg:justify-end">
          <Image src="/mascot.svg" width={800} height={800} />
        </div>
      </div>
    </>
  );
}

export default Indexcredits;
