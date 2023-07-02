import React from "react";
import { Achievement } from "./achievement";

export const Home = () => {
	return (
		<div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1">
			<div className="col-span-1">
				<Achievement/>
			</div>
			<div className="col-span-2">
				
			</div>
		</div>
	);
};