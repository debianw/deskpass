//
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Piano from '../components/piano';
import * as pianoActions from '../actions/piano';

//
const mapStateToProps = state => ({
  power: state.piano.power,
  pitch: state.piano.pitch,
  keysPressed: state.piano.keys,
});

//
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...pianoActions,
    },
    dispatch
  );

//
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Piano);