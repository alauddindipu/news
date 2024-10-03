import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-warning'>Latest News</button>
            
            <Marquee pauseOnHover={true}>
                Prime Minister paliase
            </Marquee>

        </div>
    );
}

export default BreakingNews;
