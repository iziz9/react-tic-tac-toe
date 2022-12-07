import React, { Component } from 'react'
import './Square.css'

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null //value의 state 초기값을 null로 생성
    }
  }
  render() {
    return (
      <button onClick={() => { this.setState({ value: 'x' }) }} className="square">
        {this.state.value}
      </button>
    )
  }
}

export default Square