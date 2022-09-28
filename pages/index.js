import Hero from "../src/componants/hero";
import Sectionone from "../src/componants/sectionone";
import Sectiontwo from "../src/componants/Sectiontwo";
import Sectionthree from "../src/componants/sectionthree";
import Head from "next/head";
import Modal from "../src/componants/Modals/Modal";
import { useState, useEffect } from "react";
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  }, []);
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content="https://gleam.io/ZQXZ2/win-free-brightonseo-tickets"
        />
        <meta property="og:title" content="Win free BrigtonSEO tickets!" />
        <meta
          property="og:image"
          content="https://user-assets.out.sh/user-assets/1831342/GZoF5R4iD3QdtJ82/whatsapp-image-2022-09-27-at-1.12.28-pm.jpeg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content="https://user-assets.out.sh/user-assets/1831342/GZoF5R4iD3QdtJ82/whatsapp-image-2022-09-27-at-1.12.28-pm.jpeg"
        />
        <meta property="fb:app_id" content="152351391599356" />
        <meta
          property="og:description"
          content="Here's a chance to win free BrightonSEO tickets that are valued at £300. 4000+ talented SEO's attend Brighton each year. It's a great way to network with fellow SEO's and learn more the industry."
        />
      </Head>
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />

      <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
    </>
  );
}
