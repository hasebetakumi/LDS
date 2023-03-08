import React from "react";

import Footer from "./footer";
import Top from "./top";
import About from "./about";
import Header from "./header";
import Rooms from "./rooms";
import Service from "./service";
import Schedule from "./schedule";
import Access from "./access";
import News from "./news";
import Address from "./address";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Top />
      <About />
      <Rooms />
      <Service/>
      <Schedule/>
      <Access/>
      <News/>
      <Address/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
