import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     alphabetical: this.props.alphabetical,
  //     numerical: this.props.numerical
  //   }
  // }

  // setNumerical = () => {
  //   this.setState({
  //     alphabetical: null,
  //     numerical: true
  //   })
  // }
  // setAlphabetical = () => {
  //   this.setState({
  //     alphabetical: true,
  //     numerical: null
  //   })
  // }

  // swap = () => {
  //   this.setState()
  // }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.props.filterStocks} sortName={this.props.sortName} sortPrice={this.props.sortPrice} alphabetical={this.props.alphabetical} numerical={this.props.numerical} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.props.forsale} buy={this.props.buy} />}

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.props.bought} sell={this.props.sell} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
