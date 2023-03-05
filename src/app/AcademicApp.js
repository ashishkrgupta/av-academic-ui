import { Link } from "react-router-dom";
import { Outlet  } from "react-router-dom";

function AcademicApp() {
  return(
    <div>
      Academic App
      {/* <BrowserRouter>
      </BrowserRouter> */}
      <br/>
      <Link to="/app/admission"> Go to Admission</Link>
      <Outlet/>
    </div>
  );
}

export default AcademicApp;