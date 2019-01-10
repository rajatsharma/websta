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

    if (destination.droppableId) {
      this.props.addToLayout(source.index, destination.droppableId)
    }
  };

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.props.children}
      </DragDropContext>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToLayout: (sID, dID) => dispatch(actionCreator('ADD_TO_LAYOUT', { sID, dID }))
})

export default connect(_ => _, mapDispatchToProps)(DragContext)