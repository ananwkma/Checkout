import React from "react";
import { connect } from "react-redux";

class ItemDetails extends React.Component {
  render() {
    const { img, item_name, price, quantity, description } = this.props.item;
    return (
      <div className="ItemDetailsContainer">
        <img className="ImgContainer" src={img} />
        <div>
          <div className="title">{item_name}</div>
          <div className="price">${price}</div>
          <div className="quantity">Qty:{quantity}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  item: state.item
}))(ItemDetails);
