import NewsLetterStyle from '../styles/NewsLetter.module.css'

const newsletter = () => {
  return <div>
    <div className={NewsLetterStyle.Section}>
      <p className={NewsLetterStyle.TopPara}> Dont Take Our Word For It</p>
      <h1>What are you waiting for? Start building today!</h1>
      <p>Start your application today in minutes. Build alone or in a team with no limit on number of users. </p>
     <button className={NewsLetterStyle.BtnOne}>Sign Up - Free Trial</button>
    </div>
  </div>;
};

export default newsletter;
