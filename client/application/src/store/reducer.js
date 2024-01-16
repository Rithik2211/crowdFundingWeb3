import {createStore} from 'redux';

export const actions = {
    CREATE_CAMPAIGNS : "CREATE_CAMPAIGNS",
    GET_CAMPAIGNS : "GET_CAMPAIGNS",
    DONATE_TO_CAMPAIGNS : "DONATE_TO_CAMPAIGNS",
    GET_DONATORS : "GET_DONATORS"
}

let structure = {
    campaignData : [],
    donatorsData : [],
    isActive : true
}

const campaignReducer = (state = structure, action) => {
    switch(action.type){
        case "CREATE_CAMPAIGNS" : 
         return {...state, campaignData : [...state.campaignData, action.data ]};
        case "DONATE_TO_CAMPAIGNS" : {

        }
        case "GET_CAMPAIGNS" : {
            return state.campaignData;
        }
        case "GET_DONATORS" : {
            return state.donatorsData;
        }
        default : 
            return state; 
    }
}

const store = createStore(campaignReducer);

export default store;