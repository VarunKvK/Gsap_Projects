import React from "react";
import Arrivals from "./Arrivals";
import Category from "./Category";
import Collab from "./Collab";
import Header from "./Header";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Social from "./Social";

function ThePage({ data,timeline }) {
  return data ? (
    <div>
      <Navbar timeline={timeline}/>
      <Header />
      <Arrivals />
      <Category />
      <Collab />
      <Newsletter />
      <Social />
    </div>
  ) : null;
}

export default ThePage;
