import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css';

export class Maps extends Component {
    render() {
        const style = {
            width: '100%',
        };    

		return (
			<Map
				google={this.props.google}
                style={style}
				initialCenter={{ lat: 33.753746, lng: -84.386330 }}
				zoom={3}
			>
				
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyAuB4HzU5oySvJXkOFXAimfsa8c-KKHrhs',
})(Maps);