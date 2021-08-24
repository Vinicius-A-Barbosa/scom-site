import ConverterKilometersService from './Service';

const DUCK_NAME = 'converterkm';

export const LOAD_CONVERTER_KMS_STARTED = `${DUCK_NAME}/LOAD_CONVERTER_KMS_STARTED`;
export const LOAD_CONVERTER_KMS_SUCCEED = `${DUCK_NAME}/LOAD_CONVERTER_KMS_SUCCEED`;
export const LOAD_CONVERTER_KMS_FAILED = `${DUCK_NAME}/LOAD_CONVERTER_KMS_FAILED`;

const loadConverterKmsStarted = () => ({
    type: LOAD_CONVERTER_KMS_STARTED
});

const loadConverterKmsSucceed = data => ({
    type: LOAD_CONVERTER_KMS_SUCCEED,
    data
});

const loadConverterKmsFailed = error => ({
    type: LOAD_CONVERTER_KMS_FAILED,
    error
});

const loadConverterKms = () => async (dispatch) => {
    dispatch(loadConverterKmsStarted());
    let data = [];
    try {
        data = await ConverterKilometersService.getConverterKilometers();
        dispatch(loadConverterKmsSucceed(data));
    } catch (err) {
        dispatch(loadConverterKmsFailed(err));
    }
};

const actions = {
    DUCK_NAME,

    types: {
        LOAD_CONVERTER_KMS_STARTED,
        LOAD_CONVERTER_KMS_SUCCEED,
        LOAD_CONVERTER_KMS_FAILED,
    },

    loadConverterKmsStarted,
    loadConverterKmsSucceed,
    loadConverterKmsFailed,
    loadConverterKms,
};

export default actions;