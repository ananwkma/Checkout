import React from "react";
import { tryPromo } from "../actions";
import { connect } from "react-redux";

class Promo extends React.Component {
  state = {
    text: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(tryPromo(this.state.text));
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="PromoText"> Promo Code </h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            className="TextField"
            type="text"
          />
          <button className="ApplyButton"> Apply </button>
        </form>
      </div>
    );
  }
}

export default connect()(Promo);
