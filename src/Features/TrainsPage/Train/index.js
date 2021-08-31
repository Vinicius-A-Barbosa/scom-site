import { connect } from 'react-redux';

import loadTrainPositions from '../Redux/Operations';

import TrainPositions from './TrainPositions';

const mapStateToProps = ({trainsPage}) => ({
  trainsPage: trainsPage,
});

const mapDispatchToProps = dispatch => ({
    loadTrainPositions: (page) => {
    dispatch(loadTrainPositions(page));
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainPositions);