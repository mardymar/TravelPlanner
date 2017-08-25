import React from 'react';
import classnames from 'classnames';


class FoodItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }

    this.stars = {
      5: "https://image.ibb.co/gJyprk/5.png",
      4.5: "https://image.ibb.co/eC7tHQ/4_5.png",
      4: "https://image.ibb.co/b8Y0xQ/4.png",
      3.5: "https://image.ibb.co/hVQ2Bk/3_5.png",
      3: "https://image.ibb.co/bEsScQ/3.png",
      2.5: "https://image.ibb.co/dr6ncQ/2_5.png",
      2: "https://image.ibb.co/c5ZJj5/2.png",
      1.5: "https://image.ibb.co/k2QPP5/1_5.png",
      1: "https://image.ibb.co/guy0xQ/1.png",
      0: "https://image.ibb.co/b9FfxQ/0.png"
    }
  }

  handleFoodClick() {
    this.setState({
      selected: !this.state.selected
    }, () => {
      this.props.handleFoodItemState(this);
    })
  }

  render() {
    let foodclasses = classnames('attrBackground', {activeAttr: this.state.selected});
    return (
      <div className={foodclasses} id="itemBorder" onClick={this.handleFoodClick.bind(this)}>
        <div>
          <b>{ this.props.fooditem.name }</b>
        </div>
        <div id="foodtype">{this.props.fooditem.categories[0].title}</div>
        <div className="food-address">{ this.props.fooditem.location.display_address.join(', ') }</div>
        <div className="row">
          <div className='avoid-clicks col-sm-4'><strong>Price: </strong> {this.props.fooditem.price}</div>
          <div className='avoid-clicks col-sm-4'>
            <strong>Rating:</strong> <img src={this.stars[this.props.fooditem.rating]}/></div>
        </div>
        <div>
        </div>
        <img src={ this.props.fooditem.image_url } width='150' height='150'></img>
      </div>
    )
  }

}

export default FoodItem;
