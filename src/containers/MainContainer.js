import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar sortPrice={this.props.sortPrice} sortAlphabetically={this.props.sortAlphabetically} sortBy={this.props.sortBy} handleFilter={this.props.handleFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer filter={this.props.filter} toggleStockPurchased={this.props.toggleStockPurchased} data={this.props.data}/>

            </div>
            <div className="col-4">

              <PortfolioContainer toggleStockPurchased={this.props.toggleStockPurchased} data={this.props.data}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
