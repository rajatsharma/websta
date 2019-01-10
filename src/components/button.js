import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-color: ${({ bC }) => bC};
  color: ${({ c }) => c};
  border-radius: ${({ bR }) => bR};
  margin: ${({ m }) => m};
`

const ButtonWrapper = props => (
  <Draggable draggableId={`d-${props.innerKey}`} index={props.innerKey}>
    {(provided, snapshot) => (
      <div
        style={{ width: props.w, height: props.h }}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div>
          <Button {...props} />
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
)

ButtonWrapper.defaultProps = {
  w: '200px',
  h: '40px',
  bC: '#000',
  c: '#fff',
  bR: '0px',
  m: '5px'
}

export default ButtonWrapper