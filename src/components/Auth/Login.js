import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postLogin } from '../../services/apiService';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { FaSpinner } from "react-icons/fa";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            );
    };

    const handleLogin = async () => {
        // validate
        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            toast.error('Invalid Email')
            return;
        }

        if (!password) {
            toast.error('Invalid Password')
            return;
        }
        // always set true -> reset the value
        setIsLoading(true);

        // submit apis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            // dispatch inside react component
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoading(false);
            navigate('/')
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setIsLoading(false);

        }
    }

    const handleKeyDown = (event) => {
        if (event && event.key === 'Enter') {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have account yet?</span>
                <button onClick={() => navigate('/register')}>Sign Up</button>
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
                        onChange={(event) => setPassword(event.target.value)}
                        onKeyDown={(event) => handleKeyDown(event)} />
                </div>
                <span className='forgot-password'>Forgot password?</span>
                <div>
                    <button className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={isLoading}
                    >
                        {isLoading == true && <FaSpinner className='loader-icon' />}
                        <span>Login to the app</span>
                    </button>
                </div>
                <div className='back text-center'>
                    <span onClick={() => { navigate('/') }}> &#60; &#60; Go to HomePage</span>
                </div>

            </div>
        </div>
    )
}

export default Login;
