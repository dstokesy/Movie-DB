import axios from 'axios';
import Head from 'next/head';
import Layout from '../../layouts';
import { ShowDetails } from '@/components';
import config from './../../api/config';
import { IShow } from './../../types/Show';
import type { GetServerSideProps } from 'next';

interface QParams extends GetServerSideProps {
    id?: string;
}

interface IPageData {
    id: string;
    show?: IShow;
}

const Page: React.FC<IPageData> = (props) => {
    const show = props.show;

    if (show) {
        return (
            <Layout layout="default">
                <Head>
                    <title>{show.title}</title>
                </Head>

                <ShowDetails show={show} />
            </Layout>
        );
    } else {
        return <div>Error</div>;
    }
};

export async function getServerSideProps({ params }: { params: QParams }) {
    const response = await axios.get(
        config.baseUrl +
            'movie/' +
            params.id +
            '?api_key=' +
            config.apiKey +
            '&language=en-GB' +
            '&external_source=imdb_id'
    );

    return {
        props: {
            id: params.id,
            show: response.data
        }
    };
}

export default Page;
