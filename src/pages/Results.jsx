import React, { useState, useEffect } from 'react'
import Flight from '../components/Flight'
import fetchData from '../helpers/apiCall'

const Results = (props) => {
	const [ flights, setFlights ] = useState([ '' ])
	const [ isLoading, toogleLoading ] = useState(true)

	const getFlights = async (values) => {
		let { data } = await fetchData(values)
		setFlights(data)
		toogleLoading(false)
	}

	useEffect(() => {
		let url = new URL(window.location.href)
		let data = JSON.parse(atob(url.searchParams.get('q')))
		getFlights(data)
	}, [])

	return isLoading ? (
		'cargando'
	) : (
		<div>
			<h1>Mirá esos vuelo papá</h1>
			<ul>{flights.map((f) => <Flight key={f.id} data={f} />)}</ul>
		</div>
	)
}

export default Results
