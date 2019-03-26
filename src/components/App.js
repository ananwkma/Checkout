import React from "react";
import Checkout from "./Checkout";
import { handleReceiveData } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveData());
  }
  render() {
    return (
      <div className="AppContainer">
        <div className="WebContentContainer" />
        <div className="CheckoutContainer">
          <Checkout />
        </div>
      </div>
    );
  }
}

export default connect()(App);
