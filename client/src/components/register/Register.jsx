import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import useForm from "../../hooks/useForm"

const Register = () => {
    const {registerSubmitHandler} = useContext(AuthContext)

    const [values, onChange, onSubmit] = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        'confirm-password': ''
    })

    return (
        // <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={values.email} 
                        onChange={onChange} 
                        placeholder="maria@email.com" 
                    />

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={onChange} 
                        id="register-password" 
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirm-password"
                        value={values.confirmPassword} 
                        onChange={onChange} 
                        id="confirm-password" 
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Register;