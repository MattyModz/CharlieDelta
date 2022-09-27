import Image from "next/image";
export default function Nav() {
  // const router = useRouter;

  return (
    <>
      <header class="pb-6 bg-black lg:pb-0 p-8">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav class="flex items-center p justify-between h-16 lg:h-20">
            <div class="flex-shrink-0 ">
              <a href="#" title="" class="flex">
                <Image
                  class="w-auto h-8 lg:h-10"
                  src="/Logo.svg"
                  height={100}
                  width={200}
                  alt=""
                />
              </a>
            </div>

            <button
              type="button"
              class="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a
                href="#"
                title=""
                class="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Mission
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Who are we
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Our work
              </a>

              <a
                href="#"
                title=""
                class="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Our clients
              </a>
            </div>

            <a
              href="#"
              title=""
              class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#2EA5E9] border border-transparent rounded-xl lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
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
