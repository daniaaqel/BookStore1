import { Link } from "react-router-dom";
import "./forms.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[showPassword,setShowPassword]=useState(false);

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (email.trim() === "") {
      return toast.error("Email is required");
    }

    if (password.trim() === "") {
      return toast.error("Password is required");
    }

    console.log({ email, password });
    setEmail("");
    setPassword("");
  };
  // show Password handler
  const showPasswordHandler=()=>{
    /* invert the previous value */ 
   setShowPassword(prev=>!prev)
  }
  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text": "password"}
          placeholder="Password"
        />
        
        {showPassword?( <i onClick={showPasswordHandler} className="bi bi-eye-slash-fill show-pwd-icon"></i>):
        (<i onClick={showPasswordHandler} className="bi bi-eye-fill show-pwd-icon"></i>)}
       
        

        <button className="form-btn" type="submit">
          Login
        </button>
      </form>
      <div className="form-footer">
        Dont't have an account ?{" "}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;