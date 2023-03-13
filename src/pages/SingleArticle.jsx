import React from "react";
import { useParams } from "react-router-dom";
import supabase from "../config/superbaseClient";
import { useState, useEffect } from "react";

const SingleArticle = () => {
  const [allData, setAllData] = useState([]);
  const { id } = useParams("");
  const fetchData = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", id);

    if (error) {
      setAllData("Could not connect");
    }
    console.log(data);
    setAllData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mb-10">
      {allData.map((data) => {
        return (
          <div className="px-7 mt-3 font-semibold text-gray-70">
          <img className="mt-3 lg:px-32 md:px-16 rounded-md" src={data.img}/>
            
            <div className="mt-5 lg:px-32 md:px-16">
              <h3 className="text-2xl">{data.title}</h3>
              <span className="inline-block mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2] mb-2">
                  {`#${data.category}`}
                </span>
              <p className="mt-2 text font-normal">
                Original Post:{" "}
                <a className="underline text-green" href={data.orglink}>
                  Click here
                </a>
              </p>
              <p className="text-base font-normal mt-5">{data.para}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleArticle;
