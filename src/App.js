import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Home, SingleBusiness } from "./components";

import "./App.css";

const API = process.env.REACT_APP_API_KEY;

function App() {
  const [data, getData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(API);
      const result = await response.json();

      getData(result);
    };
    fetchAPI();
  }, []);

  return (
    <main className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/:businessId" element={<SingleBusiness data={data} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
