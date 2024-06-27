import GameCreate from './components/gameCreate/GameCreate';
import GameListCatalog from './components/gameListCatalog/GameListCatalog';
import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register'
import GameDetails from './components/gameDetails/GameDetails';

function App() {

	return (
		<div id="box">
			<Header />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/games' element={<GameListCatalog />} />
				<Route path='/games/create' element={<GameCreate />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/games/:id' element={<GameDetails />} />
			</Routes>

			
		</div>
	)
}

export default App;
