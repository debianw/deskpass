//
import React from 'react';
import styled from 'styled-components';

const PowerButton = styled.button`
  outline: none;
  background: ${props => props.power === 'on' ? 'green' : 'red' };
  border: 0;
  padding: 1em;
`;

const PitchButton = styled.button`
  outline: none;
  background: ${props => props.pitch === 'high' ? 'orange' : 'gray' };
  border: 0;
  padding: 1em;
`;

const Keys = styled.div`
  display: flex;
  margin: 1em 0;
`;

const Key = styled.div`
  cursor: pointer;
  width: 30px;
  height: 135px;
  border: 1px solid #000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Controls = styled.div`
  display: flex;
`;

const keys = [
  { id: 1, label: 'C', value: 'c' },
  { id: 2, label: 'D', value: 'd' },
  { id: 3, label: 'E', value: 'e' },
  { id: 4, label: 'F', value: 'f' },
  { id: 5, label: 'G', value: 'g' },
  { id: 6, label: 'A', value: 'a' },
  { id: 7, label: 'B', value: 'b' },
  { id: 8, label: 'C', value: 'c' },
  { id: 9, label: 'D', value: 'd' },
];

//
export default ({
  power,
  pitch,
  keysPressed,
  setKeysPressed,
  setPitch,
  setPower,
}) => {
  const createKey = ({ id, label, value }) =>
    <Key
      key={`${value}-${id}`}
      onClick={() => setKeysPressed([value])}>
        <span> {label} </span>
    </Key>

  return (
    <div>
      <Keys>
        { keys.map(key => createKey(key)) }
      </Keys>

      <Controls>
        <PowerButton power={power} onClick={() => setPower(
            (power === 'on' ? 'off' : 'on')
          )}>
            Powered: { power === 'on' ? 'ON' : 'OFF' }
        </PowerButton>

        <PitchButton pitch={pitch} onClick={() => setPitch(
          (pitch === 'high' ? 'low' : 'high')
        )}>
          Pitch: { pitch }
        </PitchButton>
      </Controls>
    </div>
  );
};