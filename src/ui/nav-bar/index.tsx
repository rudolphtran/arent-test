import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button} from "@mui/material";
import { NavBarItem } from './nav-bar-item'

const NavBar = () => {
	return (
		<AppBar position="static">
		<Toolbar>
			<NavBarItem label="Home" path="/"/>
			<NavBarItem label="About" path="/about"/>
		</Toolbar>
		</AppBar>
	);
};

export default NavBar;
