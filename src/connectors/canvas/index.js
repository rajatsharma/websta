import React from 'react'
import { Flex } from '@elementary/components'
import { connect } from 'react-redux'
import Button from '../../components/button'
import actionCreator from '../../futils/actionCreator'
import Box from '../../components/box'

const RenderChildren = ({ element: { type, props, id }, children, onResize }) => {
  switch (type > 500) {
    case true: return (
      <Box width={props.width} height={props.height} onResize={onResize} id={id} flex={props.flex} zindex={props.zindex} >
        {children}
      </Box>
    )

    default: return (
      <Button innerKey={id} >{props.text}</Button>
    )
  }
}

const onResize = id => w => h => fn => (e, direction, ref, d) => fn(id)({ width: w + d.width, height: h + d.height })

const renderLayout = (layout, updateElement) => layout.map(x => (
  <RenderChildren element={x} onResize={onResize(x.id)(x.props.width)(x.props.height)(updateElement)} >
    {
      x.children.length !== 0 && renderLayout(x.children, updateElement)
    }
  </RenderChildren>
))

const Canvas = ({ layout, updateElement }) => (
  <Flex width='100%' height='100%' justifyContent='center' alignItems='center' backgroundColor='#eee' >
    {
      renderLayout(layout, updateElement)
    }
  </Flex >
)

const mapStateToProps = state => state.layoutContext

const mapDispatchToProps = dispatch => ({
  updateElement: id => propsPatch => dispatch(actionCreator('UPDATE_ELEMENT', { id, propsPatch }))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Canvas))