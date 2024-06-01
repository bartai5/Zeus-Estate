import "./NavBar.css";
import { Link } from "react-router-dom";
import EstateLogo from "../../assets/imgs/estate-logo.svg";
import SearchInput from "../form/SearchInput";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
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
      <div className="user-profile">
        <div className="profile-pic">
            KJ
        </div>
        <span className="user-name">
            Kipkurui
        </span>
      </div>
    </section>
  );
};

export default NavBar;
