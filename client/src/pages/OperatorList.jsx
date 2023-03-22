import React from 'react';
import Operator from '../partials/Operator'
import OperatotsService from '../services/OperatorsService';

class OperatorList extends React.Component {

    state =
        {
            operators: [],
        };

    componentDidMount() {
        OperatotsService.fetchOperators().then(
            response => {

                
                this.setState(() => {  

                    return { operators: response.data };
                })
            }
        )
    }

    createNewOperator=()=>
    {
        OperatotsService.addOperator().then(
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