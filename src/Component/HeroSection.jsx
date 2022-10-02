import React from 'react'
import heroimage from '../Images/hero-img.png'
import learnicon from '../Images/learn-icon.svg'

const HeroSection = () => {
    return (
        <section className="w-full pt-[8em]">
            <div className="relative w-11/12 max-w-screen-xl mx-auto rounded-[30px] shadow-3xl md:shadow-none items-center border border-solid border-gray-400 py-2 px-8 grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className='flex flex-col items-start '>
                    <div className="learn flex items-center gap-2 py-2">
                        <img src={learnicon} alt="learn icon" />
                        <h2 className='text-xl'>Learn</h2>
                    </div>
                    <p className='text-gray-400 capitalize py-2'>here you can get up to speed on all you need to know on all the features on lendu. earn points on completion</p>
                    <button className='sm:hidden py-2 px-6 rounded-full text-[10px] text-gray-500 bg-[#dcdcdc3d] border border-solid border-gray-500'>See More</button>
                    <div className="hidden sm:flex gap-2 items-center py-2">
                        <button className='py-2 px-6 rounded-full text-[10px] text-gray-500 bg-[#dcdcdc3d] border border-solid border-gray-500'>About Lending</button>
                        <button className='py-2 px-6 rounded-full text-[10px] text-gray-500 bg-[#dcdcdc3d] border border-solid border-gray-500'>About Staking</button>
                        <button className='py-2 px-6 rounded-full text-[10px] text-gray-500 bg-[#dcdcdc3d] border border-solid border-gray-500'>Click to see more</button>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={heroimage} className='md:flex hidden' alt="hero image" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection