import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const URL = "http://localhost:3000/stocks"

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks:[],
      displaystocks:[],
      isLoading: true,
      myportfolio: []
    }
  }


  componentDidMount(){
    this.getdata()
  }


  getdata = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        stocks: data,
        displaystocks: data,
        isLoading:false
         })
    })
  

  }
  addStock = (stock) => {
    let array = this.state.myportfolio
    array.push(stock)
    this.setState({
      myportfolio: array
    })
  }

removeStock = (removedstock) => {
   console.log("REMOVE STOCK")
   console.log(this.state.myportfolio)
let arr=this.state.myportfolio.filter(stock => stock.id !== removedstock.id)

let sArr = this.state.displaystocks



this.setState({
  myportfolio:arr
})
}

  
  render() {
    
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displaystocks} addStock={this.addStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myportfolio = {this.state.myportfolio} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
