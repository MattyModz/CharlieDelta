import Image from "next/image";
export default function Nav() {
  // const router = useRouter;

  return (
    <>
      <header className="pb-6 bg-black lg:pb-0 p-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center p justify-between h-16 lg:h-20">
            <div className="flex-shrink-0 ">
              <a href="#" title="" className="flex">
                <Image
                  className="w-auto h-8 lg:h-10"
                  src="/Logo.svg"
                  height={100}
                  width={200}
                  alt=""
                />
              </a>
            </div>

            {/* <button
              type="button"
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                className="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}

            <div className="hidden lg:items-center lg:ml-auto lg:space-x-10 ">
              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Mission
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Who are we
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Our work
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Our clients
              </a>
            </div>

            <a
              href="https://calendly.com/mcp-link-city-b2r/link-city-30-min-meeting?month=2022-09"
              title=""
              className="items-center justify-center  px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#2EA5E9] border border-transparent rounded-xl lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Work with us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
