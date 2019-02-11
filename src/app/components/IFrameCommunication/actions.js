import deps from 'dependencies';

export default {
    mount: data => dispatch => {
        return dispatch({
            type: deps.actionTypes.I_FRAME_COMMUNICATION_MOUNT,
            data,
        });
    },
};
