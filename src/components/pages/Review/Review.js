import React, { Component } from 'react';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
//REDUX
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Review extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <h1> Review Your Feedback</h1>
            <p>Feelings:{this.props.store.formReducer.feeling}</p>
            <p>Understanding:{this.props.store.formReducer.understanding}</p>
            <p>Support:{this.props.store.formReducer.support}</p>
            <p>Comments:{this.props.store.formReducer.comments}</p>
            <br />
            <Button variant="contained" color="primary">Submit</Button>
          </div>
        );
    }
}

export default connect(mapStoreToProps)(Review);