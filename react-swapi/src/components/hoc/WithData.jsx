import React, { Component } from "react";
import Preloader from "../preloader/Preloader";
import ErrorIndicator from "../random-planet/error-indicator/ErrorIndicator";

const WithData = View => {
  return class extends Component {
    state = {
      data: null,
      isFetching: false,
      error: false
    };

    componentDidMount() {
      this.setState({
        isFetching: true,
        error: false
      });
      this.props.getData()
      .then(data => {
        this.setState({
          data,
          isFetching: false
        });
      })
      .catch(() => {
        this.setState({
          isFetching: false,
          error: true
        })
      })
    }
    render() {
      const { data, isFetching, error } = this.state;
      if (!data || isFetching) {
        return <Preloader />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default WithData;
