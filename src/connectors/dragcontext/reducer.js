import getRandom from '../../futils/getrandom'

// initState :: State
const initialState = {
  layout: [
    {
      type: 0,
      id: '' + getRandom(1000),
      props: {
        width: 400,
        height: 400
      },
      children: []
    }
  ]
}

const createButton = id => ({
  type: 1,
  id: id,
  props: {
    width: 400,
    height: 400,
    text: 'Button'
  },
  children: []
})

const traverseLayout = (layout, id, propsPatch) => layout.map(x => (
  x.id === id
    ? { ...x, props: { ...x.props, ...propsPatch } }
    : { ...x, children: [...traverseLayout(x.children)] }
))

const addToLayout = (layout, sID, dID) => layout.map(x => (
  x.id === dID
    ? { ...x, children: [...x.children, createButton(sID)] }
    : { ...x, children: [...addToLayout(x.children)] }
))

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_LAYOUT': return { ...state, layout: addToLayout(state.layout, payload.sID, payload.dID) }
    case 'UPDATE_ELEMENT': return { ...state, layout: traverseLayout(state.layout, payload.id, payload.propsPatch) }
    default: return state
  }
}