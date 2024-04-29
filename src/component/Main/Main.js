import React from 'react';
import './Main.css'
import rasm1 from '../../imgs/noutbuk.jpg'
import rasm2 from '../../imgs/tili.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay} from 'swiper/modules';

const data =[ 
    {
        id:1,
        span: '100%',
        p:'Organic Vegetables',
        h1:'The best way to stuff your wallet',
        p1:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amereiciendis beatae consequuntur.',
        img:rasm2,
        btn: 'submit',
    }   
    
]
const creat =[
    {
        id:1,
        p:'x',
        span:'Shopping'
    },
    {
        id:2,
        p:'x',
        span:'Recips'
    },
    {
        id:1,
        p:'x',
        span:'Kitchen'
    },
    {
        id:1,
        p:'x',
        span:'News'
    },
    {
        id:1,
        p:'x',
        span:'Food'
    },
]
let card = data?.map((el,inx) =>(
    <div className="card" key={inx}>
                        <div className="card-all">
                            <div className="span-all">
                            <span>{el.span}</span>
                            <p> {el.p}</p>
                         </div>
                         <h1>{el.h1}</h1>
                         <p>{el.p1}</p>
                        <div className="btn">
                            <div className="btn1">
                            <div className="btn2">
                             <img src={el.img} alt="" />
                              </div>  <div className="btn2">
                              <input type="text"  placeholder='Your emaill address'/>
                              </div>
                            </div>
                            <button>{el.btn}</button>
                        </div>
                        </div>
                    </div>  
))

let cards = creat?.map((el,inx) =>(
    <div className="button-all" key={inx}>
    <div className="button-row">
        <pre>{el.p} <span>{el.span}</span></pre>
    </div>
</div>
))
const Main = () => {
    return (
        <div>
            <section>
                <div className="container">
    <div className="row">
      {card}
      <div className="card">
     <div className="button">
        {cards}
     </div>
    
      </div>
      <Swiper loop={true}
       navigation={true}
       autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
        modules={[Navigation,Autoplay]}
         className="mySwiper" style={{marginLeft:'60%',marginTop:'-40%'}}>
      <SwiperSlide><img className='imagi' src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-image-of-two-business-people-working-with-laptop-and-computer-late-at-night-in-their-office_HILxdmO2l_thumb.jpg' alt="" /></SwiperSlide>
      <SwiperSlide><img className='imagi' src='https://img.freepik.com/free-photo/multi-ethnic-group-young-people-studying-with-laptop-computer_1139-984.jpg' alt="" /></SwiperSlide>
      <SwiperSlide><img className='imagi' src='https://img.freepik.com/free-photo/young-interracial-couple-spending-nice-time-together-cafe_273609-8989.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709856000&semt=ais' alt="" /></SwiperSlide>
      <SwiperSlide><img className='imagi' src='https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-image-of-two-business-people-working-with-laptop-and-computer-late-at-night-in-their-office_HILxdmO2l_thumb.jpg' alt="" /></SwiperSlide>
     
      </Swiper>

    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;
