import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Resizable from 're-resizable'
import { Flex } from '@elementary/components'

const Box = ({ width, height, onResize, children, id, flex, zindex }) => (
  <Resizable
    size={{ width: width, height: height }}
    onResizeStop={onResize}
  >
    <Flex bg='#fff' h='100%' border='1px dashed #000' position='absolute' style={{ zIndex: zindex }} >
      <Droppable droppableId={id} direction={flex === 'row' ? 'horizontal' : 'vertical'} >
        {(provided, snapshot) => (
          <div
            style={{ width, height, display: 'flex', flexDirection: flex, border: snapshot.isDraggingOver && '2px solid #000' }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Flex>
  </Resizable>
)

const SampleBox = styled.div`
  width: 200px;
  height: 40px;
  border: 1px dotted #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

export const DraggableBox = (props) => (
  <Draggable draggableId={`d-${props.innerKey}`} index={props.innerKey}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <SampleBox>
          {props.children}
        </SampleBox>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
)

export default Box