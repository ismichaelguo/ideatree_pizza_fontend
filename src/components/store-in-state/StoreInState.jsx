import React from "react";
import "./store-in-state.scss";
import StoreCard from '../store/StoreCard';
import { Link } from "react-router-dom";
import StoreList from '../../components/store/store-data';

function StoreInState(props) {
    const stateId = props.stateId;
    const stateList = StoreList.find(item => item.stateId === +stateId);
    let storesList = [];
    stateList.cities.forEach(item => {
        storesList.push(...item.stores)
    })

    // const cityID = props.cityID;
    


    return (
        <div>
            <div className="store-in-state-header">
                <Link to="/stores" className="store-in-state_back">BACK</Link>
            </div>

            <div className="store-in-state-detail">
                    <span>PizzaHub's STORES IN {props.state}</span>

                    <section className="store-in-state-list">
                        {storesList.map(item => (<StoreCard 
                            key={item.id}
                            id={item.id}
                            name={item.storeName}
                            postcode={item.postcode}
                            address={item.address}
                            suburb={item.suburb}
                            state={item.state}
                            phone={item.phone} 
                            text={"VIEW"}/>))}
                    </section>  
            </div>
        </div>
    )
}

export default StoreInState;