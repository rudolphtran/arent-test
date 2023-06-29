import "reflect-metadata";
import * as React from "react";
import { createRoot } from 'react-dom/client';
import {resolveModule} from './utils/module-container'
import {ITestServiceDef} from './application'
import {App} from './ui/app'
import {BrowserRouter} from 'react-router-dom'
// export const App = () => {
// 	return <h1>Hello from React {resolveModule(ITestServiceDef).test()}</h1>;
// };
const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
	<BrowserRouter>
	<App />	
	</BrowserRouter>
);