import './Chat-Input.css';
import React, { Component } from "react";

class ChatInput extends Component {
  textLineHeight = 20;
  minRows = 1;
  maxRows = 5;

  style = {
    minHeight: this.textLineHeight + "px",
    maxHeight: this.textLineHeight * this.maxRows + "px",
    resize: "none",
    lineHeight: this.textLineHeight + "px",
    overflow: "hidden"
  };

  update = e => {
    e.target.rows = 1;
    e.target.rows = ~~(e.target.scrollHeight / this.textLineHeight);
    console.log(e.target.scrollHeight);
  };

  render() {
    return (
      <div class="input-wrapper">
        <textarea placeholder="Skriv ett meddelande..." rows={this.minRows} onChange={this.update} style={this.style} />
      </div>
    );
  }
}

export default ChatInput;