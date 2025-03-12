import React from "react";
import Child from "./Child/Child";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      count: 0,
      childText: "Text to ChildComponent", //передаем свойство в дочерний компонент Child",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    this.setState((prev) => ({
      count: prev.count + 1,
    }));

    this.setState({ inputValue: "" }); // очистка инпута
  }

  // Методы Жизненного Цикла
  componentDidMount() {
    console.log("componentDidMount() Монтирование");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() Обновление");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() Размонтирование");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Press</button>
        </form>
        <p>Count: {this.state.count}</p>
        <Child text={this.state.childText} />
      </div>
    );
  }
}

export default Form;
