import React from 'react';
import './index.css';
import data from "./data.json";
import Products from "./container/products";
import Filter from './container/Filter';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products : data.products,
      size : "",
      sort : ""
    }
  }
  sortProducts(sort){

  }
  filterProducts(size){

  }
  render(){
    return (
      <div className="grid-container">
              <header>
                <a href= "/"> FLOWERS</a>
              </header>
              <main>
                <div className ="content">
                
                  <div className="main">
                  <Filter count = {this.state.products.length}></Filter> 
                  <Products 
                  products ={this.state.products}
                   size ={this.state.size}
                   sort = {this.state.sort}
                   filterProducts ={this.filterProducts}
                   sortProducts ={this.sortProducts}
                  >
                  </Products ></div>
                  <div className ="sidebar">sidebar</div>
                </div>
              </main>
             <footer>
              FLOWERS
             </footer>
            </div>
    );
  }
  
}

export default App;
