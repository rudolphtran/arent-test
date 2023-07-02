import	* as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './nav-bar';
import { Home } from './home';

export const App = () => {
	return (
	<>
		<NavBar/>
		<Routes>
			<Route path="/*" element={<Home/>} />
			<Route path="/about" element={<h1>About</h1>} />	
		</Routes>
	</>);
}