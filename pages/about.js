import StorySection from "../components/About/Story";
import Head from "next/head";
import CreatorSection from "../components/About/Creators";
import Features from "../components/About/Features";
const about = () => {
  return (
    <div>
      <Head>
        <title>About Us | Bitloop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Story Section component  */}
      <StorySection />
      {/* Creators Section component  */}
      <CreatorSection />
      {/* Feature Section Code  */}
      <Features />
    </div>
  );
};

export default about;
