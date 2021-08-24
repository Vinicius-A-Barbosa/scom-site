import { connect } from 'react-redux';

import actions from './Redux/Actions';

import ConverterKilometers from './Listing';

const mapStateToProps = (state) => {
  const { converterkm } = state.kilometersPage;
  return { converterkm };
};

const mapDispatchToProps = dispatch => ({
    loadConverterKms: () => {
    dispatch(actions.loadConverterKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterKilometers);