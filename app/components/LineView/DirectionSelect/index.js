import { connect } from 'react-redux';
import { selectDirection } from '../../../actions/Actions';
import DirectionSelect from './DirectionSelect';

const mapStateToProps = state => {
  const directions = state.data.find(x => x.name === state.selectedTrain).directions;
  return {
    directions,
  }
}

const mapDispatchToProps = dispatch => ({
  selectDirection: direction => dispatch(selectDirection(direction))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectionSelect);
