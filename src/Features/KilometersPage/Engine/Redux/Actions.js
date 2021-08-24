import EngineKilometersService from './Service';

const DUCK_NAME = 'enginekm';

export const LOAD_ENGINE_KMS_STARTED = `${DUCK_NAME}/LOAD_ENGINE_KMS_STARTED`;
export const LOAD_ENGINE_KMS_SUCCEED = `${DUCK_NAME}/LOAD_ENGINE_KMS_SUCCEED`;
export const LOAD_ENGINE_KMS_FAILED = `${DUCK_NAME}/LOAD_ENGINE_KMS_FAILED`;

const loadEngineKmsStarted = () => ({
    type: LOAD_ENGINE_KMS_STARTED
});

const loadEngineKmsSucceed = data => ({
    type: LOAD_ENGINE_KMS_SUCCEED,
    data
});

const loadEngineKmsFailed = error => ({
    type: LOAD_ENGINE_KMS_FAILED,
    error
});

const loadEngineKms = () => async (dispatch) => {
    dispatch(loadEngineKmsStarted());
    let data = [];
    try {
        data = await EngineKilometersService.getEngineKilometers();
        dispatch(loadEngineKmsSucceed(data));
    } catch (err) {
        dispatch(loadEngineKmsFailed(err));
    }
};

const actions = {
    DUCK_NAME,

    types: {
        LOAD_ENGINE_KMS_STARTED,
        LOAD_ENGINE_KMS_SUCCEED,
        LOAD_ENGINE_KMS_FAILED,
    },

    loadEngineKmsStarted,
    loadEngineKmsSucceed,
    loadEngineKmsFailed,
    loadEngineKms,
};

export default actions;