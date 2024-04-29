import React from 'react';
import './Section.css'
import rasm1 from '../../imgs/nuut1.jpg'
import rasm2 from '../../imgs/nuut2.jpg'
import rasm3 from '../../imgs/nuut3.jpg'



const card = [
    {
        id:1,
        p:'Everyday Fresh & Clean with Our Products',
        btn:'Shop Now',
        img:rasm1
    },
    {
        id:2,
        p:'Make your Breakfast Healthy and Easy',
        btn:'Shop Now',
        img:rasm2
    },
    {
        id:3,
        p:'The best Organic Products Online',
        btn:'Shop Now',
        img:rasm3
    },


]
let Creat =card?.map((el,inx)=>(
    <div className="column" key={inx}>
    <div className="column-all">
      <p>{el.p}</p>
      <button>{el.btn}</button>  
    </div>
    <img src={el.img} alt="" />
</div>
)) 
const Section = () => {
    return (
        <div>
            <section>
                <div className="container">
                  <div className="row-all">
                    {Creat}
                  </div>
                </div>
            </section>

        </div>
    );
}

export default Section;
