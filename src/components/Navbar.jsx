import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Navtitle } from "./Navbartitle";

export default function Navigation() {

  const [navbar, setNavbar] = useState(false);

  const isMobile = window.innerWidth <= 640; // Check if screen size is smaller than 640px

  return (

    <>

      {/* Bottom navigation for mobile */}

      {isMobile && (

        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-300">

          <ul className="flex justify-between items-center py-2">

            {Navtitle.map((i) => (

              <li key={i.id}>

                <Link

                  to={i.to}

                  className="flex flex-col items-center justify-center text-xs text-gray-500 hover:text-green-500"

                >

                  <span className="mb-1">{i.icon}</span>

                  {i.name}

                </Link>

              </li>

            ))}

          </ul>

        </nav>

      )}

      {/* Top navigation for desktop */}

      <nav className="hidden lg:block w-full shadow sticky top-0 overflow-hidden bg-white opacity-90 z-40">

        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

          <div>

            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              <Link to={'/'}>

                <h2 className="text-xl md:text-3xl font-bold text-green-500">

                  ZestforLife

                </h2>

              </Link>

              <div className="md:hidden">

                <button

                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"

                  onClick={() => setNavbar(!navbar)}

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

            </div>

          </div>

          </div>
</nav>
</>
);
}
