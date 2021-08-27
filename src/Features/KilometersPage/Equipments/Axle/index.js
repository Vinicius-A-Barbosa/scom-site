import { connect } from 'react-redux';

import loadAxleKms from './Redux/Operations';

import AxleKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  axlekm: kilometersPage.axlekm,
});

const mapDispatchToProps = dispatch => ({
    loadAxleKms: () => {
    dispatch(loadAxleKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AxleKilometers);