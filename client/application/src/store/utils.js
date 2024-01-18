import store from "./reducer";

export function updateRedux(type, action){
    store.dispatch({
        type : type,
        payload : action
    })
}

export function getUpdatedRedux(key){
    switch(key){
        case 'getCampaigns': 
            return store.getState().campaignData;
        case 'getDonators':
            return store.getState().donatorsData;
        default : 
            return store.getState()
    }
}