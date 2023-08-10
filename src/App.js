import "./App.css";
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
    <div className="w-full text-white font-nanum">
      <Nav />
      {/* <Banner /> */}
      <Invitation />
      <Story />
      <Wedding />
      <Calendar />
      <SlidePhotos />
      <Footer />
    </div>
  );
}

export default App;
