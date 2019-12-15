import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
//REDUX CONNECT
import { connect } from 'react-redux';

class Feeling extends Component {

    //local feeling tracker
    state = {
        feeling: '',
    }

    //input tracker for feeling
    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    //dispatch feeling to formReducer
    submit = (event) => {
        if (!this.state.feeling) {
            alert('please enter rating');
        } else {
            this.props.dispatch({
                type: 'ADD_FEELING',
                payload: this.state,
            });

            this.props.history.push('/understanding');
        }
    }



    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <h1>How are you feeling today?</h1>
                <br />
                <form noValidate autoComplete="off">
                    <FormLabel component="legend">Feeling?</FormLabel>
                    <br></br>
                    <TextField
                        id="standard-basic"
                        label="Enter Rating 1-5"
                        type="number"
                        onChange={(event) => this.changeField(event, 'feeling')}
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

export default connect()(Feeling);



