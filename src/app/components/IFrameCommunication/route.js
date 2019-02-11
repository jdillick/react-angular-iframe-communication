import IFrameCommunication from './index';
import deps from 'dependencies';

export default {
    path: ['/'],
    exact: true,
    component: IFrameCommunication,
    load: (params, search) =>
        deps.actions.IFrameCommunication.mount({ params, search }),
};
