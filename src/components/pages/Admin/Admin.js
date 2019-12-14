import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';
// MATERIAL-UI
import Button from '@material-ui/core/Button';

class Admin extends Component {

    componentDidMount() { // react Component method
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/feedback'
        })
            .then((response) => {
                console.log(response.data);
                this.props.dispatch({
                    type: 'GET_FEEDBACK',
                    payload: response.data,
                })
            })
            .catch((error) => {
                console.warn(error);
            })
    }

    deleteFB = (event, id) => {
        axios({
            method: 'DELETE',
            url: '/api/feedback/' + id
        })
            .then((response) => {
                console.log(response);
                this.getFeedback();
            })
            .catch((error) => {
                console.warn(error);
            })
    }

    render() {
        const feedbackArr = this.props.store.feedbackReducer.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.feeling}</td>
                    <td>{item.understanding}</td>
                    <td>{item.support}</td>
                    <td>{item.comments}</td>
                    <td>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={(event)=>this.deleteFB(event, item.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h1>Feedback Results</h1>
                <table className="App">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbackArr}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Admin);