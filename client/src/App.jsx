import GameCreate from './components/gameCreate/GameCreate';
import GameListCatalog from './components/gameListCatalog/GameListCatalog';
import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register'
import GameDetails from './components/gameDetails/GameDetails';
import { useState } from 'react';
import { AuthContext } from './contexts/authContext';

function App() {
	const [auth, setAuth] = useState({})

	const loginSubmitHandler = (values) => {
		console.log(values)
	}

	return (
		<AuthContext.Provider value={{ loginSubmitHandler }}>
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
		</AuthContext.Provider>
	)
}

export default App;
