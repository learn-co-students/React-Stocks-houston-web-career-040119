import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.myportfolio.map(stock => <Stock stock={stock} removeStock={this.props.removeStock} type={`portfoliocontainer`}/>)}
           
          
      </div>
    );
  }

}

export default PortfolioContainer;
