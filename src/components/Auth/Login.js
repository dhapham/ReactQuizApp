import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postLogin } from '../../services/apiService';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        // validate

        // submit apis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have account yet?</span>
                <button>Sign Up</button>
            </div>
            <div className='title col-4 mx-auto'>
                Sandy's Quiz App
            </div>
            <div className='welcome col-4 mx-auto'>
                Who is this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleLogin()}>Login to the app</button>
                </div>
                <div className='back text-center'>
                    <span onClick={() => { navigate('/') }}> &#60; &#60; Go to HomePage</span>
                </div>

            </div>
        </div>
    )
}

export default Login;
