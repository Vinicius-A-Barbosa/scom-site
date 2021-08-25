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

export const types = {
    LOAD_CONVERTER_KMS_STARTED,
    LOAD_CONVERTER_KMS_SUCCEED,
    LOAD_CONVERTER_KMS_FAILED,
};

const actions = {
    loadConverterKmsStarted,
    loadConverterKmsSucceed,
    loadConverterKmsFailed,
};

export default actions;