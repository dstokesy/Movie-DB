import Head from 'next/head';
import Layout from '../../layouts';
import { Section, Filters } from '@/components';
import { GetStaticProps } from 'next';
import config from './../../api/config';
import axios from 'axios';
import { GenreShowsType } from './../../types/Show';

interface IPageData {
    genres?: GenreShowsType[];
}

const Page: React.FC<IPageData> = (props) => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB</title>
            </Head>

            <div className="container px-4 sm:px-0 mx-auto max-w-screen-md">
                <Section>
                    <Filters genres={props.genres} />
                </Section>
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const response = await axios.get(
            config.baseUrl +
                'genre/movie/list?api_key=' +
                config.apiKey +
                '&language=en-GB'
        ),
        genres = response.data.genres;

    return {
        props: {
            genres
        }
    };
};

export default Page;
