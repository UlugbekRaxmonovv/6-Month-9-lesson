import React,{useState}  from 'react';
import './Navbar.css'
import rasm1 from '../../imgs/logo.svg'
import rasm2 from '../../imgs/phon.svg'
import rasm3 from '../../imgs/log1.svg'
import rasm4 from '../../imgs/ikon.svg'
import rasm5 from '../../imgs/iko1.svg'
import rasm6 from '../../imgs/ikon2.svg'
import rasm7  from '../../imgs/Icon.png'
import { Link } from 'react-router-dom';


let links =['Category','Products','Blog','Elements','Pages']

const Navbar = () => {
    const [fixt,setFixt] =useState(false)
    function setFix(){
        if(window.scrollY >= 20){
            setFixt(true)
        }
        else{
            setFixt(false)
        }
    }
    window.addEventListener('scroll',setFix)
    return (
        <div>
         <header>
            <div className="container">
                <nav>
                   <Link to={'/'}>
                   <h1><a href="#" className=""><img src={rasm1} alt="" /></a></h1>
                   </Link>
                   <ul  className="nav-list">
                   <li>
                   <Link to={'/'}>Home</Link>
                   </li>
                    {
                    links?.map((el,inx) =>(
                        <li key={inx}>
                            <a href="#" className=""><select name="" id=""><option value="">{el}</option></select></a>
                        </li>
                    ))    
                    }
                    </ul>
                   <div className="rasm2">
                   <div className="rasm1">
                    <img src={rasm2} alt="" />
                    </div>
                    <div className="rasm1">
                    <p>+123 ( 456 ) ( 7890 )</p>
                    </div>
                   </div>
                  
                </nav>
               
            </div>
            <div className="container">
                <div className= { fixt ? ' nav-bottom container fixed' : ' nav-bottom container'}>
                       <Link to={'/'}>  
                       <h1><a href="#" className="img"><img src={rasm3} alt="" /></a></h1>
                       </Link>
                        <ul  className="nav-bottom-link">
                        <li>
                              <div className="input">
                              <div className="input-all">
                                    <input type="text"  placeholder='Search For items...'/>
                                </div>
                                <div className="input-all1">
                                    <select name="" id="">
                                    <option value="">All Categories</option>
                                    <option value="">All Categories</option>
                                    <option value="">All Categories</option>
                                    </select>
                                   
                                </div>
                                <div className="search">
                                    <div className="search-all">
                                        <img src={rasm7} alt="" />
                                    </div>
                                    </div>

                              </div>
                            </li>
                        </ul>
                        <div className="ikon">
                        <div className="ikon-all">
    <div className="ikon1">
        <img src={rasm4}alt="" />
        </div>
        <div className="ikon1">
        <Link to={'/Login'}>Login</Link>
        </div>
    </div>
    <div className="ikon-all">
    <div className="ikon1">
        <img src={rasm5}alt="" />
        </div>
        <div className="ikon1">
        <Link to={'/Admin'}>Admin</Link>
        </div>
    </div>
    <div className="ikon-all">
    <div className="ikon1">
        <img src={rasm6}alt="" />
        </div>
        <div className="ikon1">
        <Link to={'/'}>Cart</Link>
        </div>
    </div>
                        </div>
                    </div>
                </div>
         </header>
        
         </div>
    );
}

export default Navbar;
