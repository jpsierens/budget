import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';

type Props = {
    store: Object,
    history: Object
};

export default class Root extends Component {
    props: Props;

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                    { window.devToolsExtension ? null : <DevTools /> }
                </div>
            </Provider>
        );
    }
}
