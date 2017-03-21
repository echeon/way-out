import { connect } from 'react-redux';
import { selectTrain } from '../../../actions/Actions';
import DirectionSelect from './DirectionSelect';

const mapStateToProps = state => ({
  data: state.data,
  selectedTrain: state.selectedTrain,
})

const mapDispatchToProps = dispatch => ({
  // selectTrain: train => dispatch(selectTrain(train))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectionSelect);
