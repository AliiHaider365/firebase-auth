import React from "react";
import AddCustomer from "./AddCustomer";
import Customers from "./Customers";
import Navbar from "./Navbar";


function Home() {
  return (
    <div>
    <Navbar/>
      <AddCustomer />
      <Customers />
    </div>
  );
}

export default Home;
