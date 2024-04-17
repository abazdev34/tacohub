import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import TacoGallery from './components/taco'

function App() {
	return (
		<div className='App'>
			<Header />

			<Routes>
				<Route path='home/' element={<TacoGallery />} />
			</Routes>
		</div>
	)
}

export default App
