import TrainKilometersService from './Service';

const DUCK_NAME = 'trainkm';

export const LOAD_TRAIN_KMS_STARTED = `${DUCK_NAME}/LOAD_TRAIN_KMS_STARTED`;
export const LOAD_TRAIN_KMS_SUCCEED = `${DUCK_NAME}/LOAD_TRAIN_KMS_SUCCEED`;
export const LOAD_TRAIN_KMS_FAILED = `${DUCK_NAME}/LOAD_TRAIN_KMS_FAILED`;

const loadTrainKmsStarted = () => ({
    type: LOAD_TRAIN_KMS_STARTED
});

const loadTrainKmsSucceed = data => ({
    type: LOAD_TRAIN_KMS_SUCCEED,
    data
});

const loadTrainKmsFailed = error => ({
    type: LOAD_TRAIN_KMS_FAILED,
    error
});

const loadTrainKms = () => async (dispatch) => {
    dispatch(loadTrainKmsStarted());
    let data = [];
    try {
        data = await TrainKilometersService.getTrainKilometers();
        dispatch(loadTrainKmsSucceed(data));
    } catch (err) {
        dispatch(loadTrainKmsFailed(err));
    }
};

const actions = {
    DUCK_NAME,

    types: {
        LOAD_TRAIN_KMS_STARTED,
        LOAD_TRAIN_KMS_SUCCEED,
        LOAD_TRAIN_KMS_FAILED,
    },

    loadTrainKmsStarted,
    loadTrainKmsSucceed,
    loadTrainKmsFailed,
    loadTrainKms,
};

export default actions;