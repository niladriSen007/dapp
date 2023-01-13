import React, { useState } from 'react'

const Hero = ({account}) => {

  

    // const handleMetamask = async() =>{
    //     const accounts = await window.ethereum.request({method:"eth_requestAccounts"})
    //     // setAccount(accounts)
    // }

  return (
    <div className='w-full h-30 flex flex-col items-center justify-center gap-6 my-12'>
        <h2><span >Balance</span> : <span className='font-bold'>20 ETH</span></h2>
        <p>Account : <span className='font-bold'>{account}</span></p>
        <div className='flex gap-3 items-center justify-center '>
            {/* <button className='p-2 bg-gray-500 text-white rounded-lg cursor-not-allowed' disabled  onClick={handleMetamask}>Connect to Metamask</button> */}
            <button className='p-2 bg-red-700 text-white rounded-lg'>Transfer</button>
            <button className='p-2 bg-sky-700 text-white rounded-lg'>Withdraw</button>
        </div>
    </div>
  )
}

export default Hero