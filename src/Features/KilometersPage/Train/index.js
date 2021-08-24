import { connect } from 'react-redux';

import actions from './Redux/Actions';

import TrainKilometers from './Listing';

const mapStateToProps = (state) => {
  const { trainkm } = state;
  return { trainkm };
};

const mapDispatchToProps = dispatch => ({
    loadTrainKms: () => {
    dispatch(actions.loadTrainKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainKilometers);