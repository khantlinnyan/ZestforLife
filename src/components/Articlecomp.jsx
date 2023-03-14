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
      <div className="flex flex-col items-center space-y-2 mt-6">
        <h1 className="text-4xl font-bold text-green-500">Articles</h1>
      </div>
      <div className="p-10 grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-x-[70px] lg:grid-row-2 lg:grid-cols-3">
        {fetchData.map((currentData) => {
          return (
            <div
              className="px-4 relative max-w-[400px] my-[5px] md:my-[30px] flex flex-col justify-around lg:justify-center items-start lg:items-center rounded overflow-hidden shadow lg:shadow-md bg-slate-50"
              key={currentData.id}
            >
              <img
                className="w-full md:h-[200px] h-[270px] object-contain rounded-lg absolute lg:static lg:opacity-100 lg:blur-[0] opacity-30 blur-[3px]"
                src={currentData.img}
                alt={currentData.title}
              />
              <div className="md:px-6 px-2 py-4 flex-col items-start lg:items-center flex z-10 ">
                <div className=" min-h-[50px] lg:min-h-[40px] text-[#013B52] font-bold lg:text-center text-base md:text-xl mb-2 ">
                  {currentData.title}
                </div>
                <button className="bg-green-500 z-10 py-1 px-5 text-sm md:my-2 md:text-lg my-1 md:my-4 rounded-md text-white">
                  <Link to={"/articles/"+currentData.id}>Read</Link>
                </button>
              </div>

              <div className="md:px-6 px-2 pt-1 md:pt-3 pb-2 z-10">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 md:text-sm text-[10px] font-semibold text-gray-700 mr-2 text-[#013B52] mb-2 drop-shadow-md">
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
