import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Comments extends Component {

    //local state.comments tracker 
    state = {
        comments: '',
    }

    // input setState of comments
    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    //dispatch comments to formReducer
    submit = (event) => {
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state,
        });
        this.props.history.push('/review');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>Any comments you want to leave?</h1>
                <br />
                <label> Comments "Insert number from 1-5"
            <input type="text" onChange={(event) => this.changeField(event, 'comments')} />
                </label>
                <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>
            </div>
        );
    }
}

export default connect()(Comments);