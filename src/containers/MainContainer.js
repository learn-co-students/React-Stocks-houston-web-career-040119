import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const STOCKS_URL = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      sortedStocks: []
    }
  }

  alphabatize = (e) => {
    let sortedStocks = e.target.checked ? this.state.sortedStocks.sort((a,b)=> {return (a.name > b.name) ? 0 : -1}) : this.state.stocks
    this.setState({
      sortedStocks: sortedStocks
    })
  }

  priceSort = (e) => {
    let sortedStocks = e.target.checked ? this.state.sortedStocks.sort((a,b)=>{return a.price > b.price ? 0 : -1}) : this.state.stocks
    this.setState({
      sortedStocks: sortedStocks
    })
  }

  filter = (e) => {
    let sortedStocks = this.state.stocks.filter((stock)=>{return stock.type === e.target.value})
    this.setState({
      sortedStocks: sortedStocks
    })
  }

  buyStock = (e) => {
    let id = e.target.id === "" ? e.target.parentElement.id : e.target.id
    let portfolio = [...this.state.portfolio, this.state.stocks.find((stock)=>stock.id === parseInt(id,10))]
    this.setState({
      portfolio: portfolio
    })
  }

  sellStock = (e) => {
    let id = e.target.id === "" ? e.target.parentElement.id : e.target.id
    let portfolio = this.state.portfolio.filter((stock) => {return stock.id !== parseInt(id,10)})
    this.setState({
      portfolio: portfolio
    })
  }

  componentDidMount() {
    fetch(STOCKS_URL)
      .then((res) => {return res.json()})
      .then(data =>
        this.setState({
          stocks: data,
          sortedStocks: data
        })
      )
  }

  render() {
    return (
      <div>
        <SearchBar alph={this.alphabatize} price={this.priceSort} filter={this.filter}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.sortedStocks} buyStock={this.buyStock}/>
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolio} sellStock={this.sellStock}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
