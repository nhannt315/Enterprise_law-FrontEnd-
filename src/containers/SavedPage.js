import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container } from "semantic-ui-react";
import EntryList from "../components/EntryList/EntryList";

class SavedPage extends Component {
  render() {
    if (this.props.userAccount) {
      return (
        <div className="Body">
          <Container text>
            <EntryList
              userAccount={this.props.userAccount}
              handleDeleteSubmit={this.props.handleDeleteSubmit}
              handleEditSubmit={this.props.handleEditSubmit}
              handleSaveSubmit={this.props.handleSaveSubmit}
              handleUnSaveSubmit={this.props.handleUnSaveSubmit}
              dataList={this.props.dataList}
            />
          </Container>
        </div>
      );
    } else {
      return <Redirect to="/search" />;
    }
  }
}

export default SavedPage;
