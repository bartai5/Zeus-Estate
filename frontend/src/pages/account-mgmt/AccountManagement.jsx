import { FaArrowLeft, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./AccountManagement.css";
import TextInput from "../../components/form/TextInput";

const AccountManagement = () => {
  return (
    <section className="account__mgmt-section">
      <div className="mgmt-section">
        <Link to="/" className="back-btn">
          <FaArrowLeft /> Back to listing
        </Link>
        <form className="manage-profile">
          <h2 className="acc-mgmt-title">
            <FaTools /> Account Management
          </h2>
          <div className="form-elements">
            <TextInput
              labelName={"First Name"}
              inputType={"text"}
              inputName={"first_name"}
              placeholder={"John"}
              cName={"input-text"}
            />
            <TextInput
              labelName={"Last Name"}
              inputType={"text"}
              inputName={"last_name"}
              placeholder={"Doe"}
              cName={"input-text"}
            />
            <TextInput
              labelName={"Email"}
              inputType={"email"}
              inputName={"email"}
              placeholder={"johndoe28@gmail.com"}
              cName={"input-text"}
            />
            <TextInput
              labelName={"Username"}
              inputType={"text"}
              inputName={"username"}
              placeholder={"johndoe28"}
              cName={"input-text"}
            />
            <div className="profile-buttons">
              <button className="profile-button update-profile">Update Profile</button>
              <Link to='/delete' className="profile-button delete-profile">Delete Account</Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountManagement;
