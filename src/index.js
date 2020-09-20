import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import App from './App'
import 'styles/index.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<BrowserRouter>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</BrowserRouter>,
	document.getElementById('top')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
