import actions from './Actions';
import AxleKilometersService from './Service';

const loadAxleKms = () => async (dispatch) => {
    dispatch(actions.loadAxleKmsStarted());
    let data = [];
    try {
        data = await AxleKilometersService.getAxleKilometers();
        dispatch(actions.loadAxleKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadAxleKmsFailed(err));
    }
};

export default loadAxleKms;