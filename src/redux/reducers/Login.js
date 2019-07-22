import { SIGN_UP,SIGN_IN } from '../types';

export default function(state={},action){
    switch(action.type){
        case SIGN_IN:
            return action.payload.user;
        case SIGN_UP:
                return action.payload.user;
        default:
            return state;
    }
}