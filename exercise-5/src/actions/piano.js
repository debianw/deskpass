//
import mixer from '../utils/mixer';

//
const isPianoPoweredOn = ({ piano }) => piano.power === 'on';

//
export const setPitch = pitch => (dispatch, getState) => {
  if (!isPianoPoweredOn(getState())) return alert('Please turn on the Piano');

  dispatch({
    type: 'PIANO_SET_PITCH',
    pitch,
  });
};

//
export const setKeysPressed = keys => (dispatch, getState) => {
  if (!isPianoPoweredOn(getState())) return alert('Please turn on the Piano');

  dispatch({
    type: 'PIANO_SET_KEYS_PRESSED',
    keys,
  });

  const state = getState();
  const config = {
    ...state.piano,
  };

  // Send to all user input to the central mixer component
  mixer.play(config);
};

//
export const setPower = power => (dispatch, getState) => {
  if (power === 'off')
    dispatch({
      type: 'PIANO_RESET',
      power,
    });
  
  dispatch({
    type: 'PIANO_SET_POWER',
    power,
  });
};

