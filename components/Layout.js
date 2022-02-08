import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Open_Sans/OpenSans-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
