import React, {useContext} from 'react';

// Components
import Product from './Product';
import ProductContext from '../contexts/ProductContext.js';

const Products = props => {
	// calling the useContext hook and passing in the context 
	// object we want to use into it on line 11

	const {products, addItem} = useContext (ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
