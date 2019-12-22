import React from 'react'

const Stock = (props) => (
  <div className="card">
    <div className="card-body" id={props.stock.id}>
      <h5 className="card-title">
        {props.stock.name}
      </h5>
      <p className="card-text">
        {props.stock.ticker}: ${props.stock.price}
      </p>
    </div>
    <button id={props.stock.id} onClick={(e) => props.tradeStock(e)}>Trade</button>
  </div>
);

export default Stock
