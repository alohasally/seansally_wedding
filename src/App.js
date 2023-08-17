import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Banner from "./Banner";
import Invitation from "./Invitation";
import Story from "./Story";
import Calendar from "./Calendar";
import Wedding from "./Wedding";
import SlidePhotos from "./SlidePhotos";
import Footer from "./Footer";

function App() {
  return (
    <div className="w-full overflow-x-scroll text-white font-nanum">
      <Nav />
      <Invitation />
      <Story />
      <Wedding />
      <Calendar />
      <SlidePhotos />
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Invitation />} />
        <Route path="/story" element={<Story />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/photos" element={<SlidePhotos />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}
    </div>
  );
}

export default App;
