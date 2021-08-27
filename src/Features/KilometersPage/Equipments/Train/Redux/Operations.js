import actions from './Actions';
import TrainKilometersService from './Service';

const loadTrainKms = () => async (dispatch) => {
    dispatch(actions.loadTrainKmsStarted());
    let data = [];
    try {
        data = await TrainKilometersService.getTrainKilometers();
        dispatch(actions.loadTrainKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadTrainKmsFailed(err));
    }
};

export default loadTrainKms;