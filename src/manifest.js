/**
 * Generated by createManifest.js
 * DO NOT directly edit this file !!!!!!
 */

module.exports = {
    get: () => {
        return {
            allActions: {
                Plugable: require('reactium-core/components/Plugable/actions')
                    .default,
                Router: require('reactium-core/components/Router/actions')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/actions')
                    .default,
            },
            allActionTypes: {
                Plugable: require('reactium-core/components/Plugable/actionTypes')
                    .default,
                Router: require('reactium-core/components/Router/actionTypes')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/actionTypes')
                    .default,
            },
            allReducers: {
                Plugable: require('reactium-core/components/Plugable/reducers')
                    .default,
                Router: require('reactium-core/components/Router/reducers')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/reducers')
                    .default,
            },
            allInitialStates: {
                Plugable: require('reactium-core/components/Plugable/state')
                    .default,
                Router: require('reactium-core/components/Router/state')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/state')
                    .default,
            },
            allRoutes: {
                IFrameCommunication: require('components/IFrameCommunication/route')
                    .default,
                Toolkit: require('reactium-core/components/Toolkit/route')
                    .default,
            },
            allServices: {},
            allMiddleware: {
                redux: require('reactium-core/redux/middleware').default,
            },
            allEnhancers: {
                redux: require('reactium-core/redux/enhancer').default,
            },
            allPlugins: {},
        };
    },
    contexts: {
        components:
            typeof window !== 'undefined' &&
            require.context('components', true, /.jsx?$/),
        common:
            typeof window !== 'undefined' &&
            require.context('components/common-ui/', true, /.jsx?$/),
        toolkit:
            typeof window !== 'undefined' &&
            require.context('toolkit', true, /.jsx?$/),
        core:
            typeof window !== 'undefined' &&
            require.context('reactium-core/components', true, /.jsx?$/),
    },
    listContexts: () => {
        return {
            components: {
                modulePath: 'components',
                filePattern: '.jsx?$',
            },
            common: {
                modulePath: 'components/common-ui/',
                filePattern: '.jsx?$',
            },
            toolkit: {
                modulePath: 'toolkit',
                filePattern: '.jsx?$',
            },
            core: {
                modulePath: 'reactium-core/components',
                filePattern: '.jsx?$',
            },
        };
    },
    list: () => {
        return {
            allActions: {
                type: 'actions',
                imports: [
                    'reactium-core/components/Plugable/actions',
                    'reactium-core/components/Router/actions',
                    'reactium-core/components/Toolkit/actions',
                ],
            },
            allActionTypes: {
                type: 'actionTypes',
                imports: [
                    'reactium-core/components/Plugable/actionTypes',
                    'reactium-core/components/Router/actionTypes',
                    'reactium-core/components/Toolkit/actionTypes',
                ],
            },
            allReducers: {
                type: 'reducers',
                imports: [
                    'reactium-core/components/Plugable/reducers',
                    'reactium-core/components/Router/reducers',
                    'reactium-core/components/Toolkit/reducers',
                ],
            },
            allInitialStates: {
                type: 'state',
                imports: [
                    'reactium-core/components/Plugable/state',
                    'reactium-core/components/Router/state',
                    'reactium-core/components/Toolkit/state',
                ],
            },
            allRoutes: {
                type: 'route',
                imports: [
                    'components/IFrameCommunication/route',
                    'reactium-core/components/Toolkit/route',
                ],
            },
            allServices: {
                type: 'services',
                imports: [],
            },
            allMiddleware: {
                type: 'middleware',
                imports: ['reactium-core/redux/middleware'],
            },
            allEnhancers: {
                type: 'enhancer',
                imports: ['reactium-core/redux/enhancer'],
            },
            allPlugins: {
                type: 'plugin',
                imports: [],
            },
        };
    },
};
