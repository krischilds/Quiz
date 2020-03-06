import React, { Component } from "react";
import QuestionsPanel from "./QuestionsPanel";
import ContentPanel from "./ContentPanel";

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "The Great Wall",
      description: "The Great Wall ... something ... something ... bla bla bla."
    };
    this.handleSubmit.bind(this);
  }

  handleSubmit = quizState => {
    console.log(quizState);

    const isValid = quizState.q1_value >= 0 && quizState.q1_value <= 100;
    if (!isValid) {
      console.log("validation error");
      return;
    }

    this.setState({ query: quizState.query });
  };

  render() {
    return (
      <section style={{ display: "flex", flexDirection: "row" }}>
        <QuestionsPanel handleSubmit={this.handleSubmit} />
        <ContentPanel
          name={this.state.query}
          description={this.state.description}
        />
      </section>
    );
  }
}
