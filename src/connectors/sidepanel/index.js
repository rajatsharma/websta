import React from 'react'
import { Flex, Text } from '@elementary/components'
import { Droppable } from 'react-beautiful-dnd';
import Button from '../../components/button'
import getRandom from '../../futils/getrandom'
import { DraggableBox } from '../../components/box'

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
          <Button innerKey={getRandom(0, 500)} >Button</Button>
          <DraggableBox innerKey={getRandom(500, 1000)} >Column</DraggableBox>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </Flex>
)

export default Sidepanel