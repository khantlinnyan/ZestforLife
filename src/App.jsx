import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Article from "./pages/Article";
import Chat from "./pages/Chat";
import GetSupport from "./pages/GetSupport";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Article />}/>
        <Route path='/articles/:id' element={<SingleArticle/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/getsupport" element={<GetSupport/>}/>
        <Route path='/getsupport/mentalcheck' element={<Questions/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
