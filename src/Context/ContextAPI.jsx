import { useEffect, useState } from "react";
import { createContext } from "react"
export const APIContext=createContext();
const ContextAPI = ({children}) => {
    const url="https://nalensrin123.github.io/API_JSON/api/api.json";
    const [coffees,setCoffee]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            const respone= await fetch(url);
            const data=await respone.json();
            setCoffee(data) 
        }
    
        
        fetchData();
    })
  return (
 
    <APIContext.Provider value={{ coffees }}>
        {children} 
    </APIContext.Provider>
  )
}

export default ContextAPI