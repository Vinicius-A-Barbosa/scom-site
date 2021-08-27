import { connect } from 'react-redux';

import loadBogieKms from './Redux/Operations';

import BogieKilometers from './Listing';

const mapStateToProps = ({kilometersPage}) => ({
  bogiekm: kilometersPage.bogiekm,
});

const mapDispatchToProps = dispatch => ({
    loadBogieKms: () => {
    dispatch(loadBogieKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BogieKilometers);