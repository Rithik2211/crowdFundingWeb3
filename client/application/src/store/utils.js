import store from "./reducer";

export function updateRedux(type, action){
    store.dispatch({
        type : type,
        payload : action.data
    })
}

export function getUpdatedRedux(key){
    switch(key){
        case 'getCampaigns': 
            return store.getState().campaignData;
        case 'getDonators':
            return store.getState().donatorsData;
        case 'getWalletAddress':
            return store.getState().walletAddress;
        default : 
            return store.getState()
    }
}