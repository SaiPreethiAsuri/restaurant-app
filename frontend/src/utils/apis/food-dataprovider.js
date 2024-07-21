import { getData, postData } from './api-dataprovider';

const getFood=async(path)=>{
try{
    return await getData(path)
}catch(error){
    console.log(error)
}
}

const addFoodItem=async(path,data)=>{
    try{
        return await postData(path,data)
    }catch(error){
        console.log(error)
    }
}

export {getFood,addFoodItem};