const CreateListing = () => {
  return (
    <div className="create-listing">
      <div className="listing-profile">
        <div className="listing__user-profile">KJ</div>
        <p className="listing__profile-text">
          Hi there Kipkurui, Do you have a property that you need to rent out or sell?
        </p>
      </div>
      <hr className="split" />
      <div className="listing-cta">
        <button className="listing-button">Create Listing</button>
      </div>
    </div>
  );
};

export default CreateListing;
