import React from 'react';
import './index.css';
import data from "./data.json";
import Products from "./container/products";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products : data.products,
      size : "",
      sort : ""
    }
  }
  render(){
    return (
      <div className="grid-container">
              <header>
                <a href= "/"> FLOWERS</a>
              </header>
              <main>
                <div className ="content">
                  <div className="main"> <Products products ={this.state.products}>
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
