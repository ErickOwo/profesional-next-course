import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (endPoint, alert) =>{
  const [data, setData] = useState(null);

  const fetchData = async (endPoint)=>{
    const response = await axios.get(endPoint);
    setData(response.data);
  };

  useEffect(()=>{
    try{
      fetchData(endPoint);
    }
    catch(error){
      console.log(error);
    }
  }, [alert]);

  return data;
};

export default useFetch;