import { Link } from "react-router-dom";
import PropertyProfile from "../../assets/imgs/room/profile.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Property = () => {

  return (
    <div className="property-list">
      <div className="property">
        <div className="property-image">
          <img
            src={PropertyProfile}
            alt={"Propery Profile"}
            className="property-profile-image"
          />
        </div>
        <div className="property-description">
          <div className="title-price">
            <h2 className="property-title">
              New 4bedroom Maisonette for rent along Banana limuru road
            </h2>
            <span className="property-price">KSHS 200,000</span>
          </div>
          <div className="room-specs">
            <p className="rental-type">Rental Type : For Rent </p>
            <span className="col">Bedrooms : 3+</span>
            <span className="col">Bathrooms : 2+</span>
          </div>
          <div className="location">
            <p className="location-desc">Location: Limuru, Kenya</p>
          </div>
          <div className="action-btns">
            <div className="property-btns more-desc">
              <Link to={'/property'} className="more-desc-btn">
                More Description <FaArrowUpRightFromSquare />
              </Link>
            </div>
            <div className="property-btns call-owner">
              <button className="call-owner-btn">Get Property</button>
            </div>
          </div>
        </div>
      </div>

      <div className="property">
        <div className="property-image">
          <img
            src={PropertyProfile}
            alt={"Propery Profile"}
            className="property-profile-image"
          />
        </div>
        <div className="property-description">
          <div className="title-price">
            <h2 className="property-title">
              New 4bedroom Maisonette for rent along Banana limuru road
            </h2>
            <span className="property-price">KSHS 200,000</span>
          </div>
          <div className="room-specs">
            <p className="rental-type">Rental Type : For Rent </p>
            <span className="col">Bedrooms : 3+</span>
            <span className="col">Bathrooms : 2+</span>
          </div>
          <div className="location">
            <p className="location-desc">Location: Limuru, Kenya</p>
          </div>
          <div className="action-btns">
            <div className="property-btns more-desc">
            <Link to={'/property'} className="more-desc-btn">
                More Description <FaArrowUpRightFromSquare />
              </Link>
            </div>
            <div className="property-btns call-owner">
              <button className="call-owner-btn">Get Property</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
