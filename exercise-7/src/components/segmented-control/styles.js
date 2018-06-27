//
import styled from 'styled-components';

//
const Root = styled.div`
  border: ${props => props.size === 'mini' ? '0' : '#1f7296 1px solid'};
  border-radius: ${props => props.size === 'mini' ? '0' : '5px'};
  display: inline-block;
  padding: 5px;
  background: ${props => props.shade === 'light' ? '#fff' : '#1f5c79'}
`;

//
const Option = styled.span`
  display: inline-block;
  cursor: pointer;
  font-size: ${props => props.size === 'mini' ? '12px' : '1em' };
  padding: ${props => {
    if (props.size === 'normal') return '20px 50px';
    if (props.size === 'small') return '10px 20px';
    if (props.size === 'mini') return '5px';
  }};
  border-radius: 5px;
  background: ${props => {
    if (props.selected && props.shade === 'dark') return '#fff';
    if (props.selected && props.shade === 'light') return '#1f7296';
  }};
  color: ${props => {
    if (props.selected && props.shade === 'dark') return '#1f7296';
    if (props.selected && props.shade === 'light') return '#fff';
    if (!props.selected && props.shade === 'dark') return '#fff';
    if (!props.selected && props.shade === 'light') return '#1f7296';
  }};
`;

//
export {
  Root,
  Option,
};