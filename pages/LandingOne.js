import TopSection from "../components/LandingOne/topSection";
import SecondSection from "../components/LandingOne/secondSection";
import ThirdSection from "../components/LandingOne/thirdSection";
import Code from "../components/LandingOne/codeSection";
import Community from "../components/LandingOne/community";
import Counter from "../components/LandingOne/counter";
import Tech from "../components/LandingOne/techStack";
import Offer from "../components/LandingOne/whatWeOffer";
import Table from "../components/LandingOne/Table";
import Feature from '../components/LandingOne/Featurebox'
const LandingOne = () => {
  return (
    <div>
      <TopSection />
      {/* This Section is Creating The Component of NewsLetter box */}
      <SecondSection />
      {/* This section as third is Creating the component of services v-2 */}
      <ThirdSection />
      {/* What We Offer Section */}
      <Offer />
      {/* Code Section */}
       {/* Table formatting Throguht props  */}
      
      {/* <Code /> */}
      {/* Community */}
      <Community />
      {/* Counter */}
      {/* <Counter /> */}
      {/* Tech Stacks */}
      <Table />

      {/* Table Alternative */}
      {/* <Feature/> */}
     
    </div>
  );
};

export default LandingOne;
