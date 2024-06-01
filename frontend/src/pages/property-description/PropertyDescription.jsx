import "./PropertyDescription.css";
import { Link } from "react-router-dom";
import PropertyProfile from "../../assets/imgs/room/profile.jpg";
import { FaArrowLeft } from "react-icons/fa";

const PropertyDescription = () => {
  return (
    <section id="propertyDesc">
      <div className="desc__container">
        <div className="return-control">
          <Link to="/" className="return-link">
            <FaArrowLeft /> Return to listing
          </Link>
        </div>
        <div className="property-image">
          <img
            src={PropertyProfile}
            alt={"Propery Profile"}
            className="property-profile-image"
          />
        </div>
        <div className="property-gallery">
          <div className="gallery">
            <img
              src={PropertyProfile}
              alt={"Propery Profile"}
              className="property-gallery-image"
            />
          </div>
          <div className="gallery">
            <img
              src={PropertyProfile}
              alt={"Propery Profile"}
              className="property-gallery-image"
            />
          </div>
          <div className="gallery">
            <img
              src={PropertyProfile}
              alt={"Propery Profile"}
              className="property-gallery-image"
            />
          </div>
          <div className="gallery">
            <img
              src={PropertyProfile}
              alt={"Propery Profile"}
              className="property-gallery-image"
            />
          </div>
        </div>
        <div className="property-description">
          <div className="title-price">
            <h2 className="property-title">
              New 4bedroom Maisonette for rent along Banana limuru road
            </h2>
            <span className="property-price">KSHS 200,000</span>
          </div>
          <div className="property-info">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            deserunt non quos eligendi veritatis neque quis sapiente. Beatae
            nesciunt molestias sequi delectus cumque dicta quidem pariatur ipsam
            voluptatem illum rem repellat quibusdam illo, saepe aliquid modi
            eveniet. Voluptatibus minus aperiam tenetur aspernatur beatae odio
            nobis quasi similique sunt harum, debitis corporis illum quidem
            earum recusandae ipsum reprehenderit hic explicabo dolores assumenda
            sequi vel. Maxime blanditiis nostrum laudantium vel ut! Soluta
            aliquam optio repellat officia provident alias ab a atque illum!
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
            <div className="property-btns call-owner">
              <button className="call-owner-btn">Get The House</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
