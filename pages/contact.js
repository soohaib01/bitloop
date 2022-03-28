import TopSection from "../components/Contact/topSection";
import Action from "../components/newsletter";
import Head from "next/head";
const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>

      <TopSection />
      <Action />
    </div>
  );
};

export default contact;
