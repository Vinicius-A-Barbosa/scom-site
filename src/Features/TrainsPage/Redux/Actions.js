const DUCK_NAME = 'trainspage';

export const LOAD_TRAIN_POSITIONS_STARTED = `${DUCK_NAME}/LOAD_TRAIN_POSITIONS_STARTED`;
export const LOAD_TRAIN_POSITIONS_SUCCEED = `${DUCK_NAME}/LOAD_TRAIN_POSITIONS_SUCCEED`;
export const LOAD_TRAIN_POSITIONS_FAILED = `${DUCK_NAME}/LOAD_TRAIN_POSITIONS_FAILED`;

const loadTrainPositionsStarted = () => ({
    type: LOAD_TRAIN_POSITIONS_STARTED
});

const loadTrainPositionsSucceed = (page, data) => ({
    type: LOAD_TRAIN_POSITIONS_SUCCEED,
    page,
    data
});

const loadTrainPositionsFailed = error => ({
    type: LOAD_TRAIN_POSITIONS_FAILED,
    error
});

export const types = {
    LOAD_TRAIN_POSITIONS_STARTED,
    LOAD_TRAIN_POSITIONS_SUCCEED,
    LOAD_TRAIN_POSITIONS_FAILED,
}

const actions = {
    loadTrainPositionsStarted,
    loadTrainPositionsSucceed,
    loadTrainPositionsFailed,
};

export default actions;