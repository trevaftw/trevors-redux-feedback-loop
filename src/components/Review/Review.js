import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';

// //Button styling
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';


//-----------figure out how to make work
// const useStyles = makeStyles(theme => ({
//     button: {
//         margin: theme.spacing(1),
//     },
//     leftIcon: {
//         marginRight: theme.spacing(1),
//     },
//     rightIcon: {
//         marginLeft: theme.spacing(1),
//     },
//     iconSmall: {
//         fontSize: 20,
//     },
// }));

// const classes = useStyles();


class Review extends Component {

    handleNotDone = () => {
        alert('Please move to the next page and finish the feedback')
    }

    handleFinish = () => {
        console.log('finished')
        this.props.history.push('/Five')
        this.props.dispatch({ type: 'SUBMISSION_COMPLETE' })
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
                {/* the ternary below will change wil button is displayed and what functionality it has. if the page is the
                feeling, support, or understanding it will display the incomplete button since you can't submit yet. on the other pages
                (the comments page and the review page) you can submit it from those pages (since comments are optional). */}
                {this.props.location.pathname === '/Feeling' ||
                    this.props.location.pathname === '/Understanding' ||
                    this.props.location.pathname === '/Support' ?
                    <>
                        <button onClick={this.handleNotDone}>Incomplete</button>
                    </>
                    :
                    <>
                        {/* <Button variant="contained" color="default" className={classes.button} onClick={this.handleFinish}>
                            Submit
                            <CloudUploadIcon className={classes.rightIcon} />
                        </Button> */}
                        <button onClick={this.handleFinish} >Submit</button>
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

//had to use the withRouter to allow this.props.location because this componnent is inside a component 
export default withRouter(connect(mapReduxStateToProps)(Review));