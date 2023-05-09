import React from "react";
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";
import CategoryNews from "./CategoryNews";
import NewsDetail from "./NewsDetail";
import Home from "./Home";
import Categories from "./Categories";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category" element={<Categories/>} />
      <Route path="/category/:categoryId" element={<CategoryNews/>} />
          
      <Route path="/news/:id" element={<NewsDetail/>} />
    </Routes>
  </BrowserRouter>
  
  );
};

export default App;
