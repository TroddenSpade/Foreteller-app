import axios from 'axios';
import { SIGN_UP_ADD,SIGN_IN_ADD,CHECK_TOKEN_ADD } from '../links';
import { SAVE_USER } from '../types';


export const signUp =(data,sCB)=>{
    return (dispatch) =>{
        axios.post(SIGN_UP_ADD,data)
        .then(response =>{
            if(response.data.signup){
                dispatch({type:SAVE_USER,payload:response.data})
                sCB();
            }else{
                console.log(response.data.err);
            }
        })
        .catch(err=>console.log(err))
    }
}

export const signIn=(data,sCB)=>{
    return (dispatch) =>{
        axios.post(SIGN_IN_ADD,data)
        .then(response=>{
            if(response.data.isAuth){
                console.log(response)
                dispatch({type:SAVE_USER,payload:response.data})
                sCB(response.data);
            }else{
                console.log(response.data.err);
            }
        })
        .catch(err=>console.log(err))
    }
}

export const checkToken =(data)=>{
    return (dispatch) =>{
        axios.post(CHECK_TOKEN_ADD,data)
        .then(response=>{
            if(response.data.valid){
                dispatch({type:SAVE_USER,payload:response.data})
            }else{
                console.log(response.data.err);
            }
        })
        .catch(err=>console.log(err))
    }
}