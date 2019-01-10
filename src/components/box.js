import React from 'react'
import { Resizable } from 'react-resizable';
import { Droppable } from 'react-beautiful-dnd'

const Box = ({ width, height, onResize, children, id }) => (
  <Resizable width={width} height={height} onResize={onResize} >

    <div style={{ width, height, backgroundColor: '#fff' }} >

      <Droppable droppableId={id} >
        {(provided, snapshot) => (
          <div
            style={{ width, height }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>

  </Resizable>
)

export default Box