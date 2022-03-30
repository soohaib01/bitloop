import TopSection from "../components/Faq/topSection";
import Tabs from "../components/Faq/Tabs";
import Action from "../components/newsletter";
import Head from "next/head";

const faq = () => {
  return (
    <>
      <Head>
        <title>Bitloop | Pricing Faqs</title>
      </Head>
      <TopSection />
      {/* This is the component of tabs  but tab is a nested components view FAQ */}
      <Tabs />
      {/* Newletter Action component View In Components */}
      <Action />
    </>
  );
};

export default faq;
