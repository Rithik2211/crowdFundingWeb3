import {ethers, BrowserProvider, Contract} from 'ethers';
import abi from './abi.json';

const contractAddress = '0x4E64af83F6F6C6163c70Ecd1DbA91c87B1C7Df2a';
export const updateEthers = async() => {
    try{
        let provider = new BrowserProvider(window.ethereum);
        let signer = await provider.getSigner();
        let contractSigner = new Contract(contractAddress, abi, signer);
        return contractSigner;
    }
    catch(error){
        console.log("updatedEthers",error);
    }
}