//1st create a context;
// 2nd  provider;
//3rd Consumer => UseContext hook;

import  axios  from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/productReducers";


const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState ={
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : []
}

const AppProvider = ({ children }) => {

    const[state,dispatch] = useReducer(reducer,initialState)

    const getProducts = async(Url)=>{
        dispatch({type:"SET_LOADING"})
      try {
        const res = await axios.get(Url);
        const products = await res.data;
        console.log("hiiiii",products);
        dispatch({type:"SET_API_DATA",payload:products});
      } catch (error) {
        dispatch({type:"API_ERROR"})
      }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    return (
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
};

//Custom hook;

const useProductContext = () => {
    return useContext(AppContext);
}


export { AppProvider, AppContext, useProductContext };