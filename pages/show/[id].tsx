import Head from 'next/head';
import Layout from '../../layouts';
import type { GetServerSideProps } from 'next';

interface QParams extends GetServerSideProps {
    id?: string;
}

const Page = ({ id }: { id: string }) => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB Show</title>
            </Head>

            <div className="container mx-auto">{id}</div>
        </Layout>
    );
};

export async function getServerSideProps({ params }: { params: QParams }) {
    return {
        props: {
            id: params.id
        }
    };
}

export default Page;
