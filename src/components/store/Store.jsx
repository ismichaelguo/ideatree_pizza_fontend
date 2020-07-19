import React, { useState } from "react";
import "./store.scss";
import StoreList from '../../components/store/store-data';
import StoreCard from './StoreCard';
import { Link } from 'react-router-dom';

function Store(props) {
	let stores = [];
	StoreList.forEach(item => {
		item.cities.forEach(item => {
			stores = stores.concat(item.stores)
		})
	})
	const [result, setResult] = useState(0);
	let filterStore = (e) => {
		let words = e.target.value;
		if (words.length < 3) return
		setResult([]);
		let filterResult = stores.filter(item => {
			return item.postcode === words || item.storeName.toLowerCase().indexOf(words.toLowerCase()) !== -1 || item.suburb.toLowerCase() === words.toLowerCase()
		})
		setResult(filterResult);
	}

	return (
		<div>
			<div className="storeSearch"> 
				<div className="storeSearch__box"> 
					<h3>FIND YOUR LOCAL PIZZAHUB</h3>
					<input type="text" placeholder="Enter postcode, suburb or store name" onChange={filterStore} />
					{result ?
						result.map((item) =>
							(<StoreCard
								key={item.id}
								id={item.id}
								name={item.storeName}
								postcode={item.postcode}
								address={item.address}
								suburb={item.suburb}
								state={item.state}
								phone={item.phone}
								text={"select"} />
							)) : ''}
				</div>
			</div>

			<div className="storeRegion">
				<div className="storeRegion__title">
					<strong>EXPLORE</strong>
					<br />
					BY STATE
				</div>

				{StoreList.map((item) => (<div className="storeRegion__detail" key={item.stateId}>
					<Link to={`/store-in-state/${item.stateId}/${item.states}`}>
						<strong>{item.states}</strong>
					</Link>
					<Link to={`/store-in-state/${item.stateId}/${item.states}/${item.cityID}/${item.city}`}>
						{item.cities.map((item, idx) => (<span key={idx}>{item.city}</span>))}
					</Link>

				</div>))}

			</div>
			<div className="storeTerms">
				<div className="storeTerms__text">
					<p>*10% surcharge applies on Sundays. 15% surcharge applies on Public Holidays. 20% surcharge applies on Christmas Day.</p>
					<p>^kJ information based on Pizza made on Classic Crust. The average adult daily energy intake is 8700kJ.</p>
					<p>Terms and Conditions</p>
					<p>*The displayed prices are local prices at your selected store only. You can change your local store HERE or visit DOMINO’S ONLINE ORDERING. Customisation may incur further charges as displayed in order basket. Additional charges as displayed apply for extra toppings & half ‘n’ half. No half ‘n’ half allowed on Value Range or Vegan Cheese Pizzas. $2.95 extra for Gluten Free Sourdough Crust. $2.95 extra for Vegan Cheese on Large pizzas & $4.50 on Extra Large pizzas. $3.45 extra for Garlic Bread Crust & Cheesy Crust. Premium Pizzas $2.95 more than Traditional pizzas. Upgrade to Extra Large pizzas for $3 extra. Extra Large available on Classic Crust only. Extra Large pizzas are 50% bigger in surface size post-bake, and have 50% more toppings, than Large pizzas. 50c extra for American Cheddar base sauce. No indulgent crusts allowed on the New Yorker Range or Vegan Cheese Pizzas. No substitute toppings allowed on Value Range, Vegan Cheese Pizzas or New Yorker Range Pizzas. No half ‘n’ half allowed on Value Range or Vegan Cheese Pizzas. Minimum delivery order $22 (excluding extended delivery, Sunday and Public Holiday surcharges). Drivers only carry $20 in change. All offers not valid with any other coupon or offer. Only available at selected stores.
	 					Domino’s stores will endeavor to provide vegan, allergen-free or gluten free pizzas if requested by you, but traces of meat, allergens, gluten or dairy products may be unintentionally present in food due to cross-contamination during store operations. We cannot guarantee that our pizzas are allergen or gluten free pizzas and will be 100% free from animal products. More information on ingredient, gluten free, nutritional & allergen information is available in store and online (www.dominos.com.au/menu/nutritional-information)</p>
				</div>
			</div>
		</div >
	)
}

export default Store;