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
import Logout from './components/logout/Logout';

function App() {
	const navigate = useNavigate()
	const [auth, setAuth] = useState(() => {
		localStorage.removeItem('accessToken')

		return {}
	})

	const loginSubmitHandler = async (values) => {
		let result = await login(values)
		setAuth(result)

		localStorage.setItem('accessToken', result.accessToken)

		navigate('/')
	}

	const registerSubmitHandler = async (values) => {
		let result = await register(values)
		setAuth(result)

		localStorage.setItem('accessToken', result.accessToken)

		navigate('/')
	}

	const logoutHandler = () => {
		setAuth({})

		localStorage.removeItem('accessToken')

		navigate('/')
	}

	const valuesContext = {
		loginSubmitHandler,
		registerSubmitHandler,
		logoutHandler,
		username: auth.username ? auth.username : auth.email,
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
					<Route path='/logout' element={<Logout />} />
					<Route path='/register' element={<Register />} />
					<Route path='/games/:id' element={<GameDetails />} />
				</Routes>
			</div>
		</AuthContext.Provider>
	)
}

export default App;
