import React from "react";

import { useParams } from "react-router-dom";

import supabase from "../config/superbaseClient";

import { useState, useEffect } from "react";


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







    

   






