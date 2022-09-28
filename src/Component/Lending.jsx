import React from 'react'
import lendingIcon from '../Images/lending-icon.svg'

const Lending = () => {
    const cardDatas = [
        {
            id: '1',
            hl: 'Total supply',
            hr: 'Your supply',
            dl: '325M',
            dr: '25.7K',
        },
        {
            id: '2',
            hl: 'Total Borrow',
            hr: 'Your Borrow',
            dl: '225M',
            dr: '24.6K',
        },
        {
            id: '3',
            hl: 'Net worth',
            hr: 'Net Apy',
            dl: '6K',
            dr: '2',
        },
    ]

    const [openTab, setOpenTab] = React.useState(1);


    return (

        <div className="my-8 mt-[4em] w-4/5 max-w-screen-xl mx-auto">
            <div className='flex items-center gap-2 pb-4'>
                <img src={lendingIcon} alt="lending icon" />
                <h2 className='text-xl'>Lending</h2>
            </div>

            {/* Desktop display  */}

            <div className="hidden sm:grid md:grid-cols-3 gap-4 grid-cols-1">
                {cardDatas.map((cardData) => (
                    <div key={cardData.id} className=" bg-white card-card relative grid grid-cols-2  p-8 rounded-[20px] border border-solid border-gray-400">
                        <div className='border-r border-gray-400 border-solid border-y-0 border-l-0'>
                            <h3 className='text-[14px] text-[#181818] '>{cardData.hl}</h3>
                            <p className='text-gray-400 text-[14px]'>${cardData.dl}</p>
                        </div>
                        <div className='flex items-end flex-col'>
                            <h3 className='text-[14px] text-[#181818] '>{cardData.hr}</h3>
                            <p className='text-gray-400 text-[14px]'>${cardData.dr}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* mobile view */}

            <div className='sm:hidden flex justify-center'>
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <div className="flex gap-2 p-1 rounded-full bg-[#dcdcdc3d]">
                        <div>
                            <button
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-[#181818] text-[#ffffff] rounded-full" : ""} inline-block px-8 py-2 text-gray-600 rounded-full text-[10px]`}
                            >
                                Supply
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-[#181818] text-[#ffffff] rounded-full" : ""} inline-block px-8 py-2 text-gray-600 rounded-full text-[10px]`}
                            >
                                Borrow
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => setOpenTab(3)}
                                className={` ${openTab === 3 ? "bg-[#181818] text-[#ffffff] rounded-full" : ""} inline-block px-8 py-2 text-gray-600 rounded-full text-[10px]`}
                            >
                                Nav
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-6 bg-white border">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            <div className=" bg-white card-card relative grid grid-cols-2  p-8 rounded-[20px] border border-solid border-gray-400">
                                <div className='border-r border-gray-400 border-solid border-y-0 border-l-0'>
                                    <h3 className='text-[14px] text-[#181818]'>{cardDatas[0].hl}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[0].dl}</p>
                                </div>
                                <div className='flex items-end flex-col'>
                                    <h3 className='text-[14px]'>{cardDatas[0].hr}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[0].dr}</p>
                                </div>
                            </div>
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            <div className=" bg-white card-card relative grid grid-cols-2  p-8 rounded-[20px] border border-solid border-gray-400">
                                <div className='border-r border-gray-400 border-solid border-y-0 border-l-0'>
                                    <h3 className='text-[14px] text-[#181818]'>{cardDatas[1].hl}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[1].dl}</p>
                                </div>
                                <div className='flex items-end flex-col'>
                                    <h3 className='text-[14px]'>{cardDatas[1].hr}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[1].dr}</p>
                                </div>
                            </div>
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            <div className=" bg-white card-card relative grid grid-cols-2  p-8 rounded-[20px] border border-solid border-gray-400">
                                <div className='border-r border-gray-400 border-solid border-y-0 border-l-0'>
                                    <h3 className='text-[14px] text-[#181818]'>{cardDatas[2].hl}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[2].dl}</p>
                                </div>
                                <div className='flex items-end flex-col'>
                                    <h3 className='text-[14px]'>{cardDatas[2].hr}</h3>
                                    <p className='text-gray-400 text-[14px]'>${cardDatas[2].dr}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Lending