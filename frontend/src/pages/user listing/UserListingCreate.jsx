import DropDown from "../../components/form/DropDown";
import InputField from "../../components/form/InputField";
import InputTextarea from "../../components/form/InputTextarea";
import ButtonInput from "../../components/form/ButtonInput";
import NavBar from "../../components/navigation/NavBar";
import "./UserListingCreate.css";
import { FaCloudUploadAlt } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";

const UserListingCreate = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([])
  const inputRef = useRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleOnDrop = async (e)=>{
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files;

    console.log('====================================');
    console.log(files);
    console.log('====================================');
  }
  
  const handleFileUpload = async (e)=>{
    setSelectedFiles(e.target.files)
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++){
      formData.append('images', selectedFiles[i])
    }

    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    console.log('====================================');
    console.log(selectedFiles);
    console.log('====================================');
  }

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
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
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
                  onClick={(e)=>{
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
                  onChange={handleFileUpload}
                  accept="images/*"
                />
              </div>
            )}
          </div>
          <div className="uploaded-files"></div>
        </div>
        <div className="list-container listing-section">
          <form className="my-form" method="POST">
            <InputField
              inputName={"host_initials"}
              inputType={"text"}
              labelName={"Host Initials"}
              placeholder={"Enter Host Initials"}
              inputId="user_initials"
            />
            <InputField
              labelName={"Property Title"}
              placeholder={"Enter Property Title"}
              inputName={"property_title"}
              inputType={"text"}
            />
            <DropDown labelName={"Property Type"} inputName={"property_type"} />
            <InputField
              labelName={"Price"}
              placeholder={"Enter Price"}
              inputName={"property_price"}
              inputType={"number"}
            />
            <div className="bath-bed-container">
              <InputField
                labelName={"Bedrooms"}
                placeholder={"Enter Number of Bedrooms"}
                inputName={"bedrooms_no"}
                inputType={"number"}
              />
              <InputField
                labelName={"Bathrooms"}
                placeholder={"Enter Number of Bathrooms"}
                inputName={"bathroom_no"}
                inputType={"number"}
              />
            </div>
            <InputField
              labelName={"Location"}
              placeholder={"Enter Location of the Property"}
              inputName={"property_location"}
              inputType={"text"}
            />
            <InputField
              labelName={"Contact Info"}
              placeholder={"Enter Contact Information"}
              inputName={"contact_info"}
              inputType={"text"}
            />
            <InputTextarea
              labelName={"Description"}
              placeholder={"Provide a brief description of the property"}
              inputName={"property_description"}
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

// const getUserData = JSON.parse(localStorage.getItem("userDetails"));
// const userInitials =
//   getUserData.first_name.charAt(0).toUpperCase() +
//   getUserData.last_name.charAt(0).toUpperCase();
// const inputRef = useRef();
// const form = useRef();
// const [isDragging, setIsDragging] = useState(false);
// const [uploadedFiles, setUploadedFiles] = useState([]);
// const [listingData, setListingData] = useState({
//   host_initials: userInitials,
//   property_title: "",
//   property_type: "",
//   property_price: "",
//   bedrooms_no: "",
//   bathroom_no: "",
//   property_location: "",
//   contact_info: "",
//   property_description: "",
// });

// const handleFormChange = (e) => {
//   e.preventDefault();
//   setListingData({
//     ...listingData,
//     [e.target.name]: e.target.value,
//   });
// };

// const handleDragOver = (e) => {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = "copy";
//   setIsDragging(true);
// };
// const handleDragLeave = (e) => {
//   e.preventDefault();
//   setIsDragging(false);
// };

// const handleOnDrop = (e) => {
//   e.preventDefault();
//   setIsDragging(false);

//   const files = e.dataTransfer.files;
//   const acceptedFiles = Array.from(files).filter((file) =>
//     file.type.startsWith("image/")
//   );
//   const fileData = acceptedFiles.map((file) => ({
//     name: file.name,
//     size: (file.size / (1024 * 1024)).toFixed(2),
//     url: URL.createObjectURL(file),
//     originalFile: file,
//   }));
//   setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
// };

// const handleSubmitFiles = () => {
//   const files = inputRef.current.files;
//   const acceptedFiles = Array.from(files).filter((file) =>
//     file.type.startsWith("image/")
//   );
//   const fileData = acceptedFiles.map((file) => ({
//     name: file.name,
//     size: (file.size / (1024 * 1024)).toFixed(2),
//     url: URL.createObjectURL(file),
//     originalFile: file,
//   }));
//   setUploadedFiles((prevFiles) => [...prevFiles, ...fileData]);
// };

// useEffect(() => {
//   return () => {
//     uploadedFiles.forEach((file) => URL.revokeObjectURL(file.url));
//   };
// }, [uploadedFiles]);

// const removeFile = (index) => {
//   const newFiles = uploadedFiles.filter((file, i) => i !== index);
//   setUploadedFiles(newFiles);
// };

// const handleCreateListing = async (e) =>{
//   e.preventDefault();

//   const formData = new FormData();
//   formData.append('host_initials', listingData.host_initials);
//   formData.append('property_title', listingData.property_title);
//   formData.append('property_type', listingData.property_type);
//   formData.append('property_price', listingData.property_price);
//   formData.append('bedrooms_no', listingData.bedrooms_no);
//   formData.append('bathroom_no', listingData.bathroom_no);
//   formData.append('property_location', listingData.property_location);
//   formData.append('contact_info', listingData.contact_info);
//   formData.append('property_description', listingData.property_description);

//   uploadedFiles.forEach((file, index)=>{
//     formData.append('images', file.originalFile);
//   })

//   try{
//     const response = await AxiosInstance.post('api/user/listing/', formData);
//     if (response.status === 201){
//       alert('Listing created successfully');
//       form.current.reset();
//       setUploadedFiles([]);
//     }
//   }
//   catch(error){
//     console.log('====================================');
//     console.log(error);
//     console.log('====================================');
//   }
// }

// {uploadedFiles.map((file, index) => (
//   <div key={index} className="file-details">
//     <img src={file.url} alt={file.name} className="my-img" />
//     <div className="file-desc">
//       <p className="u-file-name">{file.name}</p>
//       <p className="u-file-size">{file.size} MB</p>
//     </div>
//     <div
//       className="file-action"
//       onClick={removeFile.bind(null, index)}
//     >
//       <IoClose className="remove-file-btn" />
//     </div>
//   </div>
// ))}


