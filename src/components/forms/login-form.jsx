import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/forms/login-form.module.css";
import '../../css/login.css';
import { login } from "../../services/api.service";

const INITIAL_DATA = {
  userName: "",
  password: ""
}
const LoginForm = () => {
  const navigate = useNavigate();

  const [userData, setUserdata] = useState(INITIAL_DATA);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authenticated = await login(userData);
      if (authenticated)
        navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">INFRASIGHT</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="userName" value={userData.userName} onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
