import React from 'react'
import { Flex } from '@elementary/components'
import { connect } from 'react-redux'
import Button from '../../components/button'
import actionCreator from '../../futils/actionCreator'
import Box from '../../components/box'

const RenderChildren = ({ element: { type, props, id }, children, onResize }) => {
  switch (type) {
    case 0: return (
      <Box width={props.width} height={props.height} onResize={onResize} id={id} >
        {children}
      </Box>
    )

    default: return (
      <Button innerKey={id} >{props.text}</Button>
    )
  }
}

const onResize = id => fn => (event, { element, size }) => fn(id)({ width: size.width, height: size.height })

const RenderLayout = ({ layout, updateElement }) => layout.map(x => (
  <RenderChildren element={x} onResize={onResize(x.id)(updateElement)} >
    {
      x.children.length !== 0 && <RenderLayout layout={x.children} updateElement={updateElement} />
    }
  </RenderChildren>
))

const Canvas = ({ layout, updateElement }) => (
  <Flex width='100%' backgroundColor='#eee' alignItems='center' justifyContent='center' >
    <RenderLayout layout={layout} updateElement={updateElement} />
  </Flex >
)

const mapStateToProps = state => state.layoutContext

const mapDispatchToProps = dispatch => ({
  updateElement: id => propsPatch => dispatch(actionCreator('UPDATE_ELEMENT', { id, propsPatch }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Canvas)