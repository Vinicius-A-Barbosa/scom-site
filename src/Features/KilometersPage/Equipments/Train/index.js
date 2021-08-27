import { connect } from 'react-redux';

import loadTrainKms from './Redux/Operations';

import TrainKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  trainkm: kilometersPage.trainkm,
});

const mapDispatchToProps = dispatch => ({
    loadTrainKms: () => {
    dispatch(loadTrainKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainKilometers);