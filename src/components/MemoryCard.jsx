import React, { Component } from 'react'
import './MemoryCard.css';


class MemoryCardBack extends React.Component {
    constructor() {
        super();
        this.state = { isFlipped: false };
    }

   clickHandler() {
       this.setState({isFlipped: !this.state.isFlipped})
   }
    

    render() {

        return (
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={!this.state.isFlipped ? "MemoryCardInner" : "MemoryCardInner flipped" }>
            <div className="MemoryCardBack">
                <img className="image" src="https://media.istockphoto.com/vectors/mountain-landscape-cartoon-mountain-landscape-with-green-meadows-and-vector-id1070540902?k=20&m=1070540902&s=170667a&w=0&h=JuOwuUtymnI8Mr1ECdMXDzgg1qi_CKkXtIbdzIYBLow=">
                </img>
            </div>
            <div className="MemoryCardFront">
                ∆
            </div>
            </div>
         </div>
        ) 
    }
} 

export default MemoryCardBack;