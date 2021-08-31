import actions from './Actions';
import TrainsPageService from './Service';

const loadTrainPositions = (page) => async (dispatch) => {
    dispatch(actions.loadTrainPositionsStarted());
    let data = [];
    try {
        data = await TrainsPageService.getTrainKilometers(page);
        dispatch(actions.loadTrainPositionsSucceed(page, data));
    } catch (err) {
        dispatch(actions.loadTrainPositionsFailed(err));
    }
};

export default loadTrainPositions;