import React from 'react'

const Flight = ({ data: { itineraries, price: { grandTotal, currency } } }) => (
	<ul>
		<li>
			{itineraries.map((e, i) => {
				return (
					<div key={i}>
						<p>{e.duration}</p>
						{e.segments.map((e, i) => (
							<div key={i}>
								<span>{`${e.departure.iataCode} - ${e.arrival.iataCode}`}</span>
							</div>
						))}
					</div>
				)
			})}
		</li>
		<li>{`Precio: ${currency} ${grandTotal}`}</li>
	</ul>
)

export default Flight
