import DropDown from "../../components/form/DropDown";
import InputField from "../../components/form/InputField";
import InputTextarea from "../../components/form/InputTextarea";
import ButtonInput from "../../components/form/ButtonInput";
import NavBar from "../../components/navigation/NavBar";
import "./UserListingCreate.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

const UserListingCreate = () => {
    const getUserData = JSON.parse(localStorage.getItem('userDetails'))
    const userInitials = (getUserData.first_name.charAt(0).toUpperCase() + getUserData.last_name.charAt(0).toUpperCase());
  const inputRef = useRef();
  const form = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [listingData, setListingData] = useState({
    host_initials: userInitials,
    property_title: "",
    property_type: "",
    property_price: "",
    bedrooms_no: "",
    bathroom_no: "",
    property_location: "",
    contact_info: "",
    property_description: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    setListingData({
      ...listingData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateListing = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(listingData);
    console.log("====================================");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    const acceptedFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    const fileData = acceptedFiles.map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      url: URL.createObjectURL(file),
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
  };

  const handleSubmitFiles = () => {
    const files = inputRef.current.files;
    const acceptedFiles = Array.from(files).filter((file) =>
      file.type.startsWith("image/")
    );
    const fileData = acceptedFiles.map((file) => ({
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      url: URL.createObjectURL(file),
    }));
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
  };

  useEffect(() => {
    return () => {
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.url));
    };
  }, [uploadedFiles]);

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((file, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  return (
    <section className="user-listing-create">
      <NavBar />
      <div className="listing-container">
        <div className="list-container image-upload">
          <div className="image-upload-title">
            <h2 className="i-title">Upload Property Images</h2>
            <p className="i-subtitle">
              Upload files you want to share to the listing
            </p>
          </div>
          <div
            className="drag-drop-section"
            onDragOver={handleDragOver}
            onDrop={handleOnDrop}
            onDragLeave={handleDragLeave}
          >
            {isDragging ? (
              <div className="col after-drag">
                <span className="drop-here">DROP HERE</span>
              </div>
            ) : (
              <div className="col before-drag">
                <FaCloudUploadAlt className="cloud-icon" />
                <p className="p-tag">Drag and drop files here</p>
                <p className="p-tag">OR</p>
                <button
                  className="btn-primary browse-files"
                  onClick={(e) => {
                    e.preventDefault;
                    inputRef.current.click();
                  }}
                >
                  Browse Files
                </button>
                <input
                  type="file"
                  name="images-input"
                  multiple
                  ref={inputRef}
                  className="file-browser"
                  onChange={handleSubmitFiles}
                />
              </div>
            )}
          </div>
          <div className="uploaded-files">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-details">
                <img src={file.url} alt={file.name} className="my-img" />
                <div className="file-desc">
                  <p className="u-file-name">{file.name}</p>
                  <p className="u-file-size">{file.size} MB</p>
                </div>
                <div
                  className="file-action"
                  onClick={removeFile.bind(null, index)}
                >
                  <IoClose className="remove-file-btn" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="list-container listing-section">
          <form
            className="my-form"
            ref={form}
            method="POST"
            onSubmit={handleCreateListing}
          >
            <InputField
                inputName={"host_initials"}
                inputType={"text"}
                labelName={"Host Initials"}
                placeholder={"Enter Host Initials"}
                value={listingData.host_initials}
                onChange={handleFormChange}
                inputId="user_initials"
            />
            <InputField
              labelName={"Property Title"}
              placeholder={"Enter Property Title"}
              inputName={"property_title"}
              inputType={"text"}
              value={listingData.property_title}
              onChange={handleFormChange}
            />
            <DropDown
              labelName={"Property Type"}
              inputName={"property_type"}
              value={listingData.property_type}
              onChange={handleFormChange}
            />
            <InputField
              labelName={"Price"}
              placeholder={"Enter Price"}
              inputName={"property_price"}
              inputType={"number"}
              value={listingData.property_price}
              onChange={handleFormChange}
            />
            <div className="bath-bed-container">
              <InputField
                labelName={"Bedrooms"}
                placeholder={"Enter Number of Bedrooms"}
                inputName={"bedrooms_no"}
                inputType={"number"}
                value={listingData.bedrooms_no}
                onChange={handleFormChange}
              />
              <InputField
                labelName={"Bathrooms"}
                placeholder={"Enter Number of Bathrooms"}
                inputName={"bathroom_no"}
                inputType={"number"}
                value={listingData.bathroom_no}
                onChange={handleFormChange}
              />
            </div>
            <InputField
              labelName={"Location"}
              placeholder={"Enter Location of the Property"}
              inputName={"property_location"}
              inputType={"text"}
              value={listingData.property_location}
              onChange={handleFormChange}
            />
            <InputField
              labelName={"Contact Info"}
              placeholder={"Enter Contact Information"}
              inputName={"contact_info"}
              inputType={"text"}
              value={listingData.contact_info}
              onChange={handleFormChange}
            />
            <InputTextarea
              labelName={"Description"}
              placeholder={"Provide a brief description of the property"}
              inputName={"property_description"}
              value={listingData.property_description}
              onChange={handleFormChange}
            />
            <ButtonInput
              buttonType={"submit"}
              buttonText={"Create Listing"}
              cName={"btn-primary"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserListingCreate;
