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

    return (

        <div className="my-8 mt-[4em] w-4/5 max-w-screen-xl mx-auto">
            <div className='flex items-center gap-2 pb-4'>
                <img src={lendingIcon} alt="lending icon" />
                <h2 className='text-xl'>Lending</h2>
            </div>

            {/* Desktop display  */}

            <div className="hidden md:grid grid-cols-3 gap-4">
                {cardDatas.map((cardData) => (
                    <div key={cardData.id} className=" bg-white card-card relative grid grid-cols-2  p-8 rounded-[20px] border border-solid border-gray-400">
                        <div className='border-r border-gray-400 border-solid border-y-0 border-l-0'>
                            <h3 className='text-[14px]'>{cardData.hl}</h3>
                            <p className='text-gray-400 text-[14px]'>${cardData.dl}</p>
                        </div>
                        <div className='flex items-end flex-col'>
                            <h3 className='text-[14px]'>{cardData.hr}</h3>
                            <p className='text-gray-400 text-[14px]'>${cardData.dr}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* mobile view */}

        </div >
    )
}

export default Lending