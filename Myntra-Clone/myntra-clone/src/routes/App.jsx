import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItem from "../components/Homeitem";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
