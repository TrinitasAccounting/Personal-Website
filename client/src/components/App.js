// import React, { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";


function App() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <NavBar />
      <Outlet />


    </div>


  );
}

export default App;
