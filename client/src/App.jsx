import GameListCatalog from './components/gameListCatalog/GameListCatalog';
import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {

	return (
		<div id="box">
			<Header />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/games' element={<GameListCatalog />} />
			</Routes>

			
		</div>
	)
}

export default App;
