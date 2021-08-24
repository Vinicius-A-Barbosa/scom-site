import BogieKilometersService from './Service';

const DUCK_NAME = 'bogiekm';

export const LOAD_BOGIE_KMS_STARTED = `${DUCK_NAME}/LOAD_BOGIE_KMS_STARTED`;
export const LOAD_BOGIE_KMS_SUCCEED = `${DUCK_NAME}/LOAD_BOGIE_KMS_SUCCEED`;
export const LOAD_BOGIE_KMS_FAILED = `${DUCK_NAME}/LOAD_BOGIE_KMS_FAILED`;

const loadBogieKmsStarted = () => ({
    type: LOAD_BOGIE_KMS_STARTED
});

const loadBogieKmsSucceed = data => ({
    type: LOAD_BOGIE_KMS_SUCCEED,
    data
});

const loadBogieKmsFailed = error => ({
    type: LOAD_BOGIE_KMS_FAILED,
    error
});

const loadBogieKms = () => async (dispatch) => {
    dispatch(loadBogieKmsStarted());
    let data = [];
    try {
        data = await BogieKilometersService.getBogieKilometers();
        dispatch(loadBogieKmsSucceed(data));
    } catch (err) {
        dispatch(loadBogieKmsFailed(err));
    }
};

const actions = {
    DUCK_NAME,

    types: {
        LOAD_BOGIE_KMS_STARTED,
        LOAD_BOGIE_KMS_SUCCEED,
        LOAD_BOGIE_KMS_FAILED,
    },

    loadBogieKmsStarted,
    loadBogieKmsSucceed,
    loadBogieKmsFailed,
    loadBogieKms,
};

export default actions;