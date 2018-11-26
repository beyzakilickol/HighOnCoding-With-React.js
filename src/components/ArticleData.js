import React, { Component } from 'react';

class ArticleData extends Component {

  render() {
    return (
      <div className="container">
          <div className="column">
            <div className="col-sm">
              <h3 className="watchkit" >{this.props.title}</h3>
              <p className="paragraph">
                {this.props.paragraph}
              </p>
            </div>
            <div className="col-sm likes">
            {this.props.likes}
          </div>
          </div>
          </div>
    )
  }

}

// exporting Greeting component so that it can be imported
// by other components
export default ArticleData
