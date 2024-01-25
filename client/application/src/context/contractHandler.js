import {ethers, Web3Provider, Contract} from 'ethers';
import abi from './abi.json';

const contractAddress = '0x4E64af83F6F6C6163c70Ecd1DbA91c87B1C7Df2a';
export const updateEthers = async() => {
    try{
        let provider = new Web3Provider(window.ethereum);
        let signer = await provider.getSigner();
        let contractSigner = new Contract(contractAddress, abi, signer);
        let contract = await contractSigner.handleGetDonators(0);
    }
    catch(error){
        console.log("updatedEthers",error);
    }
}