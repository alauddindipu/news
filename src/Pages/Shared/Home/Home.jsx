import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import BreakingNews from '../../BreakingNews';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            
            
            <Navbar></Navbar>
        
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-8'>
                <div ><LeftSidebar/></div>
                <div className='md:col-span-2'>Home</div>
                <div>Right Side</div>
            </div>
        </div>
    );
}

export default Home;
