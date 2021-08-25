import actions from './Actions';
import EngineKilometersService from './Service';

const loadEngineKms = () => async (dispatch) => {
    dispatch(actions.loadEngineKmsStarted());
    let data = [];
    try {
        data = await EngineKilometersService.getEngineKilometers();
        dispatch(actions.loadEngineKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadEngineKmsFailed(err));
    }
};

export default loadEngineKms;