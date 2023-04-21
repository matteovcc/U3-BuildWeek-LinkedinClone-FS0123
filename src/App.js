import "./App.css";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyNavbar from "./components/MyNavbar";
import MainSection from "./components/MainSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHome from "./components/MyHome";
import Job from "./components/Job";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: "#f3f2ef" }}>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route exact path="/home" element={<MyHome />} />
            <Route path="/job" element={<Job />} />
            {/* da aggiungere rotta dinamica /profile:id quando faremo homepage (Ricorda params nella fetch)*/}
            <Route path="/comments/:post_id" element={<Comments />} />
          </Routes>
          <MyFooter />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
