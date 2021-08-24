import { connect } from 'react-redux';

import actions from './Redux/Actions';

import AxleKilometers from './Listing';

const mapStateToProps = (state) => {
  const { axlekm } = state;
  return { axlekm };
};

const mapDispatchToProps = dispatch => ({
    loadAxleKms: () => {
    dispatch(actions.loadAxleKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AxleKilometers);