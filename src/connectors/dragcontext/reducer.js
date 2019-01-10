const initialState = {
  layout: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LAYOUT': return { ...state, layout: [...state.layout, action.payload] }
    default: return state
  }
}