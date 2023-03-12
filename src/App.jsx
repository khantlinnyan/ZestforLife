import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Article from "./pages/Article";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Article />}/>
        <Route path='articles/:title' element={<SingleArticle/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
