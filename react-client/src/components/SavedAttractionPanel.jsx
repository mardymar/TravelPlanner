import React from 'react';


class SavedAttractionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }



  render() {
    if(this.props.trip.attractions.length === 0) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
          <h4><div className = "glyphicon glyphicon-camera"></div> Attractions</h4>
            {this.props.trip.attractions.map((attraction, index) =>
              <div>
                <div><h5><span className = "glyphicon glyphicon-heart"></span> {attraction.name}</h5></div>
                <div><h6>{attraction.location.display_address[0]}</h6></div>
                <div><h6>{attraction.location.display_address[1]}</h6></div>
              </div>
            )}
            <br></br>
        </div>
      )
    }
    return (
      <div>

      </div>
    );
  }
}

export default SavedAttractionPanel;
