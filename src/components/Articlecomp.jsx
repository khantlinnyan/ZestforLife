import React from "react";
import supabase from "../config/superbaseClient";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articlecomp = () => {

  const [fetchData, setFetchData] = useState([]);
  const dataFetch = async () => {
    const { data, error } = await supabase.from("articles").select("*");

    if (data) {
      setFetchData(data);
    }
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="flex flex-col items-center mt-3">
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold text-[#007E46]">Articles</h1>
        <div className="bg-[#013B52] w-[150px] h-1"></div>
      </div>
      <div className="p-10 grid grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-x-[70px] lg:grid-row-2 lg:grid-cols-3">
        {fetchData.map((currentData) => {
          return (
            <div
              className="max-w-[400px] my-[15px] md:my-[30px] rounded overflow-hidden shadow lg:shadow-md bg-slate-50"
              key={currentData.id}
            >
              <img
                className="w-full h-[200px] object-contain rounded-lg"
                src={currentData.img}
                alt={currentData.title}
              />
              <div className="px-6 py-4">
                <div className="text-[#013B52] font-bold text-xl mb-2">
                  {currentData.title}
                </div>
                <button className="bg-[#007E46] py-2 px-4 text-sm md:my-2 md:text-lg my-4 rounded-lg text-white">
                  <Link to={"/articles/"+currentData.id}>Read</Link>
                </button>
              </div>

              <div className="px-6 pt-3 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 text-[#013B52] mb-2">
                  {`#${currentData.category}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articlecomp;
