import React from "react";
import Child from "./Child/Child";
import { createRef } from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      count: 0,
      value: "Text at Form Component",
      childText: "Child button", //передаем значение в дочерний компонент Child",
      disable: false,
      inputSubmit: createRef()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    if (e.target.value.includes('React')) {
      this.setState({ disable: true })
    } else {
      this.setState({ disable: false })
    }
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState((prev) => ({
      count: prev.count + 1,
    }));

    this.setState({ inputValue: "" }); // очистка инпута
  }

  handleChangeState(text) {
    this.setState({ value: text });
  }

  // Методы Жизненного Цикла
  componentDidMount() {
    console.log("componentDidMount() Монтирование");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() Обновление");
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() Размонтирование");
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} className="form_submit">
          <div>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <input
              type="submit"
              value="Отправить форму"
              ref={this.inputSubmit}
              disabled={this.state.disable}
            />
          </div>
          <button>Tap to count</button>
        </form>
        <p>Count: {this.state.count}</p>
        <Child onAction={this.handleChangeState} text={this.state.childText} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Form;
