import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const GetSupport = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="py-2 px-4 lg:px-40 mt-3">
      <div>
        {location.state ? (
          <>
          <div
            style={{
              background: location.state.color,
              color: location.state.titleColor,
            }}
            className="py-2 px-4 rounded-lg"
          >
            Result
            <h1 style={{ color: location.state.textColor }}>
              {location.state.result}
            </h1>
          </div>
          <div className="mt-5 ">
          <p className="inline text-lg text-gray-700">Mental health check again - </p>
          <Link
            to="/getsupport/mentalcheck"
            className="text-blue-800 under mt-4 text-lg"
          >
            Click here
          </Link>
        </div>
          </>
        ) : (
          <div className="mt-5 ">
            <p className="inline text-lg text-gray-700">
              Mental health check-{" "}
            </p>
            <Link
              to="/getsupport/mentalcheck"
              className="text-blue-800 under mt-4 text-lg"
            >
              Click here
            </Link>
          </div>
        )}
        
        <h3></h3>
      </div>
    </div>
  );
};

export default GetSupport;
