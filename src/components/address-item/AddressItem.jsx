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
        return (
            <div className="address-item-container">
                <div className="address-item">
                    <span className="address-item__id">123</span>
                    <span className="address-item__unit">123</span>
                    <span className="address-item__street-number">123</span>
                    <span className="address-item__street-name" > <i className="fa fa-search-plus"></i></span>
                    <span className="address-item__suburb">123</span>
                    <span className="address-item__suburb">123</span>
                    <span className="address-item__operators">
                        <span className="address-item__remove" ><i className="fa fa-trash"></i></span>
                    </span>
                </div>
            </div>
        )
    }

}

export default AddressItem;