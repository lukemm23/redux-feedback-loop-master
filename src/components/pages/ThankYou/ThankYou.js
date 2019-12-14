import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';

class ThankYou extends Component {

    startFeedback = (event) => {
        // navigate to start feedbacks
        this.props.history.push('/');
      }

    render() {
        return (
            <div className="App">
                  <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br />
            <h1> Thank You</h1>
            <Button variant="contained" color="primary" onClick={this.startFeedback}>Leave New Feedback</Button>
            </div>
        );
    }
}

export default ThankYou;