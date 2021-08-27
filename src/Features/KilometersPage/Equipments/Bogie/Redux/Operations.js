import actions from './Actions';
import BogieKilometersService from './Service';

const loadBogieKms = () => async (dispatch) => {
    dispatch(actions.loadBogieKmsStarted());
    let data = [];
    try {
        data = await BogieKilometersService.getBogieKilometers();
        dispatch(actions.loadBogieKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadBogieKmsFailed(err));
    }
};

export default loadBogieKms;