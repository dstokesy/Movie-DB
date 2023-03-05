import Head from 'next/head';
import Layout from '../layouts';
import { Show } from '@/components';
import demoContent from '../demo/content';

const Page = () => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB</title>
            </Head>

            {demoContent.map((item) => (
                <div key={item.id} className="col">
                    <Show item={item} />
                </div>
            ))}
        </Layout>
    );
};

export default Page;
