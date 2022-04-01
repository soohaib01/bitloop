import TopSection from "../components/LandingOne/topSection";
import SecondSection from "../components/LandingOne/secondSection";
import ThirdSection from "../components/LandingOne/thirdSection";
import Code from "../components/LandingOne/codeSection";
import Community from "../components/LandingOne/community";
import Counter from "../components/LandingOne/counter";
import Tech from "../components/LandingOne/techStack";
const LandingOne = () => {
  return (
    <div>
      <TopSection />
      {/* This Section is Creating The Component of NewsLetter box */}
      <SecondSection />
      {/* This section as third is Creating the component of services v-2 */}
      <ThirdSection />
      {/* Code Section */}
      <Code />
      {/* Community */}
      <Community />
      {/* Counter */}
      <Counter />
      {/* Tech Stacks */}
      <Tech />
    </div>
  );
};

export default LandingOne;
