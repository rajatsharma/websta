import getRandom from '../../futils/getrandom'

// initState :: State
const initialState = {
  layout: [
    {
      type: getRandom(500, 1000),
      id: '' + getRandom(500, 1000),
      props: {
        width: 500,
        height: 500,
        flex: 'column'
      },
      children: []
    }
  ]
}

const createButton = id => ({
  type: getRandom(0, 500),
  id: id,
  props: {
    width: 400,
    height: 400,
    text: id
  },
  children: []
})

const createBoxCol = (id, zindex) => ({
  type: getRandom(500, 1000),
  id: '' + id,
  props: {
    width: 200,
    height: 200,
    text: id,
    flex: 'column',
    zindex
  },
  children: []
})

const createBoxRow = id => ({
  type: getRandom(1000, 1500),
  id: '' + id,
  props: {
    width: 200,
    height: 200,
    text: id,
    flex: 'row'
  },
  children: []
})

const traverseLayout = (layout, id, propsPatch) => layout.map(x => (
  x.id === id
    ? { ...x, props: { ...x.props, ...propsPatch } }
    : { ...x, children: [...traverseLayout(x.children, id, propsPatch)] }
))

const addToLayout = (layout, sID, dID, zindex = 1) => layout.map(x => (
  x.id === dID
    ? { ...x, children: [...x.children, sID > 500 ? sID < 1000 ? createBoxCol(sID, zindex) : createBoxRow(sID) : createButton(sID)] }
    : { ...x, children: [...addToLayout(x.children, sID, dID, zindex + 1)] }
))

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_LAYOUT': return { ...state, layout: addToLayout(state.layout, payload.sID, payload.dID) }
    case 'UPDATE_ELEMENT': return { ...state, layout: traverseLayout(state.layout, payload.id, payload.propsPatch) }
    default: return state
  }
}