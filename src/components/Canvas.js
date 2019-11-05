import React, { Component, Fragment } from 'react'

class Canvas extends Component {
	componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
	 ctx.fillRect(0,0, 100, 100);
  }
  render() {
    return(
      <div>
        <canvas ref="canvas" width={640} height={425} />
      </div>
    )
  }
}

export default Canvas;
