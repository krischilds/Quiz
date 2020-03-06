import React, { Component } from "react";
import "./quiz.css";

export default class QuestionsPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      query: "",
      q1_value: 0,
      q2_value: 0,
      sum: 0,
      checkedImage: false,
      checkedName: false,
      checkedDescription: false
    };

    this.handleFormSubmit.bind(this);
  }

  handleCheck = e => {
    console.log(e.target.id);
    console.log(e.target.value);
    console.log(e.target.checked);

    let checked = e.target.checked;
    let v = parseInt(e.target.value, 10);
    if (!checked) {
      v = v * -1;
    }

    let q2_sum = this.state.q2_value + v;
    this.setState({ q2_value: q2_sum });

    switch (e.target.id) {
      case "boxName":
        this.setState({ checkedName: checked });
        break;
      case "boxImage":
        this.setState({ checkedImage: checked });
        break;
      case "boxDescription":
        this.setState({ checkedDescription: checked });
        break;
      default:
        console.log(e.target.id);
    }
  };

  submitQuestions = () => {
    console.log("submitQuestions");
  };

  skipQuestions = () => {
    console.log("skipQuestions");

    this.setState({
      query: "",
      q1_value: 0,
      q2_value: 0,
      sum: 0,
      checkedImage: false,
      checkedName: false,
      checkedDescription: false
    });
  };

  handleQueryChange = event => {
    this.setState({ query: event.target.value });
  };

  handleOptionChange = changeEvent => {
    console.log(changeEvent.target.value);

    let val = 0;
    try {
      val = parseInt(changeEvent.target.value, 10);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      q1_value: val
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
  };

  render() {
    let displayValue = this.state.q1_value === 100 ? "block" : "none";

    return (
      <div style={{ padding: "20px" }}>
        <form onSubmit={this.handleFormSubmit}>
          {/* QUERY */}
          <div>
            <label style={{ display: "flex", flexDirection: "row" }}>
              <h3 style={{ paddingRight: "10px" }}>Query</h3>
              <input
                type="text"
                value={this.state.query}
                onChange={this.handleQueryChange}
              />
            </label>
          </div>

          {/* Q1 */}
          <div>
            <div className="text question-title">
              1. How is the entity on the right panel relevant to the query?
            </div>
            <div style={{ padding: "10px" }}>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={100}
                    checked={this.state.q1_value === 100}
                    onChange={this.handleOptionChange}
                  />{" "}
                  Excellent
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={50}
                    checked={this.state.q1_value === 50}
                    onChange={this.handleOptionChange}
                  />{" "}
                  Good
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={0}
                    checked={this.state.q1_value === 0}
                    onChange={this.handleOptionChange}
                  />{" "}
                  Poor
                </label>
              </div>
            </div>
          </div>

          {/* Q1 */}
          <div style={{ display: displayValue }}>
            <div className="text question-title">
              2. Which parts of content are relevant to the query?
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginLeft: "20px" }}>
                <label htmlFor="boxImage">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="boxImage"
                    onChange={this.handleCheck}
                    value={50}
                    checked={this.state.checkedImage}
                  />{" "}
                  Image
                </label>
              </div>
              <div>
                <label htmlFor="boxName">
                  <input
                    type="checkbox"
                    id="boxName"
                    value={50}
                    onChange={this.handleCheck}
                    checked={this.state.checkedName}
                  />{" "}
                  Name
                </label>
              </div>
              <div>
                <label htmlFor="boxDescription">
                  <input
                    type="checkbox"
                    id="boxDescription"
                    value={25}
                    onChange={this.handleCheck}
                    checked={this.state.checkedDescription}
                  />{" "}
                  Description
                </label>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginRight: "10px" }}
              type="submit"
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={this.skipQuestions}
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    );
  }
}
