import { useState, useEffect } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Banner from "./Banner";
import Invitation from "./Invitation";
import Story from "./Story";
import Calendar from "./Calendar";
import Wedding from "./Wedding";
import Sorry from "./Sorry";
import SlidePhotos from "./SlidePhotos";
import Footer from "./Footer";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Change this value to match your actual image loading time
  }, []);

  return (
    <div className="w-full text-white font-nanum">
      <Nav />
      {isLoading ? <Loading /> : null}
      {!isLoading && (
        <>
          <Invitation />
          <Story />
          <Wedding />
          <SlidePhotos />
          <Calendar />
          <Sorry />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
