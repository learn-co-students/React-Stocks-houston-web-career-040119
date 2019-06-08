import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      sortBy: null,
      filter: null
    };
  }

  sortBy = (key) => {
    var data = this.state.data;
    data = data.sort(
      (stock1,stock2) => 
      {
        var a = stock1[key]
        var b = stock2[key]
        if( a < b ) {
          return -1;
        } else {
          return 1;
        }
      }
    );
    console.log(data)
    this.setState( { data : data } );
  }

  sortAlphabetically = () => {
    this.sortBy("ticker");
    this.setState( {sortBy:"ticker"} );
  }

  sortPrice = () => {
    this.sortBy("price");
    this.setState( {sortBy:"price"} );
  }

  handleFilter = (event) => {
    this.setState(
      {filter: event.target.value}
    )
  }

  toggleStockPurchased = (ticker) => {
    console.log(ticker)
    var data = this.state.data;
    var stock = data.find(stock => {return stock.ticker === ticker});
    if(stock) {
      stock.purchased = !stock.purchased
      this.setState( {
        data:data
      }
      )
    }
  }


  componentDidMount() {
    fetch('http://localhost:3000/stocks').then(
      res => res.json() 
    ).then( data => {
        this.setState(
         { data:data }
        ); 
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer sortPrice={this.sortPrice} sortAlphabetically={this.sortAlphabetically} sortBy={this.state.sortBy} handleFilter={this.handleFilter} filter={this.state.filter} toggleStockPurchased={this.toggleStockPurchased} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
