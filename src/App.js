import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	// [products] will go to ProductValue
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	// [addItem] will go to ProductContext
	const addItem = item => {
		setCart([...cart, item]);
	};

	return (

		<ProductContext.Provider value= {{products, addItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}

			{/* Before */}
			{/* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/> */}

			{/* After */}
<Route exact path="/" component={Products} />

{/* The after route look cleaner bc we no longer need to pass down the products and additem props.
We no longer have to do this bc the products and additems props are passed in as values inside 
ProductContext.Provider on line 24. */}

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
		</ProductContext.Provider>
	);
}

export default App;
