import DropDown from "../form/DropDown";
import InputField from "../form/InputField";
import InputRange from "../form/InputRange";
// import AxiosInstance from '../../utils/AxiosInstance';
import "./Filter.css";
const Filter = () => {
  return (
    <div className="property-filter">
      <h3 className="filter-title">Filter Property</h3>
      <div className="filter-properties">
        <DropDown labelName={"Rental Type"} />
        <InputRange labelName={"Price Range"} />
        <InputField
          labelName={"No of Bedrooms"}
          inputName={"bedroom_quantity"}
          placeholder={"Number of Bedrooms"}
        />
        <InputField
          labelName={"No of Bathrooms"}
          inputName={"bathroom_quantity"}
          placeholder={"Number of Bathrooms"}
        />
        <div className="filter-btns">
          <button className="filter-button clear-select">Clear Selections</button>
          <button className="filter-button apply-filter">Apply Filter</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
