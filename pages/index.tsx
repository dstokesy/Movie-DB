import Head from 'next/head';
import Layout from '../layouts';
import { HorizontalScroll, Section, ShowCard } from '@/components';
import demoContent from '../demo/content';

const Page = () => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB</title>
            </Head>

            <div className="container mx-auto">
                <Section title="All Time Classics">
                    <HorizontalScroll>
                        {demoContent.map((item) => (
                            <div key={item.id}>
                                <ShowCard show={item} />
                            </div>
                        ))}
                    </HorizontalScroll>
                </Section>

                <Section title="Action Movies">
                    <HorizontalScroll>
                        {demoContent.map((item) => (
                            <div key={item.id}>
                                <ShowCard show={item} />
                            </div>
                        ))}
                    </HorizontalScroll>
                </Section>

                <Section title="Male Lead">
                    <HorizontalScroll>
                        {demoContent.map((item) => (
                            <div key={item.id}>
                                <ShowCard show={item} />
                            </div>
                        ))}
                    </HorizontalScroll>
                </Section>
            </div>
        </Layout>
    );
};

export default Page;
