import React from "react";


import { useParams } from "react-router-dom";

import supabase from "../config/superbaseClient";

import { useState, useEffect } from "react";



const Loader = () => {

  return (

    <div className="flex justify-center items-center h-full">

      <svg

        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"

        xmlns="http://www.w3.org/2000/svg"

        fill="none"

        viewBox="0 0 24 24"

      >

        <circle

          className="opacity-25"

          cx="12"

          cy="12"

          r="10"

          stroke="currentColor"

          strokeWidth="4"

        ></circle>

        <path

          className="opacity-75"

          fill="currentColor"

          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10 0l3 2.647A7.962 7.962 0 0120 12h-4a7.963 7.963 0 01-2 5.291z"

        ></path>

      </svg>

      <span>Loading...</span>

    </div>

  );

};

const SingleArticle = () => {

  const [allData, setAllData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams("");

  const fetchData = async () => {

    setIsLoading(true);

    const { data, error } = await supabase

      .from("articles")

      .select("*")

      .eq("id", id);

    if (error) {

      setErrorMessage("Could not connect");

    } else {

      setAllData(data);

    }

    setIsLoading(false);

  };

  useEffect(() => {

    fetchData();

  }, []);

  if (isLoading) {

    return <Loader />;

  }

  if (errorMessage) {

    return <div className="text-red-500">{errorMessage}</div>;

  }

  return (

    <div className="mb-10">

      {allData.map((data) => {

        return (

          <div className="px-7 mt-3 font-semibold text-gray-700" key={data.id}>

            <img

              className="mt-3 lg:px-32 md:px-16 rounded-md"

              src={data.img}

              alt={data.title}

            />

            <div className="mt-5 lg:px-32 md:px-16">

              <h3 className="text-3xl">{data.title}</h3>

              <span className="inline-block mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

                {`#${data.category}`}

              </span>

              <p className="mt-2 text font-normal">

                Original Post:{" "}

                <a className="underline text-green-500" href={data.orglink}>

                  Click here

                </a>

              </p>

              <p className="text-lg font-normal mt-5">{data.para}</p>

            </div>

          </div>

        );

      })}

    </div>

  );

};

export default SingleArticle;







    

   






