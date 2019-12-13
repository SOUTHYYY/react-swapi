import React, { useState, useEffect, Component } from "react";
import ErrorIndicator from "../random-planet/error-indicator/ErrorIndicator";
import Preloader from "../preloader/Preloader";

const WithData = (View, getData) => {
  return class extends Component {
    state = {
      datat: null
    };

    componentDidMount() {
      getData().then(data => {
        this.setState({
          data
        });
      });
    }
    render() {
      const { data } = this.state;
      if (!data) {
        return <Preloader />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
