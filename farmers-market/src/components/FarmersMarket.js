import React from 'react';
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

class FarmersMarket extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayProduce: false,
      displaySchedule: false
    };
  }

  handleClick = () => {
    if (this.state.displayProduce === false) {
      this.setState({ displayProduce: true })
    } else if (this.state.displayProduce === true) {
      this.setState({ questionTwoAnswered: true })
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === true && this.state.questionThreeAnswered === false) {
      this.setState({ questionThreeAnswered: true })
    }
  }

  render() {
    let currentlyVisibleState = null;
    let currentQuestion = null;
    let currentButton = null; //cleaner syntax for this? 
    if (this.state.questionOneAnswered === false) {
      //Question One 
      currentQuestion = questionList[0];
      currentlyVisibleState = <Question question={currentQuestion}/>
      currentButton = <button onClick={this.handleClick}>Yes</button>;
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === false) {
      //Qu Two
      currentQuestion = questionList[1];
      currentlyVisibleState = <Question question={currentQuestion}/>
      currentButton = <button onClick={this.handleClick}>Yes</button>;
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === true && this.state.questionThreeAnswered === false) {
      currentQuestion = questionList[2];
      currentlyVisibleState = <Question question={currentQuestion}/>
      currentButton = <button onClick={this.handleClick}>Yes</button>;
      //Qu 3
    } else if (this.state.questionOneAnswered === true && this.state.questionTwoAnswered === true && this.state.questionThreeAnswered === true) {
      currentlyVisibleState = <TicketControl />;
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {currentButton}
      </React.Fragment>
    );
  }
}
export default QuestionTicketControl;