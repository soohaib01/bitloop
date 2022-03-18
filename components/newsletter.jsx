import NewsLetterStyle from '../styles/NewsLetter.module.css'

const newsletter = () => {
  return <div>
    <div className={NewsLetterStyle.Section}>
      <h1>What are you waiting for? Start building today!</h1>
      <p>Start your application today in minutes. Build alone or in a team with no limit on number of users. <br></br> Develop your application in days, not weeks or months. Scale to millions without any infrastructure or database worry.</p>
     <button className={NewsLetterStyle.BtnOne}>Sign Up - Free Trial</button>
    </div>
  </div>;
};

export default newsletter;
