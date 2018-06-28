//
import React from 'react';
import styled from 'styled-components';

const PowerButton = styled.button`
  background: ${props => props.power === 'on' ? 'green' : 'red' };
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

//
export default ({
  power,
  pitch,
  keysPressed,
  setKeysPressed,
  setPitch,
  setPower,
}) => {
  return (
    <div>
      <Keys>
        <Key onClick={() => setKeysPressed(['c'])}> <span> C </span> </Key>
        <Key onClick={() => setKeysPressed(['d'])}> <span> D </span> </Key>
        <Key onClick={() => setKeysPressed(['e'])}> <span> E </span> </Key>
        <Key onClick={() => setKeysPressed(['f'])}> <span> F </span> </Key>
        <Key onClick={() => setKeysPressed(['g'])}> <span> G </span> </Key>
        <Key onClick={() => setKeysPressed(['a'])}> <span> A </span> </Key>
        <Key onClick={() => setKeysPressed(['b'])}> <span> B </span> </Key>
        <Key onClick={() => setKeysPressed(['c'])}> <span> C </span> </Key>
        <Key onClick={() => setKeysPressed(['d'])}> <span> D </span> </Key>
      </Keys>

      <PowerButton power={power} onClick={() => setPower(
          (power === 'on' ? 'off' : 'on')
        )}> { power === 'on' ? 'ON' : 'OFF' }
      </PowerButton>
    </div>
  );
};