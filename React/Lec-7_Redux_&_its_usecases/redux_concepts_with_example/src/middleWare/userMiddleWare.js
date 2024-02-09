import UserSlice from '../redux/slice/UserSlice'
import Axios from 'axios';

export const fetchUserMiddleware = async(dispatch, uid) =>{
    dispatch(UserSlice.actions.fetchDataStart());
    try{
        const url = `https://jsonplaceholder.typicode.com/users/${uid}`
        const response = await Axios.get(url)
        dispatch(UserSlice.actions.fetchDataSuccess(response.data));
    }catch(error){
        dispatch(UserSlice.actions.fetchDataFailure(error));
    }
}