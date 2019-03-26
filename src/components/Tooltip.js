import React from "react";

class Tooltip extends React.Component {
  state = {
    show: false
  };

  componentDidMount() {
    window.addEventListener("mousedown", this.toggleHide);
  }
  componentWillUnMount() {
    window.removeEventListener("mousedown", this.toggleHide);
  }

  toggleShow = () => {
    this.setState({ show: true });
  };

  toggleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    const { tip, text } = this.props;
    return (
      <div>
        <h2 className="TooltipText" onClick={this.toggleShow}>
          {text}
        </h2>
        {show ? (
          <div className="Tooltip">
            <h2>{tip}</h2>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Tooltip;
