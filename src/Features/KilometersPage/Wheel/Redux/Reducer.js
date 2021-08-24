import actions from './Actions';

export const reducerName = actions.DUCK_NAME;

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: false,
    data: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.types.LOAD_WHEEL_KMS_STARTED:
            return {
                ...state,
                loading: true,
                success: false,
                error: null,
            };
        case actions.types.LOAD_WHEEL_KMS_SUCCEED:
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                data: [
                    ...action.data,
                ],
            };
        case actions.types.LOAD_WHEEL_KMS_FAILED:
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