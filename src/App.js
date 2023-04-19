import "./App.css";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHome from "./components/MyHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: "#f3f2ef" }}>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route exact path="/home" element={<MyHome />} />
            {/* da aggiungere rotta dinamica /profile:id quando faremo homepage (Ricorda params nella fetch)*/}
          </Routes>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
