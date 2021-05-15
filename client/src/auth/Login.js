import React , {useState} from 'react';
import { login } from '../actions/auth';
import {toast} from 'react-toastify'
import LoginForm from '../components/LoginForm';
import {useDispatch} from 'react-redux'

const Login = ({history}) => {

    const dispatch = useDispatch()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             const {data } =   await login({email , password})
            if(data) {
                //save user and token to local storage
                window.localStorage.setItem('auth', JSON.stringify(data) );
                // save into redux
                dispatch({
                    type:"LOGGED_IN_USER",
                    payload : data
                })
                toast.success("Logged Successfully")
                history.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
            if(error.response.status === 400) toast.error(error.response.data)
        }
    }

    return (
        <>
            <div className="container-fluid p-5 text-center">
                <h1>Login</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
