import './App.css'
import Header from './components/Header'
import About from './pages/About/About'
import MainPage from './pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='' element={<MainPage />} />
				<Route path='about' element={<About />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
