import React from 'react'
import { Flex, Text } from '@elementary/components'
import { Droppable } from 'react-beautiful-dnd';
import Button from '../../components/button'
import getRandom from '../../futils/getrandom'

const Sidepanel = props => (
  <Flex
    flexDirection='column'
    width='25%' p='5px 10px'
  >
    <Droppable droppableId="droppable-1" isDropDisabled >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Text fontSize='30px' mb='20px' >Components</Text>
          {
            <Button innerKey={getRandom(1000)} >Button</Button>
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Flex>
)

export default Sidepanel