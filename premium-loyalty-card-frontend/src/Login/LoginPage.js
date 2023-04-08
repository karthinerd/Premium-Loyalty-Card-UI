import { Link, useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";
import CustomButton from "../Components/CustomButton";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const email = formData.get("email");
    const password = formData.get("password");
    navigate("/customersList");
  };
  

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <CustomButton
            className="edit-customer"
            text="Login"
            onClick={handleSubmit}
          />
          <Link to="/forgotPassword">Forgot password?</Link>
        </form>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default LoginPage;
