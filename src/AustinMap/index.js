import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class AustinMap extends Component {
    static defaultProps = {
        center: {lat: 30.26, lng: -97.74},
        zoom: 11,
    };

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent
                    lat={30.2672}
                    lng={-97.7431}
                    text={'Yolo Lyfe'}
                />
            </GoogleMapReact>
        );
    }
}

export default AustinMap;