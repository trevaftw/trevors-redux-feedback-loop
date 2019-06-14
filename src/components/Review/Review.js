import React, { Component } from 'react';
//to run dispatch need to connect to the store
import { connect } from 'react-redux';
//to link to first page, import link component
// import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {

    render() {
        return (
            <>
                Review Your Feeback: <br /> <br />

                Feelings: ~not real code~this.props.reduxstate.Feelings<br />
                Understanding: ~not real code~this.props.reduxstate.Understanding<br />
                Support: ~not real code~this.props.reduxstate.Support<br />
                Comments: ~not real code~this.props.reduxstate.Comments<br />
                <button>Incomplete/Submit. This will be a ternary based on which page this appears</button>
            </>
        )
    }
}

export default connect()(Review);