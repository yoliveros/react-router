import React, { useState } from 'react'
import { Route } from "react-router-dom"
import Loadable from 'react-loadable'
import './App.css'

const loader = x => Loadable({
	loading: () => 'Cargando...',
	loader: x
})

const Prueba = loader(() => import('./Components/prueba'))
const Invoices = loader(() => import('./Components/invoices'))
function App() {
	return (
		<div className="App">
			<Route exact path='/' component={Prueba} />
			<Route exact path='/invoices' component={Invoices} />
		</div>
	)
}

export default App
