import React, { Component } from 'react';

class TechDraggableItem extends Component {
  shouldComponentUpdate(nextProps) {
    return !(nextProps.list === this.props.list);
  }

  render() {
    return (
      <div>{this.props.tech}</div>
    )
  }
}

export default TechDraggableItem;