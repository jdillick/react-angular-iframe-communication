import { connect } from 'react-redux';
import IFrameCommunication from './IFrameCommunication';
import deps from 'dependencies';

/**
 * -----------------------------------------------------------------------------
 * Inject Redux State and Actions into React Component: IFrameCommunication
 * -----------------------------------------------------------------------------
 */
const mapStateToProps = (state, props) => ({
    ...state.IFrameCommunication,
    ...props,
});

const mapDispatchToProps = dispatch => ({
    mount: data => dispatch(deps.actions.IFrameCommunication.mount(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IFrameCommunication);
