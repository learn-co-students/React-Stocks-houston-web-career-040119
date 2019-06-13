import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
const url = "http://localhost:3000/stocks"

class App extends Component {

  constructor(){
    super();
    this.state = {
      stocks: [],
      loading: true,
      bought: [],
      forsale: [],
      numerical: null,
      alphabetical: null
    }
  }
  setNumerical = () => {
    this.setState({
      alphabetical: null,
      numerical: true
    })
  }
  setAlphabetical = () => {
    this.setState({
      alphabetical: true,
      numerical: null
    })
  }

  buy = (stock) => {
    console.log(stock)
    let arr = this.state.bought
    stock.bought = true
    // debugger
    arr.push(stock)
    this.setState({
      bought: arr
    })

  }

  filterStocks = (desire) => {
    console.log(desire)
    let arr = this.state.stocks.filter(stock => stock.type === desire)
    // debugger
    this.setState({
      forsale: arr
    })
  }

  sell = (stock) => {
    console.log(stock)
    let arr = this.state.bought.filter(bought => {return(bought.id !== stock.id)})
    // debugger
    this.setState({
      bought: arr
    })
  }

  sortName = () => {
    this.setAlphabetical()
    let arr = this.state.forsale.sort((a, b) => {
      if(a.name < b.name) {return -1 }
      if(a.name > b.name) {return 1 }
      
    })
    // debugger
    this.setState({
      forSale: arr
    })

  }

  sortPrice = () => {
    this.setNumerical()
    let arr = this.state.forsale.sort((a, b) => {
      if(a.price < b.price) {return -1; }
      if(a.price > b.price) {return 1 }
    })
    this.setState({
      forSale: arr
    })

  }

  componentDidMount() {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let stocks = data.map(stock => {return{...stock, bought: false}})
      this.setState({
        stocks: stocks, 
        loading: false,
        forsale: stocks,
        bought: []
      })


      // debugger
    })
    

  }
  render() {
    return (
      <div>
        <Header/>
        {this.state.loading? console.log("wait") : <MainContainer filterStocks={this.filterStocks} alphabetical={this.state.alphabetical} numerical={this.state.numerical} buy={this.buy} sell={this.sell} forsale={this.state.forsale} sortName={this.sortName} sortPrice={this.sortPrice} bought={this.state.bought} />}
      </div>
    );
  }
}

export default App;
