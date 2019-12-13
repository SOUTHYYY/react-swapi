import React from "react";
import ItemList from "../item-list/ItemList";
import ItemDetails from "../item-details/ItemDetails";
import ErrorIndicator from "../random-planet/error-indicator/ErrorIndicator";
import SwapiService from "../../services/SwapiService";
import Row from "../row/Row";
import Record from "../Record/Record";

class ErrorBoundry extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

class PeoplePage extends React.Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPersons}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails selectedItem={this.state.selectedPerson}>
          <Record field='gender' label='Gender'/>
          <Record field='eyeColor' label='Eye Color'/>
          <Record field='birthYear' label='Birth Year'/>
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
