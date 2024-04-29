import React,{useState} from 'react';
import './Logo.css'
import Footer from '../../../component/Footer/Footer';
import { MdArrowRightAlt } from "react-icons/md";
import rasm1 from '../../../imgs/log1.svg'
import rasm2 from '../../../imgs/ras1.png'
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/logo';
import { toast } from 'react-toastify';
const Login = () => {
    const [username, setName] = useState('hbingley1')
    const [password, setPassword] = useState('CQutx25i8r')
    const [loading, setLoading ]= useState(false)
    
    const navigati = useNavigate()

    const hanSubmit =(e)=>{
        setLoading(true)
        e.preventDefault()
        let user ={
            username,
            password
        }
       axios
       .post( "/auth/login", user )
       .then(ris => {
        console.log('ris >>>>', ris)
        toast.success('Welcome')
        console.log("ris >>>>", ris.data.token)
        localStorage.setItem('x-auth-token', ris.data.token)
        navigati('/Admin')
       
    })
       .catch(arr => {
        console.log('arr >>>',arr)
        toast.error('username or password is incorrect')
    })
  .finally(()=> setLoading(false))
       
    }
    return (
        <div>
            <section className='box1'>
             <div className="list-all3 container">
                <div className="list-all2">
                    <h1>Login</h1>
                        <ul className="list-link1">
                        <li>
                                <a href="" className="">Home</a>
                            </li>
                            <li>
                                <a href="" className="">
                                <MdArrowRightAlt />
                                </a>
                            </li>
                            <li>
                                <a href="" className="">Login</a>
                            </li>
                        </ul>
                </div>
             </div>
            </section>

            <section>
                <div className="login">
                    <div className="login-all container">
                  <form action="" onSubmit={hanSubmit}>
                  <div className="login-row">
                         <img src={rasm1} alt="" />
                       <div className="login-list">
                        <div className="logo-list-row">
                        <p>Email Address*</p>
                            <div className="input-all11"> 
                            <div className="input-row11">
                                <input type="text"
                                 placeholder='Enter Your Email' 
                                 value={username}  
                                 onChange={e => setName(e.target.value) } />
                            </div>
                            </div>

                            <p>Password*</p>
                            <div className="input-all11"> 
                            <div className="input-row11">
                                <input type="password" 
                                placeholder='Enter Your password'
                                value={password}  
                                onChange={e => setPassword(e.target.value) }
                                />
                            </div>
                            </div>
                        </div>
                       </div>

                       <div className="remember">
                       <div className="remember-all">
                        <div className="img-all">
                        <div className="img-row">
                             <img src={rasm2} alt="" />
                            </div>
                            <div className="img-row">
                             <p>Remember Me</p>
                            </div>
                        </div>
                        </div>
                        <div className="remember-all">
                            <p>Forgot Password?</p>
                        </div>
                       </div>

                       <div className="bnt">
                       <div className="bnt1">
                            <button disabled={loading}  type='submit'>{loading ? 'loading...' : "login"}</button>
                        </div>
                        <div className="bnt11">
                            <button onClick={() => navigati('/')}>Signup?</button>
                        </div>
                       </div>
                   </div>
                  </form>
                    </div>
                </div>
            </section>
         <Footer/>

        </div>
    );
}

export default Login;
