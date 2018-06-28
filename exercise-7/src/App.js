//
import React, { Component } from 'react';
import SegmentedControl from './components/segmented-control';

//
class App extends Component {
  state = {
    selectedValue: ''
  };

  onOptionsChanged = (value) => {
    this.setState({ selectedValue: value });
  }

  render() {
    return (
      <form style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center' }}> Selected: {this.state.selectedValue} </h2>

        <div>
          <h3> Light shade </h3>
          <SegmentedControl
            shade="light"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
            ]}
          />
          
          <hr />
          
          <SegmentedControl
            shade="light"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
              { label: 'Option 3', value: 'option-3' },
            ]}
          />
        </div>

        <div>
          <h3> Dark shade </h3>
          <SegmentedControl
            shade="dark"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
            ]}
          />
          
          <hr />
          
          <SegmentedControl
            shade="dark"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
              { label: 'Option 3', value: 'option-3' },
            ]}
          />
        </div>

        <div>
          <h3> Small </h3>
          <SegmentedControl
            size="small"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
            ]}
          />
          
          <hr />

          <SegmentedControl
            size="small"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
              { label: 'Option 3', value: 'option-3' },
            ]}
          />
        </div>

        <div>
          <h3> Mini </h3>
          <SegmentedControl
            size="mini"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
            ]}
          />

          <hr />

          <SegmentedControl
            size="mini"
            onChange={this.onOptionsChanged}
            options={[
              { label: 'Option 1', value: 'option-1' },
              { label: 'Option 2', value: 'option-2' },
              { label: 'Option 3', value: 'option-3' },
            ]}
          />
        </div>
      </form>
    );
  }
}

export default App;
