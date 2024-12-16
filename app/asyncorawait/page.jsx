"use client";

import Loader from "@/components/Loader";
// await Keyword:
// await keyword async function ke andar use hota hai.
// jo ek promise ko wait karta hai jab tak wo resolve ya reject nahi ho jata.
// async or await with array method example:
// Axios ek JavaScript library hai jo HTTP requests ko asaan banaata hai
// Axios JavaScript mein HTTP requests ko handle karne ke liye ek powerful aur popular library hai. Iska use karke developers ko HTTP requests ko manage karne mein flexibility aur powerful tools milte hain, jo ki modern web applications ke development mein bahut upyogi sabit ho sakti hai.
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AsyncorAwait = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchingdata, setFetchingdata] = useState([]);
  console.log(fetchingdata);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://fakestoreapi.com/users");
        setFetchingdata(res.data);
        setIsLoading(false);

        toast.success("fetch data succesfully fetched");
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <Loader/>
  
  return <div></div>;
};

export default AsyncorAwait;
