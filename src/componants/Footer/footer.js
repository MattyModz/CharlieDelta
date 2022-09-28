import Image from "next/image";
const Footer = () => {
  return (
    <header className=" bg-black lg:pb-0  ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center p justify-between h-32 lg:h-20">
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
        </nav>
      </div>
    </header>
  );
};

export default Footer;
