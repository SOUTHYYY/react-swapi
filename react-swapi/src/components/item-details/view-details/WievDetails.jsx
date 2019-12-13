import React from 'react';

const ViewPersonDetails = ({ item, ...props }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
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

export default ViewPersonDetails