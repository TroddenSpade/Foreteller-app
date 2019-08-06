import { GET_POLLS } from '../types';

export default function(state={polls:[]},action){
    switch(action.type){
        case GET_POLLS:
            return {
                polls:[...state.polls,...action.payload.polls],
                last:action.payload.polls[action.payload.polls.length-1]._id
            }
        default:
            return state;
    }
}