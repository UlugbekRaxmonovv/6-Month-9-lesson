import React from 'react';
import Footer from '../../../component/Footer/Footer';
import './Admin.css'
import { MdArrowRightAlt } from "react-icons/md";
const Admin = () => {
    const data =[
        {
            id:1,
            h1:'Product Packing',
            p:'Lorem ipsum dolor sit amet,consectetur adipisicing.'
        },
        {
            id:2,
            h1:'Payment Secure',
            p:'Lorem ipsum dolor sit amet,consectetur adipisicing.'
        },
        {
            id:3,
            h1:'24X7 Support',
            p:'Lorem ipsum dolor sit amet,consectetur adipisicing.'
        },
        {
            id:4,
            h1:'Delivery in 5 Days',
            p:'Lorem ipsum dolor sit amet,consectetur adipisicing.'
        },
    ]
let card = data?.map((el,inx) =>(
        <div className="wrappir-all" key={inx}>
        <div className="wrappir-row">
            <div className="wrappir-list">
               <div className="box4">
               <div className="box3"></div>
               </div>
                   <h1>{el.h1}</h1>
                   <p>{el.p}</p>
            </div>
        </div>
    </div>
))

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

      <section className='bannir'>
       <div className="container">
        <div className="Bannir">
            <div className="Bannir-all">
                <h1>Admin panel</h1>
<div className="tig-p">
<p className='list-p2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.</p>
<p className='list-p'>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.
</p>
 <p className='list-p1'>
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
rerum quod. Tempora magni autem a voluptatibus neque.
 </p>
</div>

 <div className="bannir-all">
    <div className="bannir-row">
    <div className="bannir-list">
          <h1>0.1<span>k</span></h1> <br/>
          <h3>Vendors</h3>
        </div>

        <div className="bannir-list">
          <h1>23<span>k</span></h1> <br/>
          <h3>Customers</h3>
        </div>

        <div className="bannir-list">
          <h1>2<span>k</span></h1> <br/>
          <h3>Products</h3>
        </div>
    </div>
 </div>
            </div>
            <div className="Bannir-all">
                <img src="https://images.pexels.com/photos/7180966/pexels-photo-7180966.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
        </div>
       </div>
      </section>


      <div className="wrappir container">

        {card}
      </div>

            
            <Footer/>
        </div>
    );
}

export default Admin;
