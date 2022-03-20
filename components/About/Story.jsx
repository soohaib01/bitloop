import StoryStyles from "../../styles/About/Story.module.css"

const Story = () => {
  return (
    <div>
        <div className={StoryStyles.Parent}>
  <h1 className={StoryStyles.Heading}>Hello</h1>
   <div className={StoryStyles.Content}>
  <p>The founding team struggled for many years across many tech companies with the same issue: deploying new features, improving existing ones or launching new services or products is complex, requires multiple alignments between stakeholders, takes forever to be deployed and ends up being very expensive. In essence, technical debt and legacy issues quickly catch up with any tech company, reducing innovation, creativity and time to market, as well as reducing the attractiveness of the job itself.</p>
   </div>
   <div className={StoryStyles.ContentBreaker}>
 <p>Bitloops was created to solve this particular issue and allow developers to do what they do best: develop creative and innovative technical solutions to any type of problem, and being able to do so quicker, cheaper and better aligned with business users.</p>
   </div>
        </div>
    </div>
  )
}

export default Story