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

export const types = {
    LOAD_ENGINE_KMS_STARTED,
    LOAD_ENGINE_KMS_SUCCEED,
    LOAD_ENGINE_KMS_FAILED,
}

const actions = {
    loadEngineKmsStarted,
    loadEngineKmsSucceed,
    loadEngineKmsFailed,
};

export default actions;