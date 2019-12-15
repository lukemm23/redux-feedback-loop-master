import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
//REDUX CONNECT
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
                <form noValidate autoComplete="off">
                    <FormLabel component="legend">Comments?</FormLabel>
                    <br></br>
                    <TextField
                        id="standard-basic"
                        label="Enter Comments Here"
                        type="text"
                        onChange={(event) => this.changeField(event, 'comments')}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.submit}>Next</Button>
                </form>
            </div>
        );
    }
}

export default connect()(Comments);