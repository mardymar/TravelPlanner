import React from 'react';
import SavedFlightPanel from './SavedFlightPanel.jsx';
import SavedHotelPanel from './SavedHotelPanel.jsx';
import SavedFoodPanel from './SavedFoodPanel.jsx';
import SavedAttractionPanel from './SavedAttractionPanel.jsx';

class SavedRecordPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <SavedFlightPanel trip = {this.props.trip}/>
        <SavedHotelPanel trip = {this.props.trip} />
        <SavedAttractionPanel trip = {this.props.trip} />
        <SavedFoodPanel trip = {this.props.trip}/>
        <div>This trip will cost you <b>${Math.round(this.props.trip.cost)}</b>!</div>
      </div>
    )
  }
}

export default SavedRecordPanel;
