import Layout from '@/components/Layout';
import MainProvider from '@/context.js/main';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <MainProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MainProvider>
    );
}
