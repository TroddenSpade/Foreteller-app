import axios from 'axios';
import { SIGN_UP_ADD,SIGN_IN_ADD } from '../links';
import { SIGN_UP,SIGN_IN } from '../types';


export const signUp =(data,sCB)=>{
    return (dispatch) =>{
        axios.post(SIGN_UP_ADD,data)
        .then(response =>{
            if(response.data.signup){
                dispatch({type:SIGN_UP,payload:response.data})
                sCB();
            }else{
                console.log(response.data.err);
            }
        })
        .catch(err=>console.log(err))
    }
}

export const signIn=(data)=>{
    return (dispatch) =>{
        axios.post(SIGN_IN_ADD,data)
        .then(response=>{
            if(response.data.isAuth){
                console.log(response,"payload data");
                dispatch({type:SIGN_IN,payload:response.data})
            }else{
                console.log(response.data.err);
            }
        })
        .catch(err=>console.log(err))
    }
}