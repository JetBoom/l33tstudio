import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'views/Home'
import CyberProHome from 'views/cyberpro/Home'

export default () => <>
	<Switch>
		<Route path="/cyberpro" exact={true} component={CyberProHome} />

		<Route path="/" exact={true} component={Home} />

		<Redirect from="*" to="/" />
	</Switch>
</>
