
import OperatorModel from '../models/operator-model';
import React from 'react';
import { Link } from "react-router-dom";
class Operator extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      operator: props.op,
    };
  }

  render() {
    return (
      <Link to={`/operator/${this.state.operator.id}`}>
        <div className="one-operator">
          <p className="main-char-text">Operator {this.state.operator.name} </p>
          <p className="main-char-text">Rarity:  {this.state.operator.rarityDesc}</p>
          <p className="main-char-text">Type: {this.state.operator.type}</p>
        </div>
      </Link>
    );
  }
}

export default Operator;