import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.data.map(
            stock => 
            (( (this.props.filter && (stock.type !== this.props.filter)) ) ? null :
            (stock.purchased ? <Stock stock={stock} toggleStockPurchased={()=>{}}/> : <Stock stock={stock}  toggleStockPurchased={this.props.toggleStockPurchased} />))
          )
        }
      </div>
    );
  }

}

export default StockContainer;
