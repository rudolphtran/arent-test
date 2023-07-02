import React from "react";
import { Link } from "react-router-dom";
import { Button, SvgIcon } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

type navBarItemProps = {
	label: string;
	path: string;
}

export const NavBarItem = (props: navBarItemProps) => {
	const {label, path} = props;

	return (
		<Button color="inherit" component={Link} to={path} startIcon={<HomeIcon/>}>
			{label}
		</Button>
	);
}