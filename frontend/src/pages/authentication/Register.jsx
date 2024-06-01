import { useState, useRef } from "react";
import TextInput from "../../components/form/TextInput";
import ButtonInput from "../../components/form/ButtonInput";
import { Link } from 'react-router-dom'
import "./Auth.css";
const Register = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
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
      <h2 className="form--title">Create An Account</h2>
      <TextInput
        labelName={"First Name"}
        inputType={"text"}
        placeholder={"John"}
        inputName={"first_name"}
        onChange={handleFormChange}
        value={formData.first_name}
        cName={"input--text"}
      />
      <TextInput
        labelName={"Last Name"}
        inputType={"text"}
        placeholder={"Doe"}
        inputName={"last_name"}
        onChange={handleFormChange}
        value={formData.last_name}
        cName={"input--text"}
      />
      <TextInput
        labelName={"Email Address"}
        inputType={"email"}
        placeholder={"johndoe28@gmail.com"}
        inputName={"email"}
        onChange={handleFormChange}
        value={formData.email}
        cName={"input--text"}
      />
      <TextInput
        labelName={"Username"}
        inputType={"text"}
        placeholder={"john28"}
        inputName={"username"}
        onChange={handleFormChange}
        value={formData.username}
        cName={"input--text"}
      />
      <TextInput
        labelName={"Password"}
        inputType={"password"}
        placeholder={"**********"}
        inputName={"password"}
        onChange={handleFormChange}
        value={formData.password}
        cName={"input--text"}
      />
      <ButtonInput buttonText={"Register"} buttonType={"submit"}  cName={'submit-btn'}/>
      <p className="auth__form--text">
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </form>
  </div>
  )
}

export default Register