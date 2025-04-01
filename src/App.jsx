import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from "./user";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <div className="home">
                  <div className="userButtonContainer">
                    <Link to="/users" className="userButton" data-aos="fade-up">
                      Загрузить пользователей
                    </Link>
                  </div>
                </div>
              }
            />
            <Route path="/users" element={<User />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
