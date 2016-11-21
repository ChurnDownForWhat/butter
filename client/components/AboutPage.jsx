import React from 'react'
import * as Bs from 'react-bootstrap'

class AboutPage extends React.Component {
  render () {
    return (
    <div>
      <h1 className= "aboutTitle"> what is churning? </h1>
      <p>
      The good people at <a href="https://www.reddit.com/r/churning/">r/churning</a> have summarized 
      the hobby better than we could so we're including some of their words below.  If your interested in the hobby
      and want to keep up with the latest news, we highly recommend you create a reddit account and join this community.
      </p>
      <br/>
      <p>
      Churning is the practice of signing up for credit cards that offer large signup bonuses in the form of miles, points, 
      or straight cash back for the purpose of obtaining the bonus before cancelling the card. Churning has broadly come to 
      mean simply maximizing credit card and travel rewards.
      </p>
      <h2> The Good </h2>
      <p>
      Churning allows you to gain free hotel nights/airline award flights or even cash back. A lot of people have the opportunity
       to travel at a discounted rate or for free; It also allows us to experience things such as premium hotel suites or first 
       class airline tickets, which normally we wouldn't pay for. For many, opening more credit cards actually increases their 
       credit score and can lead to greater financial responsibility. It can be a fun way to learn how credit and travel works.
      </p>
      <h2> The Bad </h2>
      <p>
        With all of that said, churning is not without its risks. The most important risk to consider is its temporary impact on 
        your credit score. Applying for multiple credit cards at once will reduce your score for a few months; if you will be 
        applying for a mortgage, car loan, job, apartment, or other situation that requires a check of your credit, it is a good
         idea to stop all churning activity as far in advance as possible. Most conservative estimates recommend at least 2 years 
         as "hard pulls" from credit card inquiries will fall off your credit report in 2 years.
        The second thing to remember is that you must be absolutely sure to hit the spending requirement during the bonus period.
         If you are short by even $1.00 you will not receive any bonus points. This is simple to handle with a single card, 
         but multiple cards could require significant planning. Keep track of your spending using an app (Mint, You Need a Budget),
          a spreadsheet, a piece of paper, or even just by calling your credit card company and asking about your progress.
        It is also important to avoid paying interest. While this is good general advice for using credit cards, it is especially
         important for churning. Paying interest for even a single month can significantly reduce, or even completely eliminate, 
         any gains you may have made by obtaining bonus points and miles. Credit card companies are betting that you will mess up
         and have to pay interest, but this can be avoided with proper planning of your churning activities.  Finally, it is 
         important to remember to cancel/downgrade your cards once you are finished with them. Most churnable cards come with an
         annual fee, and so must be cancelled before this fee hits. Note that in some cases, especially for business users, there
          may be enough spending on the card to profit despite the fee. Do the math for your situation to be certain whether it is 
          worth the fee or not.
      </p>
      <p>
        Secondary Impact - Home owners Insurance
        It is important to call out that your homeowners insurance rate can be impacted by your churning activity, even though 
        your credit score remains high. Your insurer regular does a soft pull on your credit, and they may increase your rate if 
        there are a lot of new credit lines, even though your overall credit score and utilization may remain in good standing.
      </p>
    </div>
    )
  }

}

export default AboutPage