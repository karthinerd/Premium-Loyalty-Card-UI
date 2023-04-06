import { Link, useNavigate } from "react-router-dom";
import '../Styles/LoginPage.css';

const LoginPage = ({ handleLogin }) => {
  const navigate = useNavigate(); // define navigate here

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    handleLogin(email, password);
    navigate("/customersList"); // navigate to the desired page
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Login</button>
          <Link to="/forgotPassword">Forgot password?</Link>
        </form>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default LoginPage;
