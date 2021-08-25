import actions from './Actions';
import WheelKilometersService from './Service';

const loadWheelKms = () => async (dispatch) => {
    dispatch(actions.loadWheelKmsStarted());
    let data = [];
    try {
        data = await WheelKilometersService.getWheelKilometers();
        dispatch(actions.loadWheelKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadWheelKmsFailed(err));
    }
};

export default loadWheelKms;