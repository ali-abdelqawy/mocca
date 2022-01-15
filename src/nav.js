import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/main">Main</Link>
      <Link to="/caffiene-history">Caffiene History</Link>
    </nav>
  );
};
