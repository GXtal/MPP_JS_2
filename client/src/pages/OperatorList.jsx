import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Operator from '../partials/Operator'
import OperatorModel from '../models/operator-model';

class OperatorList extends React.Component {

    state =
        {
            operators: [],
        };

    componentDidMount() {
        axios.get("/api/operators/getAll").then(
            response => {
                this.setState(() => {

                    return { operators: response.data };
                })
            }
        )
    }

    createNewOperator=()=>
    {
        axios.post('/api/operators/add').then(
            response => {
                this.setState(() => {

                    return { operators: response.data };
                })
            }
        )
    }

    render() {
        return (
            <div>
                <button className='nice-button' onClick={this.createNewOperator}>Add</button>
                {this.state.operators.map((operator) => {
                    return <Operator key={operator.id} op={operator}/>
                })}
            </div>
        );
    }
}

export default OperatorList;