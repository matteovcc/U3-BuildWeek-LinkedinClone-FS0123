import "./App.css";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import ProfileSideBar from "./components/ProfileSideBar";

function App() {
  return (
    <>
      <MyNavbar />
      <ProfileSideBar />
      <MyFooter />
    </>
  );
}

export default App;
