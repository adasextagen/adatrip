const item = {
	grant_type: 'client_credentials',
	client_id: 'NAGY2BGLqipZ5FYbnRz0iGG5yEN0wFBm',
	client_secret: 'o4rrkm9gaxYVxUGH'
}
const toUrlEncoded = (obj) =>
	Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')

const fetchData = ({ departure, arrival }) =>
	fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: toUrlEncoded(item)
	})
		.then((res) => res.json())
		.then((data) => {
			const accessToken = data.access_token
			return fetch(
				`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departure}&destinationLocationCode=${arrival}&departureDate=2020-01-01&returnDate=2020-01-05&adults=2`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			)
				.then((res) => res.json())
				.then((data) => {
					return data
				})
		})

export default fetchData
