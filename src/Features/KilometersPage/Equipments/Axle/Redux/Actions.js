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

export const types = {
    LOAD_AXLE_KMS_STARTED,
    LOAD_AXLE_KMS_SUCCEED,
    LOAD_AXLE_KMS_FAILED,
};

const actions = {
    loadAxleKmsStarted,
    loadAxleKmsSucceed,
    loadAxleKmsFailed,
};

export default actions;