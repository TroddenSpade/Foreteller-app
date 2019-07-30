import AsyncStorage from '@react-native-community/async-storage';

export const setToken = (data)=>{
    console.log(data)
    AsyncStorage.multiSet([
        ['@Foreteller@id',data._id],
        ['@Forteller@token',data.token]
    ]).then(()=>console.log("Token Has Been Set"));
}

export const getToken = ()=>{
    return AsyncStorage.multiGet([
        '@Foreteller@id',
        '@Forteller@token'
    ]).then(res=>{
        if(res[0][1] && res[1][1])
            return {
                id: res[0][1],
                token: res[1][1]
            };
        else
            return null;
    })
    .catch(e=>console.log(e));
}

export const removeToken =(CBfunction)=>{
    AsyncStorage.multiRemove([
        '@Foreteller@id',
        '@Forteller@token'
    ]).then(()=>CBfunction());
}