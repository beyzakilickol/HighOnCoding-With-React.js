import React, { Component } from 'react';

class ArticleContent extends Component {

  render() {
    return (
      <div className="container parent-div">
      <div className="column">
   <div className="col-sm">
     <h2 className="review-title"> Curse of the Current Reviews</h2>

     <p className="paragraph">When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors; price, screenshot, and reviews.
     </p>
   </div>
</div>
 </div>
    )
  }

}

// exporting Greeting component so that it can be imported
// by other components
export default ArticleContent
