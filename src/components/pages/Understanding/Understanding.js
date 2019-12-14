import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

class Understanding extends Component {

    state = {
        understanding: '',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
        console.log(this.state);
    }

    submit = (event) => {
        this.props.dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: this.state,
        });
        this.props.history.push('/support');
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
                <label> Understanding? "Insert number from 1-5"
            <input type="number" onChange={(event) => this.changeField(event, 'understanding')} />
                </label>
                <Button variant="contained" color="primary" onClick={this.submit}>Next</Button>
            </div>
        );
    }
}

export default connect()(Understanding);