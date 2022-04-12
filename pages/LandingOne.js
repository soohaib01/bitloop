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
import HomeMainSection from '../components/Home/mainsection'
const LandingOne = () => {
  return (
    <div>
      {/* This is section from home page */}
      <HomeMainSection/>
       {/* New Component From Main */}
      {/* <TopSection /> */}
      
      {/* This Section is Creating The Component of NewsLetter box */}
      <SecondSection />
      {/* This section as third is Creating the component of services v-2 */}
      <ThirdSection />
      {/* What We Offer Section */}
      <Offer />
      {/* Code Section */}
            
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
