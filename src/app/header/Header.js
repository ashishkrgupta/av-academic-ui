import { Link } from "react-router-dom";

function Header() {

  return(
    <div>
      <Link to="admission">Admission</Link>
      <Link to="finance">Finance</Link>

      <Link to="transport">Transport</Link>
      <Link to="library">Library</Link>
    </div>
  );
}

export default Header;