import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Text from Child component",
    };
    this.handleChildAction = this.handleChildAction.bind(this);
  }

  handleChildAction() {
    this.props.onAction(this.state.value);
  } //данный метод передает значение стейта от дочернего компонента к родителю

  render() {
    return (
      <div>
        <button onClick={this.handleChildAction}>{this.props.text}</button>
      </div>
    );
  }
}

export default Child;
