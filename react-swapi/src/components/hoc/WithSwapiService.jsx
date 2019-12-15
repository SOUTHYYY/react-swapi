import React from "react";
import { SwapiServiceConsumer } from "../swapi-service-context/SwapiServiceContext";

const WithSwapiService = MapMethodsToProps => Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = MapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default WithSwapiService;
