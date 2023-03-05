import logo from "./logo.svg";
import "./App.css";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import AcademicApp from "./app/AcademicApp";
import Admission from "./app/admission/Admission";
import NotFound from "./NotFound";
import Library from "./app/library/Library";
import Transport from "./app/transport/Transport";
import Finance from "./app/finance/Finance";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AcademicApp />}>
            <Route path="admission" element={<Admission />} />
            <Route path="finance" element={<Finance />} />
            <Route path="transport" element={<Transport />} />
            <Route path="library" element={<Library />} />
          </Route>
          <Route path="*" element={<NotFound />} />
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
