import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Contact from "../components/Contact";

const GetSupport = () => {
  const location = useLocation();

  return (
    <>
      <div className="py-2 px-4 lg:px-40 mt-3">
        <div>
          {location.state ? (
            <>
              <div
                style={{
                  background: location.state.color,
                  color: location.state.titleColor,
                }}
                className="py-2 px-4 rounded-lg text-xl"
              >
                Result
                <h1 style={{ color: location.state.textColor }}>
                  {location.state.result}
                </h1>
              </div>
              <div className="mt-5 ">
                <p className="inline text-lg text-gray-700">
                  Mental health check again -{" "}
                </p>
                <Link
                  to="/getsupport/mentalcheck"
                  className="text-green-500 under mt-4 text-lg"
                >
                  Click here
                </Link>
              </div>
            </>
          ) : (
            <div className="mt-2 bg-gray-100 px-4 py-2 mb-10 rounded">
            <p className="inline text-lg font-semibold text-gray-700">
                Mental health check
              </p>
              <Link
                to="/getsupport/mentalcheck"
                className="text-green-500 block under mt-4 text-lg"
              >
                Click here
              </Link>
            </div>
          )}
        </div>
        <Contact/>
      </div>
    </>
  );
};

export default GetSupport;
