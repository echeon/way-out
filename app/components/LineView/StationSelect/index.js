import { connect } from 'react-redux';
import { selectStation } from '../../../actions/Actions';
import StationSelect from './StationSelect';

const mapStateToProps = state => {
  const stations = state.data.find(x => x.name === state.selectedTrain).stations;
  return {
    stations,
  };
};

const mapDispatchToProps = dispatch => ({
  selectStation: station => dispatch(selectStation(station))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StationSelect);
