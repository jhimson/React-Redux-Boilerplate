import React from "react";
import { connect } from "react-redux";
import { CHANGE_NAME, CHANGE_TEST } from "../actions/userActions";

class Layout extends React.Component {
  test1 = () => {
    this.props.CHANGE_NAME("JhimGwapo");
  };

  test2 = () => {
    this.props.CHANGE_NAME("JhimPangit");
  };

  changeTest = () => {
    this.props.CHANGE_TEST("EDI WOW");
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <button onClick={this.test1}>Gwapo</button>
        <button onClick={this.test2}>Pangit</button>
        <button onClick={this.changeTest}>ChangeTest</button>
        <h1>{this.props.users}</h1>
        <h2>{this.props.test}</h2>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    users: state.user.users.name,
    test: state.user.test
  };
};

export default connect(
  mapStatetoProps,
  { CHANGE_NAME, CHANGE_TEST }
)(Layout);
