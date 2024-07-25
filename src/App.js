import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./Views/App/Home/Home"));
const Registartion = lazy(() =>import("./Pages/Registartion"));
const Other = lazy (()=> import ("./Components/Section/Home/Other"))
const Validateform = lazy (()=>import  ("./Components/Section/Home/Validateform"))
const CakeContact = lazy (()=> import("./Components/Section/Forms/CakeContact"))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1 style={{ fontSize: "50px" }}>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registartion" element={<Registartion />} />
            <Route path="/other" element={<Other/>} />
            <Route path="/validate" element={<Validateform/>} />
            <Route path="/orderlist" element={<CakeContact/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
