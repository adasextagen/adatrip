import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useHistory } from 'react-router-dom'

const Home = () => {
	let history = useHistory()

	const form = {
		departure: '',
		arrival: ''
	}

	const getResults = (values) => history.push(`/results?q=${btoa(JSON.stringify(values))}`)

	return (
		<React.Fragment>
			<Formik initialValues={form} onSubmit={(v) => getResults(v)}>
				{(props) => (
					<Form>
						<Field name={'departure'} placeholder={'Origen:'} />
						<Field name={'arrival'} placeholder={'Destino:'} />
						<button type={'button'} onClick={() => props.handleSubmit()}>
							Enviar
						</button>
					</Form>
				)}
			</Formik>
		</React.Fragment>
	)
}

export default Home
