import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Main from '../../component/Main/Main'
import App1 from '../../component/App1/App1'
import Bottom from '../../component/Bottom/Bottom'
import Footer from '../../component/Footer/Footer'
import Section from '../../component/Section/Section'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Section/>
            <App1/>
            <Bottom/>
            <Footer/>
        </div>
    );
}

export default Home;
