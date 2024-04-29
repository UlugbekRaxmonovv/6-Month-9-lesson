import React  from 'react';
import './Footer.css'
import rasm2 from '../../imgs/map.png'
import rasm3 from '../../imgs/gmail.png'
import rasm4 from '../../imgs/fon.png'
import rasm5 from '../../imgs/tiligram.png'
import rasm6 from '../../imgs/fiz.png'
import rasm7 from '../../imgs/x.png'
import rasm8 from '../../imgs/yir.png'
import rasm9 from '../../imgs/insta.png'
import rasm10 from '../../imgs/tabiat.png'
import rasm11 from '../../imgs/tabiat3.png'
import rasm12 from '../../imgs/tabiat4.png'
import rasm13 from '../../imgs/tozalan.png'
const Footer = () => {
    return (
        <div>
         <section className='footer'>
            <div className="container">
                <footer>
                    <div className="footer-all">
                    <div className="footer-row">
                            <ul>
                                <h1><img src={rasm13} alt="" /></h1>
                                <li>
                                   <p>FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                                </li>
                                <li>
                                   <div className="map">
                                   <div className="map-all">
                                        <img src={rasm2} alt="" />
                                        </div>
                                        <div className="map-all">
                                        <p>51 Green St.Huntington ohaio beach ontario, NY11746 KY 4783, USA.</p>
                                    </div>
                                   </div>
                                </li>
                                <li>
                                   <div className="map">
                                   <div className="map-all">
                                        <img src={rasm2} alt="" />
                                        </div>
                                        <div className="map-all">
                                        <p>51 Green St.Huntington ohaio beach ontario, NY11746 KY 4783, USA.</p>
                                    </div>
                                   </div>
                                </li>
                                <li>
                                   <div className="map">
                                   <div className="map-all">
                                        <img src={rasm3} alt="" />
                                        </div>
                                        <div className="map-all">
                                        <p>example@email.com</p>
                                    </div>
                                   </div>
                                </li>
                                <li>
                                   <div className="map">
                                   <div className="map-all">
                                        <img src={rasm4} alt="" />
                                        </div>
                                        <div className="map-all">
                                        <p>+91 123 4567890</p>
                                    </div>
                                   </div>
                                </li>
                              
                            </ul>
                        </div>

                        <div className="footer-row">
                            <ul>
                                <h1>Company</h1>
                                <li>
                                  <a href="" className="">About Us</a>
                                </li>
                                <li>
                                  <a href="" className="">ADelivery Information</a>
                                </li>
                                <li>
                                  <a href="" className="">Privacy Policy</a>
                                </li>
                                <li>
                                  <a href="" className="">Privacy Policy</a>
                                </li>
                                <li>
                                  <a href="" className="">contact Us</a>
                                </li>
                                <li>
                                  <a href="" className="">Support Center</a>
                                </li>
                                
                             
                            </ul>
                        </div>


                        <div className="footer-row">
                            <ul>
                                <h1>Category</h1>
                                <li>
                                   <a href="" className="">Dairy & Bakery</a>
                                </li>
                                <li>
                                   <a href="" className="">Fruits & Vegetable</a>
                                </li>
                                <li>
                                   <a href="" className="">Snack & Spice</a>
                                </li>
                                <li>
                                   <a href="" className="">Juice & Drinks</a>
                                </li>
                                <li>
                                   <a href="" className="">Chicken & Meat</a>
                                </li>
                                <li>
                                   <a href="" className="">Chicken & Meat</a>
                                </li>
                              
                              
                            </ul>
                        </div>



                        <div className="footer-row">
                            <ul>
                                <h1>Subscribe Our Newsletter</h1>
                                <li>
                                  <div className="input-all-row">
                                  <div className="input-all-row-input">
                                        <input type="text" placeholder='Search here...' />
                                    </div>
                                    <div className="input-all-row-input">
                                        <img src={rasm5} alt="" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="ikon-row">
                                  <div className="ikon-all1">
                                        <img src={rasm6} alt="" />
                                    </div>
                                    <div className="ikon-all1">
                                        <img src={rasm7} alt="" />
                                    </div>
                                    <div className="ikon-all1">
                                        <img src={rasm8} alt="" />
                                    </div>
                                    <div className="ikon-all1">
                                        <img src={rasm9} alt="" />
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="tabiat">
                                  <div className="tabiat-all">
                                        <img src={rasm10} alt="" />
                                    </div>
                                    <div className="tabiat-all">
                                        <img src={rasm11} alt="" />
                                    </div>
                                    <div className="tabiat-all">
                                        <img src={rasm12} alt="" />
                                    </div>
                                    <div className="tabiat-all">
                                        <img src={rasm10} alt="" />
                                    </div>
                                    <div className="tabiat-all">
                                        <img src={rasm11} alt="" />
                                    </div>
                                  </div>
                                </li>

                              
                              
                            </ul>
                        </div>

                        
                    </div>
                </footer>
            </div>
         </section>
        </div>
    );
}

export default Footer;
