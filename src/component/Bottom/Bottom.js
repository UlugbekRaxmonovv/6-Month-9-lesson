import React from 'react';
import './Bottom.css'
import  rasm1 from '../../imgs/tili.png'
import  rasm2 from '../../imgs/piopli.avif'
import  rasm3 from '../../imgs/ilmoq.png'
import  rasm4 from '../../imgs/ilmoq1.png'
import  rasm5 from '../../imgs/ilmoq2.png'
import  rasm6 from '../../imgs/ilmoq3.png'



const Bottom = () => {
    const creat =[
        {
            id:1,
            h1:'Stay home & get your dailyneeds from our shop',
            p:"Start You'r Daily Shopping with Nest Mart",
            img:rasm1,
            btn:'Subscribe'

        }
    ]


    const creatAll =[
        {
            id:1,
            img:rasm3,
            h1:'Best prices & offers',
            p:'Orders $50 or more'
        },
        {
            id:2,
            img:rasm4,
            h1:'Free delivery',
            p:'24/7 amazing services'
        },
        {
            id:3,
            img:rasm5,
            h1:'Great daily deal',
            p:'When you sign up'
        },
        {
            id:4,
            img:rasm6,
            h1:'Wide assortment',
            p:'Mega Discounts'
        },

    ]

    let creatCard =creatAll?.map((el,inx) =>(
        <div className="list-all">
        <div className="list-row">
           <img src={el.img} alt="" />
            </div>
            <div className="list-row">
         <h1>{el.h1}</h1>
         <p>{el.p}</p>
            </div>
        </div>
    ))
    let creats =creat?.map((el,inx) =>(
        <div className="produc-all" key={inx}>
        <h1>{el.h1}</h1>
        <p>{el.p}</p>
        <div className="gmail">
          <div className="gmail-row">
          <div className="gmail-all">
                  <img src={el.img} alt="" />
              </div>
              <div className="gmail-all">
                 <input type="text" placeholder='Your emaill address' />
              </div>
          </div>
         <button>{el.btn}</button>
        </div>
      </div> 
    ))
    return (
        <div>
            <section>
                <div className="container">
                    <div className="produc">
                    {creats}
                    <div className="produc-all">
                    <img src={rasm2} alt="" />
    
                    </div>
                    </div>
                    <div className="list">
                    {/* <div className="list-all">
                    <div className="list-row">
                       <img src={rasm3} alt="" />
                        </div>
                        <div className="list-row">
                     <h1>Best prices & offers</h1>
                     <p>Orders $50 or more</p>
                        </div>
                    </div> */}
                    {creatCard}
                </div>
                </div>
              
            </section>
        </div>
    );
}

export default Bottom;
