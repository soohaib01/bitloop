import StorySection from "../components/About/Story";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About Us | Bitloop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StorySection />
    </div>
  );
};

export default about;
