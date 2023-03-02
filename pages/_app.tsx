import '../styles/global.scss';
import App from 'next/app';
import { Provider } from 'react-redux';
import { store, persistor } from './../store';
import { PersistGate } from 'redux-persist/integration/react';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }: any) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        //Anything returned here can be accessed by the client
        return { pageProps };
    }

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const { Component, pageProps } = this.props;

        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <main>
                        <Component {...pageProps} />
                    </main>
                </PersistGate>
            </Provider>
        );
    }
}

export default MyApp;
