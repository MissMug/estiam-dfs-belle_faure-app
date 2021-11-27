import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  BookFind,
  BookPropose,
  NotFound,
  Connection,
  MyAccountChange,
} from "../../pages";

const Content = ({ setUserToken }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/connect"
          exact
          element={<Connection setUserToken={setUserToken} />}
        />
        <Route path="/BookFind" exact element={<BookFind />} />
        <Route path="/BookPropose" exact element={<BookPropose />} />
        <Route path="/MyAccountChange" exact element={<MyAccountChange />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
