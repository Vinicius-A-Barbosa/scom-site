import { connect } from 'react-redux';

import loadWheelKms from './Redux/Operations';

import WheelKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  wheelkm: kilometersPage.wheelkm,
});

const mapDispatchToProps = dispatch => ({
    loadWheelKms: () => {
    dispatch(loadWheelKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WheelKilometers);