import { parseEther } from 'ethers';

export const contractFuctions = {
    handleCreateCampaigns : async(instance, form)=> {
        try{
            const {signer, contractSigner} = instance;
            const signerAdd = await signer.getAddress();
            const campaignId = await contractSigner.createCampaign(
                signerAdd,
                form.title,
                form.description,
                parseEther(form.target),
                Math.floor((new Date(form.deadline)).getTime() / 1000),
                parseEther('0'),
                form.image,
            );
            console.log("New campaign created with ID:", campaignId);
        }
        catch(err){
            console.log("Error in Creating Campaign",err);
        }
    },
    handleDonateToCampaigns : async() => {

    },
    handleGetDonators : async() => {

    },
    handleGetCampaigns : async() => {

    }
}
