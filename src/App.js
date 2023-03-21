import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Meny from "./pages/Meny";
import Kontakt from "./pages/Kontakt";
import OmOss from "./pages/OmOss";
import MotOss from "./pages/MotOss";
import {Helmet} from "react-helmet";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Helmet>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Viktor Carrick"/>
            <title>Tegs Pizzeria & Grill</title>
        </Helmet>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/meny" element={<Meny/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
          <Route path="/omoss" element={<OmOss/>}/>
          <Route path="/motoss" element={<MotOss/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );  
  
}

export default App;
