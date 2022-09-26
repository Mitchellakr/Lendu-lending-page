import React from 'react';
import HeroSection from './Component/HeroSection';
import Lending from './Component/Lending';
import Navbar from './Component/Navbar';

export default function App() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Lending/>
        </>
    );
}
