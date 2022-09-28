import React from 'react'
import { useState } from 'react'
import burgermenu from "../Images/burgermenu-icon.svg"

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => { setNav(!nav); }

    return (
        <>

            {/* this is the header section*/}

            <header className='w-full fixed bg-white shadow z-50'>
                <div className="w-4/5 max-w-screen-xl mx-auto flex md:items-center justify-between py-4 item-start ">
                    <h1 className='text-2xl mr-20'>Lendu</h1>

                    {/* Desktop Nav */}

                    <nav className='mr-auto flex items-center justify-between w-full hidden md:flex'>
                        <button className="py-2 px-6 text-white rounded-full bg-[#181818]">Dashboard</button>
                        <a href="" className='text-gray-400'>Market</a>
                        <a href="" className='text-gray-400'>Stake</a>
                        <a href="" className='text-gray-400'>Governance</a>
                        <a href="" className='py-1 px-4 rounded-full border-solid border border-black'>OPts</a>
                        <a href="" className='py-1 px-4 rounded-full border-solid border border-black'>0ETH</a>
                        <button className="py-2 px-6 text-white rounded-full bg-[#181818] backdrop relative">008xx..xscze....</button>
                    </nav>

                    {/* Mobile Nav */}

                    <nav className={`md:hidden z-50 flex flex-col gap-4 left-0 right-0 fixed sm:left-[40%] top-[70px] items-center p-8 pt-6 sm:w-1/2 bg-black text-white sm:rounded-[20px] ${nav ? 'flex' : 'hidden'}`}>
                        <button className="py-2 px-6 text-black rounded-full bg-white">Dashboard</button>
                        <a href="" className='text-gray-400'>Market</a>
                        <a href="" className='text-gray-400'>Stake</a>
                        <a href="" className='text-gray-400'>Governance</a>
                        <a href="" className='py-1 px-4 rounded-full border-solid border border-white'>OPts</a>
                        <a href="" className='py-1 px-4 rounded-full border-solid border border-white'>0ETH</a>
                        <button className="py-2 px-6 text-black rounded-full bg-white">008xx..xscze....</button>
                    </nav>

                    {/* menu icon */}

                    <img src={burgermenu} className="md:hidden backdropmenu relative" alt="burger menu" onClick={handleNav} />
                </div>
            </header>
        </>
    )
}

export default Navbar

