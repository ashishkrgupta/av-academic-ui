import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AcademicApp from "./app/AcademicApp";
import Admission from "./app/admission/Admission";
import NotFound from "./NotFound";

function App() {
  return (
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="app">App</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<LandingPage />}>
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AcademicApp />}>
            <Route path="admission" element={<Admission />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />

  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Login
  //       </a>
  //     </header>
  //     <Login/>
  //   </div>
  // );
}

export default App;
