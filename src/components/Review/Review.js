import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';


class Review extends Component {

    handleNotDone = () => {
        alert('Please move to the next page and finish the feedback')
    }

    handleFinish = () => {
        console.log('finished')
        this.props.history.push('/Five')
        this.props.dispatch({type: 'SUBMISSION_COMPLETE'})
        const feedbackObject = this.props.reduxState.feedbackReducer;
        axios({
            method: 'POST',
            url: '/database',
            data: feedbackObject
        }).then(response => {
            console.log('response', response)
        })

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

                {this.props.location.pathname === '/Feeling' || 
                this.props.location.pathname === '/Understanding' || 
                this.props.location.pathname === '/Support' ?
                    <>
                        <button onClick={this.handleNotDone}>Incomplete</button>
                    </>
                    :
                    <>
                        <button onClick={this.handleFinish}>Submit</button>
                    </>
                }
                <br /> <br />
                {/* <button onClick={this.handleClick}>Incomplete</button> */}
                {/* {JSON.stringify(this.props, null, 2)} */}
                {/* <button onClick={this.handleDone}>Submit</button> */}
            </>
        )
    }
}

const mapReduxStateToProps = (ourEntireStore) => ({
    reduxState: ourEntireStore
})

export default withRouter(connect(mapReduxStateToProps)(Review));