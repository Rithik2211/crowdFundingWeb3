import React, {useContext, createContext} from 'react';
import {ethers} from 'ethers';
import {useAddress, useContract, useMetamask, useConractWrite} from '@thirdweb-dev/react';
import abi from '../context/abi.json';
require('dotenv').config();


const stateContext = createContext();

export const StateContextProvider = async({children}) => {
    const privateKey = procress.env.PRIVATE_KEY;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const wallet = new ethers.Wallet(privateKey, provider);

    const contractAddress = procress.env.CONTRACT_ADDRESS;
    const contractAbi = abi;
    const contractWithSigner = new ethers.Contract(contractAddress, contractAbi, signer);
    
    
}