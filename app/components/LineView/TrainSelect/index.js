import { connect } from 'react-redux';
import { selectTrain } from '../../../actions/Actions';
import TrainSelect from './TrainSelect';

const mapStateToProps = state => {
  return {
    selectedTrain: state.selectedTrain,
  }
}

const mapDispatchToProps = dispatch => ({
  selectTrain: train => dispatch(selectTrain(train))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainSelect);
