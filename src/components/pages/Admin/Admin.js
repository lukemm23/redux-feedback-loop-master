import React, { Component } from 'react';
import axios from 'axios';
//REDUX
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Admin extends Component {

    componentDidMount() { // react Component method
        this.getFeedback();
    }

    //axios GET send to redux store feedbackReducer
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

    //axios DELETE
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
        //map feedbackReducer and display all feedback on admin
        const feedbackArr = this.props.store.feedbackReducer.map((item, index) => {
            return (
                <TableRow key={index}>
                    <TableCell align="center">{item.feeling}</TableCell>
                    <TableCell align="center">{item.understanding}</TableCell>
                    <TableCell align="center">{item.support}</TableCell>
                    <TableCell align="center">{item.comments}</TableCell>
                    <TableCell align="center">{item.date}</TableCell>
                    <TableCell align="center">{item.flagged}</TableCell>
                    <TableCell align="center">
                        <Button
                            variant="contained"
                            color="secondary"
                        >
                            Flag
                                </Button>
                    </TableCell>
                    <TableCell align="center">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(event) => this.deleteFB(event, item.id)}>
                            Delete
                                </Button>
                    </TableCell>
                </TableRow>
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
                <Table className="App" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Feeling</TableCell>
                            <TableCell align="center">Comprehension</TableCell>
                            <TableCell align="center">Support</TableCell>
                            <TableCell align="center">Comments</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Flagged</TableCell>
                            <TableCell align="center">Flag</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbackArr}
                    </TableBody>
                </Table>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(Admin);