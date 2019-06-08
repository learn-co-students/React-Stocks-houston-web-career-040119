import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.displayBoughtStocks.map(stock => <Stock stock={stock} tradeStock={this.props.tradeStock}/>)
            //render your portfolio stocks here
          }
      </div>
    );
  }

}

export default PortfolioContainer;
