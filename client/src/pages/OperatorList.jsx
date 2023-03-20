import React from 'react';
import axios from 'axios';

class OperatorList extends React.Component {

    state =
        {
            operators: [],
        };

    client = axios.create({
        baseURL: "/api/operators"
    });

    componentDidMount() {
        axios.get("/api/operators/getAll").then(
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
                OperatorList
                {this.state.operators.map((operator) => {
                    return <p>{operator.name}</p>
                })}

            </div>
        );
    }
}

export default OperatorList;