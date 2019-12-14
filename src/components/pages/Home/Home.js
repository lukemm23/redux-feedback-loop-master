import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';

class Home extends Component {

    startFeedback = (event) => {
        // navigate to start feedbacks
        this.props.history.push('/feeling');
      }

    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br />
            <Button variant="contained" color="primary" onClick={this.startFeedback}>Leave New Feedback</Button>
          </div>
        );
    }
}


export default Home;