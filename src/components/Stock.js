import React from 'react'

const Stock = (props) => (
 
  <div>

    <div className="card" onClick = {() => {props.type === `stockcontainer`? props.addStock(props.stock) : props.removeStock(props.stock) } }>
     
      <div className="card-body">
        <h5 className="card-title">
          {props.stock.name}
          </h5>
        <p className="card-text">
            {props.stock.ticker}<b>
            {props.stock.price}
            </b>
           
            
          </p>
      </div>
    </div>


  </div>
);

export default Stock
