import Head from 'next/head';
import Layout from '../layouts';
import { Section, ShowCard } from '@/components';
import demoContent from '../demo/content';

const Page = () => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB Search</title>
            </Head>

            <div className="container mx-auto">
                <Section title="Found in your search">
                    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-7">
                        {demoContent.map((item) => (
                            <div key={item.id}>
                                <ShowCard show={item} />
                            </div>
                        ))}
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default Page;
