import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";

import './Global/GlobalStyles.css';
import { UserStorage } from "./Context/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
