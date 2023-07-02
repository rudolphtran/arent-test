import "reflect-metadata";
import * as React from "react";
import './static/styles/index.css';
import { createRoot } from 'react-dom/client';
// import {resolveModule} from './utils/module-container'
// import {ITestServiceDef} from './application'
import {App} from './ui/app'
import {HashRouter} from 'react-router-dom'

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
	<HashRouter>
		<App />	
	</HashRouter>
);