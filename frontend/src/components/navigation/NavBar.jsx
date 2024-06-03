import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import EstateLogo from "../../assets/imgs/estate-logo.svg";
import SearchInput from "../form/SearchInput";
import { FaSearch } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";
import { LuLogOut } from "react-icons/lu";
import { RiListIndefinite } from "react-icons/ri";

const NavBar = () => {
  const [toggleAccount, setToggleAccount] = useState(false);

  const handleAccountMgmt = () => {
    setToggleAccount(!toggleAccount);
  };
  return (
    <section className="navigation">
      <div className="estate-logo">
        <Link to="/">
          <img src={EstateLogo} alt="Estate Logo" />
        </Link>
      </div>
      <div className="search-estate">
        <SearchInput
          searchIcon={<FaSearch />}
          inputType={"text"}
          placeholder={"Search for properties"}
          inputName={"search"}
          cName={"input-text"}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="user-profile" onClick={handleAccountMgmt}>
        <div className="profile-pic">KJ</div>
        <span className="user-name">Kipkurui</span>
      </div>

      {toggleAccount ? (
        <div className="account-mgmt">
          <Link to='/my-listings' className="acc-mgmt-links my-listings">
          <RiListIndefinite /> My Listings
          </Link>
          <Link to="/manage-account" className="acc-mgmt-links manage-account">
            <LiaToolsSolid /> My Account
          </Link>
          <Link to="/logout" className="acc-mgmt-links logout">
            <LuLogOut /> Logout
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default NavBar;
