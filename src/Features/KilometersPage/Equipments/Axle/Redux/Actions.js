import AxleKilometersService from './Service';

const DUCK_NAME = 'axlekm';

export const LOAD_AXLE_KMS_STARTED = `${DUCK_NAME}/LOAD_AXLE_KMS_STARTED`;
export const LOAD_AXLE_KMS_SUCCEED = `${DUCK_NAME}/LOAD_AXLE_KMS_SUCCEED`;
export const LOAD_AXLE_KMS_FAILED = `${DUCK_NAME}/LOAD_AXLE_KMS_FAILED`;

const loadAxleKmsStarted = () => ({
    type: LOAD_AXLE_KMS_STARTED
});

const loadAxleKmsSucceed = data => ({
    type: LOAD_AXLE_KMS_SUCCEED,
    data
});

const loadAxleKmsFailed = error => ({
    type: LOAD_AXLE_KMS_FAILED,
    error
});

const loadAxleKms = () => async (dispatch) => {
    dispatch(loadAxleKmsStarted());
    let data = [];
    try {
        data = await AxleKilometersService.getAxleKilometers();
        dispatch(loadAxleKmsSucceed(data));
    } catch (err) {
        dispatch(loadAxleKmsFailed(err));
    }
};

const actions = {
    DUCK_NAME,

    types: {
        LOAD_AXLE_KMS_STARTED,
        LOAD_AXLE_KMS_SUCCEED,
        LOAD_AXLE_KMS_FAILED,
    },

    loadAxleKmsStarted,
    loadAxleKmsSucceed,
    loadAxleKmsFailed,
    loadAxleKms,
};

export default actions;