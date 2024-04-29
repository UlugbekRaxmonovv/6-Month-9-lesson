import React,{useEffect,useState} from 'react';
import axios from '../../api/logo';
import './App1.css'
import rasm1 from '../../imgs/rasm1.jpg'
import rasm2 from '../../imgs/yul.png'
import rasm3 from '../../imgs/kor.png'
import { Link } from 'react-router-dom';

const Api_Url = 'https://dummyjson.com/products'


const App1 = () => {
    const [data,setData]= useState([])
    useEffect(() =>{
  axios
  .get('/products')
  .then(res => setData(res.data.products))
  .catch(err => console.log(err))
    },[])

  let cards = data?.slice(0,28).map((el) =>(
    <div className="product" key={el}>
    <div className="product-card">
     <div className="all">
        <div className="all1">
            <p>Hat</p>
        </div>
     </div>
     <Link to={`products/${el.id}`}>
     <img src={el.thumbnail} alt=""  style={{width:'246px',height:'206px',marginTop:'10%',marginLeft:'10%'}}/>
     </Link>
     <p>{el.description}</p>
     <div className="yul">
     <div className="yul1">
            <img src={rasm2} alt="" />
        </div>
        <div className="yul1">
           <p>{el.discountPercentage}</p>
        </div>
     </div>
     <pre className='pr'>By  <span>{el.brand}</span></pre>
     <div className="narx">
     <div className="narx-all">
            <p>{el.price} <span>{el.rating}</span></p>
        </div>
        <div className="narx-all">
          <div className="all5">
          <div className="all6">
               <img src={rasm3} alt="" />
            </div>
            <div className="all6">
              <p>Add</p>
            </div>
          </div>
        </div>
     </div>
    </div>
 </div>
  ))
    return (
        <div>
            <section>
                <div className="container">
                    <div className="products">

                     {cards}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App1;
