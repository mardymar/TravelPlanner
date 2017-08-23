import React from 'react';
// import img from '../../dist/stars/1.5.png'

class HotelEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
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

  handleHotelClick(hotel, event) {
    this.props.handleHotelClick(hotel, event);

  }

  render() {

    return (
      <div className="itemBorder" onClick={(e) => (this.handleHotelClick(this.props.hotel, e))}>
        <div className='avoid-clicks'>
          <div className='avoid-clicks hotel-name'><b>{this.props.hotel.name}</b></div>
          <div className='avoid-clicks hotel-address'>{this.props.hotel.location.display_address.join(', ')}</div>
          <div className="row">
            <div className='avoid-clicks col-sm-4'><strong>Price: </strong> {this.props.hotel.price}</div>
            <div className='avoid-clicks col-sm-4'>
              <strong>Rating:</strong> <img src={this.stars[this.props.hotel.rating]}/></div>
          </div>
          <img className='avoid-clicks' src={this.props.hotel.image_url} width="150" height="150"></img>
        </div>
      </div>
    )
  }
}
export default HotelEntry;
