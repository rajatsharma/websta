import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux'
import actionCreator from '../../futils/actionCreator'

class DragContext extends React.Component {
  onDragEnd = result => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (destination.droppableId === 'canvas') {
      this.props.addToLayout(source.index)
    }
  };

  render() {
    return (
      <DragDropContext
        onBeforeDragStart={this.onBeforeDragStart}
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {this.props.children}
      </DragDropContext>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToLayout: index => dispatch(actionCreator('ADD_TO_LAYOUT', index))
})

export default connect(_ => _, mapDispatchToProps)(DragContext)