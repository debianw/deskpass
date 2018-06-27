//
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Root,
  Option,
} from './styles';

//
class SegmentedControl extends Component {

  state = {
    currentValue: '',
  };

  onSelect = (value) => {
    const { onChange } = this.props;

    onChange(value);
    this.setState({ currentValue: value });
  }

  render() {
    return (
      <Root
        size={this.props.size}
        shade={this.props.shade}
      >
        {this.props.options.map(option =>
          <Option
            size={this.props.size}
            shade={this.props.shade}
            selected={this.state.currentValue === option.value}
            key={option.value}
            onClick={() => this.onSelect(option.value)}>
              {option.label}
          </Option>
        )}
      </Root>
    );
  }

}

//
SegmentedControl.defaultProps = {
  size: 'normal',
  shade: 'light',
  options: [],
  onChange: () => {},
};

//
SegmentedControl.propTypes = {
  size: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

//
export default SegmentedControl;