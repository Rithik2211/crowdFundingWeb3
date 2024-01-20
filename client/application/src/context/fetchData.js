import {ethers} from 'ethers';
// import abi from '../context/abi.json';

const privateKey = process.env.PRIVATE_KEY;

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = provider.getSigner();

export const wallet = new ethers.Wallet("019a170367f89ceb4a3aff3f97798b236b191ebf572b9d1261c711f815c95fb3", provider);
export const walletAddress = wallet.address;

const contractAddress = "0x4E64af83F6F6C6163c70Ecd1DbA91c87B1C7Df2a";
const contractAbi = '';
const contractWithSigner = new ethers.Contract(contractAddress, contractAbi, signer);

export const publishCampaign = async(form) => {
    try{
        const data = await contractWithSigner.createCampaign(
            walletAddress,
            form.title,
            form.description,
            form.target,
            new Date(form.deadline).getTime(),
            form.image
        );
        console.log("Contract call success",data);
    }
    catch(error){
        console.error("Error in the publish campaign",error);
    }
}

export const campaignDonation = async(id) => {
    try{
        const data = await contractWithSigner.donateToCampaigns(id);
        console.log("Donation call success",data);
    }
    catch(err){
        console.log("Error in the Donating the campaign",err);
    }
}

export const handleGetCampaigns = () => {
    try{
        const data = contractWithSigner.getCompaigns();
        console.log("Getter call success",data);
        return data;
    }
    catch(error){
        console.log("Error in the Getting the campaign",error);
    }
}

export const handleGetDonators = (id) => {
    try{
        const data = contractWithSigner.getDonators(id);
        console.log("Get Donator call success",data);
    }
    catch(error){
        console.log("Error in the Get Donator",error);
    }
}