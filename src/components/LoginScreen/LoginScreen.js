import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Inicio de sesión</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control"
                        placeholder='Tu email'
                    />

                    <input
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />
                    <div className='d-flex justify-content-center '>
                        <button className='btn btn-dark' type='submit'>Ingresar</button>
                        <button className='btn btn-primary ms-2' type='submit'><Link to={"/register"} className='register'>Registrarme</Link></button>
                    </div>
                </form>
                <div className='d-flex justify-content-center '>
                    <button className='btn btn-outline-dark mt-2' onClick={googleLogin}>Ingresar con Google</button>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen