import useForm from '../../hooks/useForm'

const Login = ({loginSubmitHandler}) => {
    const [values, onChange, onSubmit] = useForm(loginSubmitHandler, {
        email: '',
        password: ''
    })

    return (
        // <!-- Login Page ( Only for Guest users ) -->
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email} 
                        onChange={onChange}
                        placeholder="Sokka@gmail.com" 
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password" 
                        value={values.password}
                        onChange={onChange}
                    />

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login;