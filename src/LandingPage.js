import { Outlet  } from "react-router-dom";

function LandingPage() {

  return(
    <div>
      Landing page
      <a href="/login">Login</a>
      <Outlet/>
    </div>
  );
}

export default LandingPage;