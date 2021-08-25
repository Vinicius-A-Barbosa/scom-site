import { types } from './Actions';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: false,
    data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.LOAD_TRAIN_KMS_STARTED:
            return {
                ...state,
                loading: true,
                success: false,
                error: null,
            };
        case types.LOAD_TRAIN_KMS_SUCCEED:
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                data: [
                    ...action.data,
                ],
            };
        case types.LOAD_TRAIN_KMS_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;