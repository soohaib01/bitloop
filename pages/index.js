import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainSection from "../components/Home/mainsection";
import InfoSection from "../components/Home/info";
import Community from "../components/Home/Community";
import Slack from "../components/Home/slackBanner";
import Accordion from "../components/accordion";
import Actionbox from "../components/newsletter";
import Serviceversion from "../components/Home/ServiceVersionOne";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitloops</title>
        <meta name="description" content="Generated 3Techno Digital" />
        <link rel="icon" href="/bitloopsfavico.png" />
      </Head>

      {/* Main Section Component  */}
      <MainSection />

      <Serviceversion />
      {/* Why Bitloops Using Section  */}
      <InfoSection />
      {/* Home Community Section */}
      <Community />

      {/* Accordian Component */}
      <Accordion />
      {/* Sign Up Action box Before Footer  */}
      <Actionbox />
    </div>
  );
}
