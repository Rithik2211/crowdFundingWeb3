import React, {useContext, createContext} from 'react';
import {ethers} from 'ethers';
import abi from '../context/abi.json';


const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const privateKey = process.env.PRIVATE_KEY;

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();

    const wallet = new ethers.Wallet(privateKey, provider);
    const walletAddress = wallet.address;

    const contractAddress = process.env.CONTRACT_ADDRESS;
    const contractAbi = abi;
    const contractWithSigner = new ethers.Contract(contractAddress, contractAbi, signer);

    const publishCampaign = async(form) => {
        try{
            const data = await contractWithSigner.createCampaign(
                walletAddress,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            );
            console.log("contract call success",data);
        }
        catch(error){
            console.error("Error in the publish campaign",error);
        }
    }
    return <StateContext.Provider 
    value={{
        walletAddress,
        contractWithSigner,
        createCampaign : publishCampaign
    }}
    >
        {children}
    </StateContext.Provider>

}

export const useStateContext = () => useContext(StateContext);