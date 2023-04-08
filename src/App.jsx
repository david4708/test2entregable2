import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "./App.css";
import React from "react";
import Loader from "./components/Loader";

import Weather from "./components/Weather";
import {IoMdSearch} from 'react-icons/io'



function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("bucharest");
  const [inputValue, setInputValue] = useState("");
  const [temp, setTemp] = useState();

  const [loading, setLoading] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //if input value is not ampty

    if (inputValue !== "") {
      //set location
      setLocation(inputValue);
    }

    //select input
    const input = document.querySelector("input");

    //clear input
    input.value = "";

    //preventDefault
    e.preventDefault();
  };

  const APIkey = "c29f0387b6e71afa27247b01ac145ae9";
  //fecth the date

  useEffect(() => {
    setLoading(true);

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIkey}`;

    axios.get(URL).then((res) => {
      //set the data after 1500ms
      setTimeout(() => {
        setData(res.data);

        //set loading to false
        setLoading(false);
      }, 1500);

      const celsius = (res.data.main.temp - 273.15).toFixed(1);
      const fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);
      const newTemps = {
        celsius,
        fahrenheit,
      };
      setTemp(newTemps);
    }).catch(err=>{
      setLoading(false)
      setErrorMsg(err)
    })
  }, [location]);

  //error message

  useEffect(() => {
    const timer=setTimeout(()=>{
      setErrorMsg('')
    },2000)

    //clear time
    return ()=>clearTimeout(timer)

  }, [errorMsg])
  

  //if data is false show the loader

  if (!data) {
    return (
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="App grid place-content-center min-h-screen bg-[url('/images/bg.jpg')] bg-cover px-2">

    {errorMsg && <div className="w-full max-w-[90w] lg;max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md"> {`${errorMsg.response.data.message}`}</div>}
      <h2 className="text-center">React Weather App</h2>

      <form className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              onChange={(e) => handleInput(e)}
              /*   ref={inputRef} */
              type="text"
              className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-500 bg-slate-300/70 bg-clip-padding px-3 py-1.5 text-base font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
              placeholder="Search by city"
            />

            <button
              onClick={(e) => handleSubmit(e)}
              className="bg-green-500 w-6"
            >
            <IoMdSearch/>
            </button>
          </div>
        </div>
      </form>

      {loading ? <Loader /> : <Weather data={data} temp={temp} />}
    </div>
  );
}

export default App;

/* <IoMdSearch className='text-white'/> */
