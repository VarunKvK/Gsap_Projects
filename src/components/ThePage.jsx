import React from "react";
import Arrivals from "./Arrivals";
import Category from "./Category";
import Collab from "./Collab";
import Header from "./Header";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Social from "./Social";

function ThePage({timeline }) {
  return (
    <div>
      <Navbar timeline={timeline}/>
      <Header timeline={timeline}/>
      <Arrivals timeline={timeline}/>
      <Category timeline={timeline}/>
      <Collab timeline={timeline}/>
      <Newsletter timeline={timeline}/>
      <Social timeline={timeline}/>
    </div>
  )
}

export default ThePage;
