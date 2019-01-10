import React from 'react'
import { Flex } from '@elementary/components'

import Sidepanel from '../connectors/sidepanel'
import Canvas from '../connectors/canvas'

export default props => (
  <Flex width='100%' height='100%' >
    <Sidepanel />
    <Canvas />
  </Flex>
)