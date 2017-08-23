import React from 'react';


class BudgetFloat extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div id="fixed-div" className="budgetfloat-wrapper">
        <strong><h1>{this.props.budget}</h1></strong>
      </div>
    )
  }
}

export default BudgetFloat;