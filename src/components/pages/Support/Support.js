import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';

class Support extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <h1>How well are you being supported?</h1>
            <br />
            <Button variant="contained" color="primary">Next</Button>
          </div>
        );
    }
}

export default Support;