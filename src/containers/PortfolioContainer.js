import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.data.map(
              stock => 
              (!stock.purchased ? null : <Stock toggleStockPurchased={this.props.toggleStockPurchased} stock={stock} />)
            )
          }
      </div>
    );
  }

}

export default PortfolioContainer;
