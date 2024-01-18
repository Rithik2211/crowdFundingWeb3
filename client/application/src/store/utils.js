import storeReducer from "./reducer";

let store = storeReducer();

export function updateRedux(type, action){
    store.dispatch({
        type : type,
        payload : action
    })
}

export function getUpdatedRedux(key){
    switch(key){
        case 'getCampaigns': 
            return store.getState()
        case 'getDonators':
            return store.getState()
        default : 
            return store.getState()
    }
}