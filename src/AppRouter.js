import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'

const AppRouter = () => {
	return (
		<Router>
			<Route exact path={'/'} component={Home} />
			<Route path={'/results'} component={Results} />
		</Router>
	)
}

export default AppRouter
