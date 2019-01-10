import React from 'react'
import { Flex } from '@elementary/components'
import { Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import Button from '../../components/button'



const Canvas = props => (
  <Flex width='100%' backgroundColor='#eee' >
    <Droppable droppableId="canvas" >
      {(provided, snapshot) => (
        <div
          style={{ width: '100%' }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div style={{ overflow: 'auto' }} >
            {
              props.layout.map(x => (
                <Button innerKey={x} >Button</Button>
              ))
            }
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Flex>
)

const mapStateToProps = state => state.layoutContext

export default connect(mapStateToProps, _ => ({}))(Canvas)