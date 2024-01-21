import {ethers} from 'ethers';
import abi from '../context/abi.json';

const contractAddress = "0x4E64af83F6F6C6163c70Ecd1DbA91c87B1C7Df2a";
export const updateEthers = () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    let tempSigner = tempProvider.getSigner();
    let contractSigner = new ethers.Contract(contractAddress, abi, tempSigner);
}