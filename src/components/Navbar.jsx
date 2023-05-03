import { useState } from "react";

import { Link } from "react-router-dom";

import Navtitle from "./components/Navtitle";

export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const handleToggle = () => {

    setNavbar((prev) => !prev);

  };

  return (

    <nav className="sticky top-0 shadow-md bg-white z-50">

      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center py-4 md:py-6">

          <Link to="/">

            <h1 className="text-lg md:text-2xl font-bold text-green-500">

              ZestforLife

            </h1>

          </Link>

          <div className="md:hidden">

            <button

              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"

              onClick={handleToggle}

            >

              {navbar ? (

                <svg

                  xmlns="http://www.w3.org/2000/svg"

                  className="w-6 h-6"

                  viewBox="0 0 20 20"

                  fill="currentColor"

                >

                  <path

                    fillRule="evenodd"

                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"

                    clipRule="evenodd"

                  />

                </svg>

              ) : (

                <svg

                  xmlns="http://www.w3.org/2000/svg"

                  className="w-6 h-6"

                  fill="none"

                  viewBox="0 0 24 24"

                  stroke="currentColor"

                  strokeWidth={2}

                >

                  <path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    d="M4 6h16M4 12h16M4 18h16"

                  />

                </svg>

              )}

            </button>

          </div>

          <div className="hidden md:block">

            <ul className="flex space-x-6 items-center">

              {Navtitle.map((item) => (

                <li key={item.id}>

                  <Link

                    className="text-base md:text-lg font-medium text-[#013B52] hover:text-green-500"

                    to={item.to}

                  >

                    {item.name}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

        <div

          className={`md:hidden ${

            navbar ? "flex flex-col" : "hidden"

          } space-y-4`}

        >

          {Navtitle.map((item) => (

            <Link

              key={item.id}

              className="text-base font-medium text-[#013B52] hover:text-green-500"

              to={item.to}

              onClick={handleToggle}

            >

              {item.name}

            </Link>

          ))}

        </div>

      </div>

    </nav>

  );

}
