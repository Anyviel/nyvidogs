import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import User from "./Pages/User/User";
import Footer from "./Components/Footer/Footer";

import './Global/GlobalStyles.css';
import { UserStorage } from "./Context/UserContext";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Pages/User/UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
            </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
