import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider } from "@chakra-ui/react";

import AppTheme from "./theme.js";

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
	<ChakraProvider theme={AppTheme}>
	<App />
	</ChakraProvider>
	</React.StrictMode>,
)
