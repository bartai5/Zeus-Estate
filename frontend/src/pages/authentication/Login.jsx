import { useState, useRef } from "react";
import TextInput from "../../components/form/TextInput";
import { IoMdLock } from "react-icons/io";
import ButtonInput from "../../components/form/ButtonInput";
import { Link } from 'react-router-dom'
import "./Auth.css";
import { RiUserFill } from "react-icons/ri";

const Login = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className="auth">
      <form className="auth__form" ref={form}>
        <h2 className="form--title">Login</h2>
        <TextInput
          labelName={"Username"}
          inputIcon={<RiUserFill />}
          inputType={"text"}
          placeholder={"john28"}
          inputName={"username"}
          onChange={handleFormChange}
          value={formData.username}
          cName={"input--text"}
        />
        <TextInput
          labelName={"Password"}
          inputIcon={<IoMdLock />}
          inputType={"password"}
          placeholder={"**********"}
          inputName={"password"}
          onChange={handleFormChange}
          value={formData.password}
          cName={"input--text"}
        />
        <ButtonInput buttonText={"Login"} buttonType={"submit"}  cName={'submit-btn'}/>
        <p className="auth__form--text">
          Don`t have an account yet? <Link to='/register'>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
