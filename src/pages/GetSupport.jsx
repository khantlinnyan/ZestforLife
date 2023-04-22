import React from "react";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

import Contact from "../components/Contact";

const GetSupport = () => {

  const location = useLocation();

  return (

    <div className="container mx-auto px-4 lg:px-40 py-8">

      <div className="max-w-2xl mx-auto">

        <div className="mb-8">

          {location.state ? (

            <div

              className={`bg-${location.state.color}-500 text-${location.state.titleColor}-900 py-4 px-6 rounded-lg`}

            >

              <h2 className="text-2xl font-bold mb-2">Result</h2>

              <p className={`text-xl font-bold mb-4 text-${location.state.textColor}-900`}>

                {location.state.result}

              </p>

            </div>

          ) : (

            <div className="bg-gray-200 py-4 px-6 rounded-lg">

              <h2 className="text-2xl font-bold mb-2">Mental Health Check</h2>

              <p className="text-xl mb-4">

                Take a quick mental health check and get support when you need

                it.

              </p>

            </div>

          )}

        </div>

        <div className="flex justify-center">

          <Link

            to="/getsupport/mentalcheck"

            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200"

          >

            {location.state ? "Take Again" : "Start Now"}

          </Link>

        </div>

        <div className="mt-8">

          <Contact />

        </div>

      </div>

    </div>

  );

};

export default GetSupport;
