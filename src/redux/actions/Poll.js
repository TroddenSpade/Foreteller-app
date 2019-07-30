import axios from 'axios';
import { CREATE_POLL_ADD } from '../links';
import { ADD_POLL } from '../types';

export const createPoll =(data,sCB)=>{
    return (dispatch) =>{
        axios.post(CREATE_POLL_ADD,data)
        .then(response =>{
            if(response.data.created){
                dispatch({type:ADD_POLL,payload:response.data})
                sCB();
            }else{
                console.log(response.data.err.message);
            }
        })
        .catch(err=>console.log(err))
    }
}