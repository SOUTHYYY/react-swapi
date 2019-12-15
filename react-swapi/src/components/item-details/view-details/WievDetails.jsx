import React from "react";

const ViewPersonDetails = ({ item, image, ...props }) => {
  const { name } = item;
  return (
    <>
      <img
        className="person-image"
        src={image}
        alt="current item"
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(props.children, child => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
    </>
  );
};

export default ViewPersonDetails;
