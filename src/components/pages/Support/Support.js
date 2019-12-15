import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
//REDUX CONNECT
import { connect } from 'react-redux';

class Support extends Component {

    // local support tracker
    state = {
        support: '',
    }

    //input tracker for support
    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    //dispatch support to formReducer
    submit = (event) => {
        if (!this.state.support) {
            alert('please enter rating');
        } else {
            this.props.dispatch({
                type: 'ADD_SUPPORT',
                payload: this.state,
            });
            this.props.history.push('/comments');
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How well are you being supported?</h1>
                <br />
                <form noValidate autoComplete="off">
                    <FormLabel component="legend">Support?</FormLabel>
                    <br></br>
                    <TextField
                        id="standard-basic"
                        label="Enter Rating 1-5"
                        type="number"
                        onChange={(event) => this.changeField(event, 'support')}
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

export default connect()(Support);