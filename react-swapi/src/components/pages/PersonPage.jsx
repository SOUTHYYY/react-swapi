import React, { useState } from "react";
import Row from "../row/Row";
import {PersonList} from "../sw-component/SWComponent";
import PersonDetails from "../sw-component/PersonDetails";

const PersonPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const onItemSelected = id => {
    setSelectedItem(id);
  };
  return (
    <Row
      left={<PersonList onItemSelected={onItemSelected} />}
      right={<PersonDetails selectedItem={selectedItem} />}
    />
  );
};

export default PersonPage
