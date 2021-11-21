import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import BookFind from "../BookFind";
import BookPropose from "../BookPropose";
import NotFound from "../../pages/NotFound";

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/BookFind" exact element={<BookFind />} />
        <Route path="/BookPropose" exact element={<BookPropose />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;

//<Route path="/connect" exact>
//<Connection setUserToken={setUserToken} />
//</Route>
