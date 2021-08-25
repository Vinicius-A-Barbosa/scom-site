import actions from './Actions';
import ConverterKilometersService from './Service';

const loadConverterKms = () => async (dispatch) => {
    dispatch(actions.loadConverterKmsStarted());
    let data = [];
    try {
        data = await ConverterKilometersService.getConverterKilometers();
        dispatch(actions.loadConverterKmsSucceed(data));
    } catch (err) {
        dispatch(actions.loadConverterKmsFailed(err));
    }
};

export default loadConverterKms;