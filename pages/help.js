import HelpTopSection from "../components/Help/topSectionHelp";
import HelpCommunity from "../components/Help/helpCommunity";
import NewsLetter from "../components/newsletter";

const help = () => {
  return (
    <>
      <HelpTopSection />
      <HelpCommunity />
      <div
        style={{
          marginBottom: "2rem",
        }}
      >
        <NewsLetter />
      </div>
    </>
  );
};

export default help;
