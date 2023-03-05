import { Outlet  } from "react-router-dom";
import Header from "./header/Header";

function AcademicApp() {
  return(
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default AcademicApp;