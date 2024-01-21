import {ethers, BrowserProvider} from 'ethers';
import abi from './abi.json';

const contractAddress = process.env.CONTRACT_ADDRESS;
export const updateEthers = () => {
    let tempProvider = new BrowserProvider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    let contractSigner = new ethers.Contract(contractAddress, abi, tempSigner);

    return contractSigner;
}