import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Price from "../src/Pages/Price";
import ContactUs from "../src/Pages/ContactUs";
import AboutUs from "../src/Pages/AboutUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { useState } from "react";
import ButtonMode from "./Components/ButtonMode";
import useWindowDimensions from "./Components/windowDimensions";
import Blogs from "./Pages/Blogs";
import DemoPage from "./Pages/Demopage"
import Error from "../src/Pages/Error"

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode((current) => !current);
    //setDarkMode(true);
  };

/*   const bgImageURL =
    "https://images.unsplash.com/photo-1559537713-ad9a262e4241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
 */
  
  
  // Size
  const { height, width } = useWindowDimensions();

  return (
    <>
      {/*   <div>
        width: {width} ~ height: {height}
      </div> */}

      <div
        style={{
          backgroundColor: darkMode ? "#EEF5DB" : "",
          color: darkMode ? "black" : "",
          /* backgroundImage: darkMode?
            "url('https://images.unsplash.com/photo-1665085898206-8f9e65f1ff77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')" : "", */

          //backgroundImage: `url(${bgImageURL})`,
          backgroundImage: `url('https://images.unsplash.com/photo-1559537713-ad9a262e4241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=80')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          //filter: "blur(2px)",
        }}
      >
        <Navbar title={"MultiPages World"} /> {/* Show in all pages */}
        
        {/* DARK MODE BUTTON  */}
        {/* <ButtonMode click={handleClick} /> */}

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="price" element={<Price />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="aboutus/blogs" element={<Blogs />} />
          <Route path="aboutus/DemoPage" element={<DemoPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer title={"MultiPages World"} />
      </div>
    </>
  );
};

export default App;
