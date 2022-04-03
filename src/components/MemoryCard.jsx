import React, { Component } from 'react'
import './MemoryCard.css';


class MemoryCard extends React.Component {
    render() {

        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={!this.props.isFlipped ? "MemoryCardInner" : "MemoryCardInner flipped" }>
            <div className="MemoryCardBack">
                <img className="image" src="https://media.istockphoto.com/vectors/mountain-landscape-cartoon-mountain-landscape-with-green-meadows-and-vector-id1070540902?k=20&m=1070540902&s=170667a&w=0&h=JuOwuUtymnI8Mr1ECdMXDzgg1qi_CKkXtIbdzIYBLow=">
                </img>
            </div>
            <div className="MemoryCardFront">{this.props.symbol}
            </div>
            </div>
         </div>
        ) 
    }
} 

export default MemoryCard;