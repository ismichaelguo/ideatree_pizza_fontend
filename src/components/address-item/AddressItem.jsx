import React from 'react';
import axios from 'axios';
import './address-item.scss';

class AddressItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
        }
    }

    detailClick = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render() {
        const { _id, unit, streetNum, suburb, postcode,streetName } = this.props.address;
        return (
            <div className="address-item-container">
                <div className="address-item">
                    <span className="address-item__data">{_id.slice(-5)}</span>
                    <span className="address-item__data">{unit}</span>
                    <span className="address-item__data">{streetNum}</span>
                    <span className="address-item__data"> <span className="address-item__operator" onClick={this.detailClick}><i className="fa fa-search-plus"></i></span></span>
                    <span className="address-item__data">{suburb}</span>
                    <span className="address-item__data">{postcode}</span>
                    <span className="address-item__data">
                        <span className="address-item__operator" onClick={()=>{this.props.removeAddress(_id)}} ><i className="fa fa-trash"></i></span>
                    </span>
                </div>
                {this.state.dropdown ?
                    <div className="details-dropdown">
                        <p>{streetName}</p>
                    </div>
                    : null
                }
            </div>
        )
    }

}

export default AddressItem;