import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
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
        this.props.dispatch({
            type: 'ADD_FEELING',
            payload: this.state,
        });

        this.props.history.push('/understanding');
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
                <label> Feeling? "Insert number from 1-5"
            <input type="number" onChange={(event) => this.changeField(event, 'feeling')} />
                </label>
                <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>
            </div>
        );
    }
}

export default connect()(Feeling);