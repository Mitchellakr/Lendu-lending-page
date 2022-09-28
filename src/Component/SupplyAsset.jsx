import React from 'react'
import arrow from '../Images/arrow.svg'
import uniswap from '../Images/uniswap-icon.svg'
import bitcoin from '../Images/bitcoin-icon.svg'
import ethereum from '../Images/ethereum-icon.svg'

const SupplyAsset = () => {

    const tableData = [
        {
            id: 1,
            img: uniswap,
            name: "UniSwap",
            walletbalance: "Nil",
            Apy: "23",
            cbc: "YES",
            tSupply: "12M",
            tBorrow: "8M"
        },
        {
            id: 2,
            img: bitcoin,
            name: "Bitcoin",
            walletbalance: "40",
            Apy: "22.5",
            cbc: "-",
            tSupply: "2M",
            tBorrow: "2M"
        },
        {
            id: 3,
            img: ethereum,
            name: "Ethereum",
            walletbalance: "500",
            Apy: "17",
            cbc: "YES",
            tSupply: "62M",
            tBorrow: "5M"
        }
    ]

    return (
        <div className="my-8 mt-[4em] w-4/5 max-w-screen-xl mx-auto">
            <div className='flex items-center gap-2 pb-4'>
                <h2 className='text-xl'>Supply Asset</h2>
                <img className='pt-1 w-[20px]' src={arrow} alt="lending icon" />
            </div>

            <div className="max-w-screen-xl mx-auto">

                {/* Display for Desktop view */}

                {/* table head */}

                <table className="border-collapse w-full hidden md:table">
                    <thead>
                        <tr className='text-left'>
                            <th>
                                <div className='flex items-center gap-2'>
                                    <h2 className='text-[12px]'>Asset</h2>
                                    <div>
                                        <img className='w-[15px] rotate-180' src={arrow} alt="lending icon" />
                                        <img className='w-[15px]' src={arrow} alt="lending icon" />
                                    </div>
                                </div>
                            </th>
                            <th>wallet ballance</th>
                            <th>Apy</th>
                            <th>Can be collateral</th>
                            <th>Total suppled</th>
                            <th>Total borrowed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* table body */}

                    <tbody>
                        {
                            tableData.map((data) => (
                                <tr className='table-color machinalight' key={data.id}>
                                    <td className='flex items-center gap-2 py-3'>
                                        <img src={data.img} alt="crypto icon" />
                                        <p className='text-[16px]'>{data.name}</p>
                                    </td>
                                    <td className='py-3'>
                                        <p>${data.walletbalance}</p>
                                    </td>
                                    <td className='py-3'>
                                        <p>{data.Apy}%</p>
                                    </td>
                                    <td className='py-3'>
                                        <p>{data.cbc}</p>
                                    </td>
                                    <td className='py-3'>
                                        <p>${data.tSupply}</p>
                                    </td>
                                    <td className='py-3'>
                                        <p>${data.tBorrow}</p>
                                    </td>
                                    <td className='py-3'>
                                        <div className='flex items-center gap-2'>
                                            <button className="py-2 px-6 text-white rounded-full bg-[#181818]">Supply</button>
                                            <button href="" className='py-2 px-6 rounded-full border-solid border border-black'>Details</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SupplyAsset