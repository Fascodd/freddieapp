import "../styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="space"></div>
      <div className="login-area">
        <Link className="nav-btn" to={"/login"}>
          <p>Login</p>
        </Link>
        <Link className="nav-btn" to={"/register"}>
          <p>Register</p>
        </Link>
      </div>
    </header>
  );
}
