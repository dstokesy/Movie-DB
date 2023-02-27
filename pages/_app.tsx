import '../styles/global.scss';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from './../store';

const App = ({ Component, pageProps, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <main>
                <Component {...pageProps} />
            </main>
        </Provider>
    );
};

export default App;
