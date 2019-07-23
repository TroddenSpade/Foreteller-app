import { SAVE_USER } from '../types';

export default function(state={},action){
    switch(action.type){
        case SAVE_USER:
            return action.payload.user;
        default:
            return state;
    }
}