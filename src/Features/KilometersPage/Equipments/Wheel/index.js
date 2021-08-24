import { connect } from 'react-redux';

import actions from './Redux/Actions';

import WheelKilometers from './Listing';

const mapStateToProps = (state) => {
  const { wheelkm } = state.kilometersPage;
  return { wheelkm };
};

const mapDispatchToProps = dispatch => ({
    loadWheelKms: () => {
    dispatch(actions.loadWheelKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WheelKilometers);