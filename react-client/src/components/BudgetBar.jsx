import React from 'react';


class BudgetBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className="budgetbar-wrapper">
        <div className="label">
          <label >Budget:</label>
        </div>
        <div className="input">
          <input type="text" className="budget-bar-text" placeholder="Enter a budget"
                 onChange={this.props.changeBudget.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default BudgetBar;