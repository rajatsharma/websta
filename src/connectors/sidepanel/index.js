import React from 'react'
import { Flex, Text } from '@elementary/components'
import { Droppable } from 'react-beautiful-dnd';
import Button from '../../components/button'

const Sidepanel = props => (
  <Flex
    flexDirection='column'
    width='25%' p='5px 10px'
  >
    <Droppable droppableId="droppable-1" type="PERSON">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Text fontSize='30px' mb='20px' >Components</Text>
          {
            [...Array(10).keys()].map(x => (
              <Button innerKey={x} >Text</Button>
            ))
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Flex>
)

export default Sidepanel