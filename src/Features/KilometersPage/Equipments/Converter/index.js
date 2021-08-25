import { connect } from 'react-redux';

import loadConverterKms from './Redux/Operations';

import ConverterKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  converterkm: kilometersPage.converterkm,
});

const mapDispatchToProps = dispatch => ({
    loadConverterKms: () => {
    dispatch(loadConverterKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConverterKilometers);