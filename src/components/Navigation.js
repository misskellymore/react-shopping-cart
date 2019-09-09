import React from 'react';
import { NavLink } from 'react-router-dom';
import cartContext from '../contexts/CartContext.js';

const Navigation = () => {
	const {cart} = React.useContext(cartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
