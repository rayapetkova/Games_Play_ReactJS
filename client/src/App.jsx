import GameCreate from './components/gameCreate/GameCreate';
import GameListCatalog from './components/gameListCatalog/GameListCatalog';
import Header from './components/header/Header'
import HomePage from './components/homePage/HomePage'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/register/Register'
import GameDetails from './components/gameDetails/GameDetails';
import { useState } from 'react';
import { AuthContext } from './contexts/authContext';
import { login, register } from './services/authServices';

function App() {
	const navigate = useNavigate()
	const [auth, setAuth] = useState({})

	const loginSubmitHandler = async (values) => {
		let result = await login(values)
		setAuth(result)

		navigate('/')
	}

	const registerSubmitHandler = async (values) => {
		let result = await register(values)
		setAuth(result)

		navigate('/')
	}

	const valuesContext = {
		loginSubmitHandler,
		registerSubmitHandler,
		username: auth.username,
		email: auth.email,
		isAuthenticated: auth.email ? true : false
	}

	return (
		<AuthContext.Provider value={valuesContext}>
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
