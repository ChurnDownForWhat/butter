import React from 'react'
import * as Bs from 'react-bootstrap'

class AboutPage extends React.Component {
  render () {
    return (
    <div>
    <Bs.Row className='page-header'>
      <Bs.Col md={11}>What Is Churning?</Bs.Col>
    </Bs.Row>
      <Bs.Row>
        <Bs.Col  mdOffset={1} md={10}>
          <Bs.Panel bsStyle='primary' header={<h1 className="panel-title"> The Gist </h1>} >
            <p className="aboutParagraph">
              The good people at <a href="https://www.reddit.com/r/churning/">r/churning</a> have summarized 
              the hobby better than we could so we're including some of their words below.  If your interested in the hobby
              and want to keep up with the latest news, we highly recommend you create a reddit account and join this community.
            </p>
            <br/>
            <p className="aboutParagraph">
              Churning is the practice of signing up for credit cards that offer large signup bonuses in the form of miles, points, 
              or straight cash back for the purpose of obtaining the bonus before cancelling the card. Churning has broadly come to 
              mean simply maximizing credit card and travel rewards.
            </p>
          </Bs.Panel>
          <Bs.Panel bsStyle='primary' header={<h1 className="panel-title"> The Good </h1>} >
            <p className="aboutParagraph">
              Churning allows you to gain free hotel nights/airline award flights or even cash back. A lot of people have the opportunity
              to travel at a discounted rate or for free; It also allows us to experience things such as premium hotel suites or first 
              class airline tickets, which normally we wouldn't pay for. For many, opening more credit cards actually increases their 
              credit score and can lead to greater financial responsibility. It can be a fun way to learn how credit and travel works.
            </p>
          </Bs.Panel>
          <Bs.Panel bsStyle='primary' header={<h1 className="panel-title"> The Bad </h1>} >
            <p className="aboutParagraph">
              With all of that said, churning is not without its risks. The most important risk to consider is its temporary impact on 
              your credit score. Applying for multiple credit cards at once will reduce your score for a few months; if you will be 
              applying for a mortgage, car loan, job, apartment, or you are in any other situation that requires a check of your credit, 
              it is a good idea to stop all churning activity as far in advance as possible. Most conservative estimates recommend at 
              least 2 years as "hard pulls" from credit card inquiries will fall off your credit report in 2 years.
              <br/>
              <br/>
              The second thing to remember is that you must be absolutely sure to hit the spending requirement during the bonus period.
              If you are short by even $1.00 you will not receive any bonus points. This is simple to handle with a single card, 
              but multiple cards could require significant planning.  It is also important to avoid paying interest. While this is good
              general advice for using credit cards, it is especially important for churning. Paying interest for even a single month can
              significantly reduce, or even completely eliminate, any gains you may have made by obtaining bonus points and miles. 
              Credit card companies are betting that you will mess up and have to pay interest, but this can be avoided with proper 
              planning of your churning activities.
              <br/>
              <br/>
              It is important to remember to cancel/downgrade your cards once you are 
              finished with them. Most churnable cards come with an annual fee, and so must be cancelled before this fee hits. Note that 
              in some cases, especially for business users, there may be enough spending on the card to profit despite the fee. Do the 
              math for your situation to be certain whether it is worth the fee or not.
            </p>
           <h3>  Secondary Impact - Home owners Insurance </h3>
            <p className="aboutParagraph">
              It is important to call out that your homeowners insurance rate can be impacted by your churning activity, even though 
              your credit score remains high. Your insurer regular does a soft pull on your credit, and they may increase your rate if 
              there are a lot of new credit lines, even though your overall credit score and utilization may remain in good standing.
            </p>
          </Bs.Panel>
        </Bs.Col>
      </Bs.Row>


    <Bs.Row className='page-header'>
      <Bs.Col md={11}>What Is Butter?</Bs.Col>
    </Bs.Row>
      <Bs.Row>
        <Bs.Col  mdOffset={1} md={10}>
          <Bs.Panel bsStyle='primary' header={<h1 className="panel-title"> The Gist </h1>} >
            <p className="aboutParagraph">
              Butter is an app we created to easily track credit card information and everything related to churning.  
              Most people use spreadsheets to manage all of the information required to churn successfully, and we want 
              to provide a better user experience.  We've also added features to make Butter a one stop shop for you. You 
              can see your rewards points on the Rewards page and quickly see what category you are accumulating the most 
              points in.  If you're close to a sign-up bonus deadline and you need to meet minimum spend, you can manfacture 
              spend by buying an Amazon eGift Card or anything else you need from Amazon the Amazon page.  Butter was made for
              churners by churners.
              <br/>
              <br/>
              Try it out and tell us what you think!
            </p>
          </Bs.Panel>
        </Bs.Col>
      </Bs.Row>

    </div>
    )
  }

}

export default AboutPage