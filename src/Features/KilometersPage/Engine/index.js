import { connect } from 'react-redux';

import actions from './Redux/Actions';

import EngineKilometers from './Listing';

const mapStateToProps = (state) => {
  const { enginekm } = state;
  return { enginekm };
};

const mapDispatchToProps = dispatch => ({
    loadEngineKms: () => {
    dispatch(actions.loadEngineKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EngineKilometers);