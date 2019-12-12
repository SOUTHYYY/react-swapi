import React from "react";
import ItemList from "../item-list/ItemList";
import PersonDetails from "../person-details/PersonDetails";
import ErrorIndicator from "../random-planet/error-indicator/ErrorIndicator";
import SwapiService from "../../services/SwapiService";

class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="items row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPersons}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails selectedPerson={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
