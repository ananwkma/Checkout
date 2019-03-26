import React from "react";
import Expander from "./Expander";
import Tooltip from "./Tooltip";
import Promo from "./Promo";
import ItemDetails from "./ItemDetails";
import { connect } from "react-redux";

class Checkout extends React.Component {
  renderPromo = discountInDollars => {
    return (
      <div>
        <h2 className="alignLeft">Discount</h2>
        <h2 className="Savings">-${discountInDollars}</h2>
      </div>
    );
  };

  render() {
    const { subtotal, savings, tax, zip, total, discount } = this.props.pricing;
    let discountInDollars = 0;
    if (discount !== 0) {
      discountInDollars = (subtotal / discount).toFixed(2);
    }
    return (
      <div className="Checkout">
        <div className="test">
          <h2 className="alignLeft"> Subtotal </h2>
          <h2 className="alignRight"> ${subtotal || "0.00"} </h2>
        </div>
        <div>
          <Tooltip
            text="Pickup savings"
            tip="Picking up your order helps cut costs and we pass the savings on to you"
          />
          <h2 className="Savings"> -${savings || "0.00"} </h2>
        </div>
        <div>
          <h2 className="alignLeft">
            Est. taxes & fees
            <br />
            (Based on {zip})
          </h2>
          <h2 className="alignRight"> ${tax || "0.00"} </h2>
        </div>
        {discount > 0 ? this.renderPromo(discountInDollars) : null}
        <hr />
        <div>
          <h1 className="alignLeft"> Est. Total </h1>
          <h1 className="alignRight">${total - discountInDollars || "0.00"}</h1>
        </div>

        <Expander showText="See Item Details" hideText="Hide Item Details">
          <ItemDetails />
        </Expander>
        <hr />
        <Expander showText="Apply Promo Code" hideText="Hide Promo Code">
          <Promo />
        </Expander>
      </div>
    );
  }
}

function mapStateToProps({ pricing }) {
  return { pricing: pricing };
}

export default connect(mapStateToProps)(Checkout);
