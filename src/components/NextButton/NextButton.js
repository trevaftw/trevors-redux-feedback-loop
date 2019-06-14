import React, { Component } from 'react';

class NextButton extends Component{
    handleClick = () => {
        console.log('next button');
    }
    render() {
        return(
            <>
                <button onClick={this.handleClick}>Next</button>
            </>
        )
    }
}

export default NextButton;