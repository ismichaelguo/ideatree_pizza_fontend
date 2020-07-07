import React from 'react';
import axiosInstance from "../../api/axiosInstance";
import './admin-address-item.scss';

class AddressItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            editWindow: false,
            currentAddress: {}
        }
    }

    detailClick = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    editClick = (unit, streetNum, suburb, postcode, streetName) => {
        this.setState({
            editWindow: !this.state.editWindow,
            currentAddress: {
                unit: unit,
                streetNum: streetNum,
                streetName: streetName,
                suburb: suburb,
                postcode: postcode,
            }
        }, () => {

            const unitInput = document.getElementById("unit");
            const streetNumInput = document.getElementById("street-num");
            const suburbInput = document.getElementById("suburb");
            const postcodeInput = document.getElementById("postcode");
            const streetNameInput = document.getElementById("street-name");

            unitInput.value = unit;
            streetNumInput.value = streetNum;
            suburbInput.value = suburb;
            postcodeInput.value = postcode;
            streetNameInput.value = streetName;
        })


    }

    closeClick = () => {
        this.setState({
            editWindow: false,
        })
    }

    unitChange = (e) => {
        let preAddress = this.state.currentAddress;
        const unit = document.getElementById('unit');
        unit.value = unit.value.replace(/[^\d]/g, '');
        unit.value = unit.value.slice(0, 4);
        this.setState({
            currentAddress: {
                ...preAddress,
                unit: e.target.value,
            }
        });

    }
    streetNumChange = (e) => {
        let preAddress = this.state.currentAddress;
        const streetNum = document.getElementById('street-num');
        streetNum.value = streetNum.value.replace(/[^\d]/g, '');
        streetNum.value = streetNum.value.slice(0, 4);
        this.setState({
            currentAddress: {
                ...preAddress,
                streetNum: e.target.value,
            }
        });
    }
    streetNameChange = (e) => {
        let preAddress = this.state.currentAddress;
        this.setState({
            currentAddress: {
                ...preAddress,
                streetName: e.target.value,
            }
        });

    }
    suburbChange = (e) => {
        let preAddress = this.state.currentAddress;
        this.setState({
            currentAddress: {
                ...preAddress,
                suburb: e.target.value,
            }
        });

    }
    postcodeChange = (e) => {
        let preAddress = this.state.currentAddress;
        const postcode = document.getElementById('postcode');
        postcode.value = postcode.value.replace(/[^\d]/g, '');
        postcode.value = postcode.value.slice(0, 4);
        this.setState({
            currentAddress: {
                ...preAddress,
                postcode: e.target.value,
            }
        });

    }
    confirmUpdate = (id) => {

        const streetNum = document.getElementById('street-num').value;
        const streetName = document.getElementById('street-name').value;
        const suburb = document.getElementById('suburb').value;
        if (streetNum&&streetName&&suburb) {
            this.setState({
                editWindow: false,
            });

            axiosInstance({
                url: `/address/${id}`,
                method: "PUT",
                header: { 'Content-type': 'application/json' },
                data: {
                    "unit": this.state.currentAddress.unit,
                    "streetNum": this.state.currentAddress.streetNum,
                    "streetName": this.state.currentAddress.orderItems,
                    "suburb": this.state.currentAddress.suburb,
                    "postcode": this.state.currentAddress.postcode,
                }
            }).then(res => {
                //console.log('update res:', res);
                this.props.fetchData(this.props.currentPage, this.props.PAGE_SIZE);
            }).catch(err => {
                //console.log('err', err);
            });
        } else {
           alert('Missing information');
        }

    }

    render() {
        const { _id, unit, streetNum, suburb, postcode, streetName } = this.props.address;
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
                        <span className="address-item__operator" onClick={() => this.editClick(unit, streetNum, suburb, postcode, streetName)}><i className="fa fa-edit"></i></span>
                        <span className="address-item__operator" onClick={() => { this.props.removeAddress(_id) }} ><i className="fa fa-trash"></i></span>
                    </span>
                </div>
                {this.state.dropdown &&
                    <div className="details-dropdown">
                        {streetName}
                    </div>
                }
                {this.state.editWindow && (
                    <div className="details-editor">
                        <div className="details-editor__close-btn-container"><p className="details-editor__close-btn"><i className="fa fa-times-circle" onClick={this.closeClick}></i></p></div>
                        <label className="form-label details-editor__first-line" >Unit Number</label>
                        <input id="unit" className="form-control" type="text" placeholder="Optional" onChange={this.unitChange} ></input>
                        <label className="form-label">Street Number</label>
                        <input id="street-num" className="form-control" type="text" onChange={this.streetNumChange}></input>
                        <label className="form-label">Street</label>
                        <input id="street-name" type="text" className="form-control" maxLength='40' onChange={this.streetNameChange}></input>
                        <label className="form-label">Suburb</label>
                        <input id="suburb" type="text" className="form-control" maxLength='20' onChange={this.suburbChange}></input>
                        <label className="form-label">Postcode</label>
                        <input id="postcode" type="text" className="form-control" placeholder="Optional" onChange={this.postcodeChange}></input>
                        <button onClick={() => this.confirmUpdate(_id)}>Confirm</button>
                    </div>
                )}
            </div>
        )
    }

}

export default AddressItem;