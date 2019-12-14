import React, { Component } from 'react';
import axios from 'axios';
// MATERIAL-UI
import Button from '@material-ui/core/Button';
//REDUX
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Review extends Component {

  //submit event handler calls axios POST new feedback to DB
  submit = () => {
    alert('Click Ok to confirm submit');
    this.postFeedback(this.props.store.formReducer);
  }

  //axios POST 
  postFeedback(newFeedback) {
    axios({
      method: 'POST',
      url: '/api/feedback',
      data: newFeedback
    })
      .then((response) => {
        this.props.history.push('/thankYou');
      })
      .catch((err) => {
        alert('Hey sorry, something went terribly wrong')
        console.log(err);
      });
  }

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
        <Button variant="contained" color="primary" onClick={this.submit}>Submit</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Review);