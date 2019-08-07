/*
  Use it like this: export default WithHover(Tooltip, 'hover')
  In this case 'hover' is the name of the hovering state in Tooltip
*/

import React from 'react'

export default function WithHover (Component, propName = 'hovering') {
  return class WithHover extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        hovering: false
      }

      this.mouseOver = this.mouseOver.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOver () {
      this.setState({
        hovering: true
      })
    }

    mouseOut () {
      this.setState({
        hovering: false
      })
    }

    render () {
      const props = {
        [propName]: this.state.hovering,
        ...this.props
      }
      return (
        <div
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          <Component {...props}/>
        </div>
      )
    }
  }
}
