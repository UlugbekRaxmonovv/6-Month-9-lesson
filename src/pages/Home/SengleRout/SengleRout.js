import React,{useEffect,useState} from 'react';
import './SengleRout.css'
import { useParams } from 'react-router-dom';
import { MdArrowRightAlt } from "react-icons/md";
import { FaFacebookF, FaYoutube,FaSquareInstagram } from "react-icons/fa6";
import axios from '../../../api/logo';

const SengleRout = () => {
    const {id} = useParams()
    const [prodact,setProdact] = useState(null)
      useEffect(()=> {
         axios
         .get(`/products/${id}`) 
         .then(ris => setProdact(ris.data))
         .catch(arr=>console.log(arr))
      }, []);
  
    return (
        <>
             <section className='SingleRoute'>
            <div className="container">
                 <div className="SingleRoute-all">
                    <div className="SingleRoute-row">
                      <h1>Our internal <br /> process and <br /> longerm vision</h1> 
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
                      <div className="list-all">
                      <div className="list-etim">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                    <div className="SingleRoute-all">
                 <img src={prodact?.thumbnail} alt="" />
                    </div>
                 </div>
  


                
            </div>

          </section>
          <section className='SingleRoute-list container'>
          <div className="h1">
                <h1>All posts</h1>
              </div>
                 <div className="all-img">
                 <div className="row-img">
                        <img src={prodact?.images[3]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        {/* <MdArrowRightAlt /> */}
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[1]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        {/* <MdArrowRightAlt /> */}
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[2]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        {/* <MdArrowRightAlt /> */}
                        </div>
                      </div>
                      
                    </div>
                    <div className="row-img">
                        <img src={prodact?.images[1]}alt="" />
                        <h1>Why you have to digitalize in 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                        <div className="list-all1">
                      <div className="list-etim1">
                      <h4>Read More</h4>
                        </div>
                        <div className="list-etim1">
                        <MdArrowRightAlt />
                        </div>
                      </div>
                      
                    </div>
                 </div>
          </section>


          
          </>
    );
}

export default SengleRout;
