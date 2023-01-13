import React, { useEffect, useState } from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import  Web3 from "web3"
import { loadContract } from './utils/load_contract'
import detectEthereumProvider from '@metamask/detect-provider'


const App = () => {

  const [web3Api,setWeb3Api] = useState({
    provider:null,
    web3:null,
    contract:null,
  })

  const [account,setAccount] = useState(0)

  useEffect(()=>{
    const loadProvider = async() =>{
      // console.log(window.web3)
      // console.log(window.ethereum);
      // let provider = null;


      //automatically open metamask when browser loads
      // if(window.ethereum)
      // {
      //     provider = window.ethereum;
      //     try
      // {
      //   //ei line tar jonne browser open korle metamask automatically open hocche
      //   await provider.enable();
      // }
      // catch(e)
      // {
      //   console.log(e);
      // }
      // }
      // else if(window.web3)
      // {
      //   provider = window.web3.currentProvider;

      // }
      // else if(!process.env.production)
      // {
      //   provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
      // }
      const provider = await detectEthereumProvider()
      const newContract = await loadContract("Funder",provider)
      if(provider)
      {
        provider.request({method:"eth_requestAccounts"})
        setWeb3Api({
        provider,
        web3:new Web3(provider),
        contract:newContract,
      })
      // const accountsNew =await web3Api.web3.eth.getAccounts();
      // setAccount(accountsNew[0])
      }
      else
      {
         console.error('Please install MetaMask!')
      }
      // setWeb3Api({
      //   provider,
      //   web3:new Web3(provider)
      // })
    }
    loadProvider()
  },[])

  useEffect(()=>{
    const getAccount = async() =>{
      const accountsNew =await web3Api.web3.eth.getAccounts();
      setAccount(accountsNew[0])
    }
    web3Api.web3 &&  getAccount()
  },[web3Api.web3])

  

  return (
    <div>
      <Navbar />
      <Hero account={account?account:"Not Connected"}/>
    </div>
  )
}

export default App