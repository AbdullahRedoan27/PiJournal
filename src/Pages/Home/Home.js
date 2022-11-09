import React from 'react';
import useTitleHook from '../../Hooks/useTitleHook';
import Banner from './Banner/Banner';
import ClientResponse from './ClientResponse/ClientResponse';
import HomeService from './HomeService/HomeService';
import Stats from './Stats/Stats';

const Home = () => {
    useTitleHook("Home")
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <Stats></Stats>
            <ClientResponse></ClientResponse>
        </div>
    );
};

export default Home;