import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} products</div>
                <div className="filter-sort">
                    {" "}
                    Order <select value = {this.props.size}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-sort">
                    Filter
                    <select>
                        <option value="">All</option>
                        <option value="Red">Red</option>
                        <option value="bule">bule</option>
                        <option value="green">green</option>
                        <option value="pink">pink</option>
                    
                    </select>
                    
                </div>
            </div>
        )
    }
}
