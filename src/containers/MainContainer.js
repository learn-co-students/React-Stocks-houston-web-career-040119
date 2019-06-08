import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state=({
      stocks: [],
      boughtStocks: [],
      displayStocks: [],
      displayBoughtStocks: []
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks: data,
        displayStocks: data
      })
    })
  }

  tradeStock = (e) => {
    let stock = this.state.stocks.find(stock => stock.id == e.target.id)
    if(e.target.parentElement.parentElement.firstElementChild.innerText === 'Stocks') {
      if(!this.state.boughtStocks.includes(stock)) {
        this.state.boughtStocks.push(stock)
        this.setState({
          boughtStocks:this.state.boughtStocks,
          displayBoughtStocks: this.state.boughtStocks
        }) 
      }
    } else {
      this.state.boughtStocks.pop(stock)
      this.setState({
        boughtStocks:this.state.boughtStocks,
        displayBoughtStocks: this.state.boughtStocks
      })
    }
  }

  sortStocks = (e) => {
    if(e.target.value == 'Price' && e.target.checked) {
      let newArrA = this.state.displayStocks.sort((a,b) => a.price - b.price)
      let newArrB = this.state.displayBoughtStocks.sort((a,b) => a.price - b.price)
      this.setState({
        displayStocks: newArrA,
        displayBoughtStocks: newArrB
      })
    } 

    if(e.target.value === 'Alphabetically' && e.target.checked) {
      let newArrA = this.state.displayStocks.sort((a,b) => a.ticker < b.ticker?-1:1)
      let newArrB = this.state.displayBoughtStocks.sort((a,b) => a.ticker < b.ticker?-1:1)
      this.setState({
        displayStocks: newArrA,
        displayBoughtStocks: newArrB
      })
    }

    if(e.target.value === 'Sportswear') {
      let newArrA = this.state.stocks.filter(stock => stock.type === e.target.value)
      let newArrB = this.state.boughtStocks.filter(stock => stock.type === e.target.value)
      this.setState({
        displayStocks: newArrA,
        displayBoughtStocks: newArrB
      })
    }

    if(e.target.value === 'Tech') {
      let newArrA = this.state.stocks.filter(stock => stock.type === e.target.value)
      let newArrB = this.state.boughtStocks.filter(stock => stock.type === e.target.value)
      this.setState({
        displayStocks: newArrA,
        displayBoughtStocks: newArrB
      })
    }

    if(e.target.value === 'Finance') {
      let newArrA = this.state.stocks.filter(stock => stock.type === e.target.value)
      let newArrB = this.state.boughtStocks.filter(stock => stock.type === e.target.value)
      this.setState({
        displayStocks: newArrA,
        displayBoughtStocks: newArrB
      })
    }

    if(e.target.value === 'All') {
      this.setState({
        displayStocks: this.state.stocks,
        displayBoughtStocks: this.state.boughtStocks
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer displayStocks={this.state.displayStocks} tradeStock={this.tradeStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer tradeStock={this.tradeStock} displayBoughtStocks={this.state.displayBoughtStocks}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
