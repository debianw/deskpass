//
const initialState = {
  keys: [],
  pitch: {},
  power: 'off',
};

//
export default (state = initialState, action) => {
  switch(action.type) {
    case 'PIANO_SET_KEYS_PRESSED':
      return {
        ...state,
        keys: action.keys,
      }

    case 'PIANO_SET_POWER':
      return {
        ...state,
        power: action.power,
      }

    case 'PIANO_SET_PITCH':
      return {
        ...state,
        pitch: action.pitch,
      }

    default:
      return state;
  }
}