import React, { Component } from 'react';
import Geocode from "react-geocode";
import "./map.scss";
import phone from "./phone.svg";
import clock from "./clock.svg";
import place from "./place.svg";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Link } from "react-router-dom";

const mapStyles = {
    width: "100%",
    height: "50rem",
};


export class GMap extends Component {
    constructor(props) {
        super(props);
        console.log(props.inMap.split(',')[0]);
        this.state = {
            dshowingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            lat: 0,
            lng: 0,
        };
    }
    componentWillMount() {
        this.setState({ isLoading: true })
        Geocode.setApiKey("AIzaSyACf9j--m1Bzz_dkEuQKfrgDus60tCZ-wg");
        Geocode.setLanguage("en");
        Geocode.setRegion("es");
        Geocode.enableDebug();
        Geocode.fromAddress(this.props.inMap.split(',')[0]).then(
            response => {
                console.log(response)
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({
                    lat,
                    lng,   
                });
                console.log(lat, lng);
            },
            error => {
                console.error(error);
            }

        );
    }


    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            // showingInfoWindow: true
        });

    // onMapClicked = (props) => {
    //     if (this.state.showingInfoWindow) {
    //         this.setState({
    //             // showingInfoWindow: false,
    //             activeMarker: null
    //         })
    //     }
    // };

    render() {
            return (
                <div>
                    <div className="map-header">
                        <Link to="/stores" className="map_back">BACK</Link>
                    </div>
                    <div className="map">
                        <div className="map-description">
                            <h1>{this.props.inMap.split(',')[1]}</h1>
                            <p><img src={place} />{" "}<span className="map-description-content">{this.props.inMap.split(',')[0]}</span></p>
                            <p><img src={phone} />{" "}<span className="map-description-content">{this.props.inMap.split(',')[2]}</span></p>
                            <p><img src={clock} />{" "}<span className="map-description-content">TRADING HOURS</span></p>
                            <table>
                                <tr>
                                    <td>MONDAY</td>
                                    <td>10:00 AM - 12:00 AM</td>
                                </tr>
                                <tr>
                                    <td>TUESDAY</td>
                                    <td>10:00 AM - 12:00 AM</td>
                                </tr>
                                <tr>
                                    <td>TUESDAY</td>
                                    <td>10:00 AM - 12:00 AM</td>
                                </tr>
                                <tr>
                                    <td>WEDNESDAY</td>
                                    <td>10:00 AM - 12:00 AM</td>
                                </tr>
                                <tr>
                                    <td>THURSDAY</td>
                                    <td>10:00 AM - 12:00 AM</td>
                                </tr>
                                <tr>
                                    <td>FRIDAY</td>
                                    <td>0:00 AM - 01:00 AM</td>
                                </tr>
                                <tr>
                                    <td>SATURDAY</td>
                                    <td>10:00 AM - 01:00 AM</td>
                                </tr>
                                <tr>
                                    <td>SUNDAY</td>
                                    <td>11:00 AM - 11:00 PM</td>
                                </tr>
                            </table>
                        </div>

                        <Map
                            google={this.props.google}
                            center={{
                                lat: this.state.lat,
                                lng: this.state.lng
                            }}
                            style={mapStyles}
                            zoom={16}
                        // onClick={this.onMapClicked}
                        >
                            <Marker
                                // onClick={this.onMarkerClick}
                                position={{ lat: this.state.lat, lng: this.state.lng }} />
                        </Map>

                    </div>

                </div>

            )
        }
    }

export default GoogleApiWrapper({
    apiKey: "AIzaSyACf9j--m1Bzz_dkEuQKfrgDus60tCZ-wg"
})(GMap)


