import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
//REDUX CONNECT
import { connect } from 'react-redux';

class Understanding extends Component {

    // local understanding tracker
    state = {
        understanding: '',
    }

    //input tracker for understanding 
    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    //dispatch understanding to formReducer
    submit = (event) => {
        if (!this.state.understanding) {
            alert('please enter rating');
        } else {
            this.props.dispatch({
                type: 'ADD_UNDERSTANDING',
                payload: this.state,
            });
            this.props.history.push('/support');
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How well are you understanding the content?</h1>
                <br />
                <form noValidate autoComplete="off">
                    <FormLabel component="legend">Understanding?</FormLabel>
                    <br></br>
                    <TextField
                        id="standard-basic"
                        label="Enter Rating 1-5"
                        type="number"
                        onChange={(event) => this.changeField(event, 'understanding')}
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

export default connect()(Understanding);

