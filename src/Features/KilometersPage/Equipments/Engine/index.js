import { connect } from 'react-redux';

import loadEngineKms from './Redux/Operations';

import EngineKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  enginekm: kilometersPage.enginekm,
});

const mapDispatchToProps = dispatch => ({
    loadEngineKms: () => {
    dispatch(loadEngineKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EngineKilometers);