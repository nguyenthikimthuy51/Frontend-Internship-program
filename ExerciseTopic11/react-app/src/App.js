
import { BrowserRouter as Router, Route, Link, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NewsPage from "./pages/News";
import Header from "./component/Header";
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>  
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/news" element={<NewsPage/>}/>
        </Routes>
        
      </div>

  );
}

export default App;
