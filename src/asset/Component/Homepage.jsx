import React from "react";
import "../styles/Homepage.scss";

class Homepage extends React.Component {

  addText = "";
  deleteText = "";
  state = {
    text: "",
    isTyping: false,
    waitToType: [
      "We create pizzas with quality ingredients in only five minutes.",
      "welcome to our pizza store",
    ],
  };


  typing = (index) => {
    let charCount = 0;
    const waitToType = this.state.waitToType;
    if (charCount < waitToType[index].length) {
      this.addText = setInterval(() => {
        let addChar = waitToType[index].substring(0, charCount);
        this.setState({
          text: addChar,
          isTyping: true,
        });
        charCount += 1;
        if (charCount === waitToType[index].length) {
          // this.deleteTyping(index, charCount);
          clearInterval(this.addText);
        }
      }, 50);
    }
  };

  // deleteTyping = (index, charCount) => {
  //   const waitToType = this.state.waitToType;
  //   if (charCount >= 0) {
  //     this.deleteText = setInterval(() => {
  //       const delChar = waitToType[index].substring(
  //         -waitToType[index].length,
  //         charCount
  //       );
  //       this.setState({
  //         text: delChar,
  //         isTyping: true,
  //       });
  //       charCount -= 1;
  //     }, 60);
  //   }
  // };

  componentDidMount() {
    this.typing(0);
  }

  componentWillUnmount() {
    clearInterval(this.addText);
    clearInterval(this.deleteText);
  }

  render() {
    return (
      <div className="homepage_container">
        <div className="homepage_slogan">
          <h2>Get it while it's hot!</h2>
          <p>{this.state.text}</p>
          <button>Order Online</button>
        </div>
      </div>
    );
  }
}

export default Homepage;
