const DUCK_NAME = 'wheelkm';

export const LOAD_WHEEL_KMS_STARTED = `${DUCK_NAME}/LOAD_WHEEL_KMS_STARTED`;
export const LOAD_WHEEL_KMS_SUCCEED = `${DUCK_NAME}/LOAD_WHEEL_KMS_SUCCEED`;
export const LOAD_WHEEL_KMS_FAILED = `${DUCK_NAME}/LOAD_WHEEL_KMS_FAILED`;

const loadWheelKmsStarted = () => ({
    type: LOAD_WHEEL_KMS_STARTED
});

const loadWheelKmsSucceed = data => ({
    type: LOAD_WHEEL_KMS_SUCCEED,
    data
});

const loadWheelKmsFailed = error => ({
    type: LOAD_WHEEL_KMS_FAILED,
    error
});

export const types = {
    LOAD_WHEEL_KMS_STARTED,
    LOAD_WHEEL_KMS_SUCCEED,
    LOAD_WHEEL_KMS_FAILED,
}

const actions = {
    loadWheelKmsStarted,
    loadWheelKmsSucceed,
    loadWheelKmsFailed,
};

export default actions;