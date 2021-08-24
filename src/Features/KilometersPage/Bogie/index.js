import { connect } from 'react-redux';

import actions from './Redux/Actions';

import BogieKilometers from './Listing';

const mapStateToProps = (state) => {
  const { bogiekm } = state;
  return { bogiekm };
};

const mapDispatchToProps = dispatch => ({
    loadBogieKms: () => {
    dispatch(actions.loadBogieKms());
  },
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BogieKilometers);