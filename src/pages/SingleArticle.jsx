import React, { useState, useEffect } from "react";

import supabase from "../config/superbaseClient";

import { Link } from "react-router-dom";

const Articlecomp = () => {

  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchArticles = async () => {

      const { data, error } = await supabase.from("articles").select("*");

      if (data) {

        setArticles(data);

        setIsLoading(false);

      }

    };

    fetchArticles();

  }, []);

  return (

    <div className="flex flex-col items-center mt-3">

      <div className="flex flex-col items-center space-y-2 mt-6">

        <h1 className="text-4xl font-bold text-green-500">Articles</h1>

      </div>

      {isLoading ? (

        <div className="p-10 flex items-center justify-center">

          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>

        </div>

      ) : (

        <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {articles.map((article) => (

            <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">

              <div className="relative">

                <img

                  className="w-full h-48 object-cover"

                  src={article.img}

                  alt={article.title}

                />

                <span className="absolute top-0 left-0 bg-blue-500 text-white font-bold py-1 px-2 rounded-md ml-4 mt-4 text-sm">

                  {article.category}

                </span>

              </div>

              <div className="p-4">

                <h2 className="font-bold text-lg">{article.title}</h2>

                <p className="mt-2 text-gray-600">{article.description}</p>

              </div>

              <div className="p-4 bg-gray-100 border-t border-gray-200">

                <Link

                  to={`/articles/${article.id}`}

                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm inline-block"

                >

                  Read Article

                </Link>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

export default Articlecomp;
