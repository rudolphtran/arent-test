import	* as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
	return (
	<>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</nav>
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/about" element={<h1>About</h1>} />	
		</Routes>
	</>);
}