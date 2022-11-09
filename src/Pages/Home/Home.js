import React from 'react';
import Banner from './Banner/Banner';
import HomeService from './HomeService/HomeService';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Stats></Stats>
        </div>
    );
};

export default Home;