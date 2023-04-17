import "./App.css";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-light">
          <MyNavbar />
          <Routes>
            <Route path="/" element={<MainSection />} />
            {/* da aggiungere rotta dinamica /profile:id quando faremo homepage (Ricorda params nella fetch)*/}
          </Routes>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
