import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {

    handleClick = () => {
        console.log('click')
    }

    render() {
        return (
            <>
                <br />
                Review Your Feeback:
                <br /> <br />
                <ul>
                    <li>Feeling: {this.props.reduxState.feedbackReducer.feeling}</li>
                    <li>Understanding: {this.props.reduxState.feedbackReducer.Understanding}</li>
                    <li>Support: {this.props.reduxState.feedbackReducer.Support}</li>
                    <li>Comment: {this.props.reduxState.feedbackReducer.Comments}</li>
                </ul>
                {/* Feelings: ~not real code~this.props.reduxstate.Feelings<br />
                Understanding: ~not real code~this.props.reduxstate.Understanding<br />
                Support: ~not real code~this.props.reduxstate.Support<br />
                Comments: ~not real code~this.props.reduxstate.Comments<br /><br /> */}
                <button onClick={this.handleClick}>Incomplete/Submit. This will be a ternary based on which page this appears</button>
            </>
        )
    }
}

const mapReduxStateToProps = (ourEntireStore) => ({
    reduxState: ourEntireStore
})

export default connect(mapReduxStateToProps)(Review);