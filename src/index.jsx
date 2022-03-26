import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import GlobalStyle from './GlobalStyles'
import App from './app/App'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
)
