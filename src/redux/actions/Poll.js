import axios from 'axios';
import { CREATE_POLL_ADD,GET_POLLS_ADD } from '../links';
import { ADD_POLL,GET_POLLS } from '../types';

const INITIAL_ID = 'ffffffffffffffffffffffff';

export const createPoll =(data,sCB)=>{
    return (dispatch) =>{
        console.log(data)
        axios.post(CREATE_POLL_ADD,data)
        .then(response =>{
            console.log(data)
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

export const getPolls =(lastid=INITIAL_ID)=>{
    return (dispatch) =>{
        axios.get(GET_POLLS_ADD+`?id=${lastid}`)
        .then(response =>{
            console.log(response)
            if(response.data.valid)
                dispatch({type:GET_POLLS,payload:response.data})
        })
        .catch(err=>console.log(err))
    }
}