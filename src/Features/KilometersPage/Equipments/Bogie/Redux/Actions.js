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

export const types = {
    LOAD_BOGIE_KMS_STARTED,
    LOAD_BOGIE_KMS_SUCCEED,
    LOAD_BOGIE_KMS_FAILED,
};

const actions = {
    loadBogieKmsStarted,
    loadBogieKmsSucceed,
    loadBogieKmsFailed,
};

export default actions;