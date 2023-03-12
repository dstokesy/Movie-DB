import Head from 'next/head';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import config from './../api/config';
import Layout from '../layouts';
import { IShow } from './../types/Show';
import { HorizontalScroll, Section, ShowCard } from '@/components';

type GenreType = {
    id: number;
    name: string;
    shows: IShow[];
};

interface IPageData {
    genres?: GenreType[];
    error?: boolean;
}

const Page: React.FC<IPageData> = (props) => {
    return (
        <Layout layout="default">
            <Head>
                <title>Movie DB</title>
            </Head>

            <div className="container mx-auto">
                {props.genres &&
                    props.genres.map((genre, i) => (
                        <Section key={'genre-' + i} title={genre.name}>
                            <HorizontalScroll>
                                {genre.shows &&
                                    genre.shows.map((show) => (
                                        <div key={i + show.id}>
                                            <ShowCard show={show} />
                                        </div>
                                    ))}
                            </HorizontalScroll>
                        </Section>
                    ))}
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await axios.get(
            config.baseUrl +
                'genre/movie/list?api_key=' +
                config.apiKey +
                '&language=en-GB'
        );

        let genres = response.data.genres;

        for (let i = 0; i < genres.length; i++) {
            let genre = genres[i];

            let genreResponse = await axios.get(
                config.baseUrl +
                    'discover/movie?api_key=' +
                    config.apiKey +
                    '&language=en-GB' +
                    '&sort_by=popularity.desc' +
                    '&include_adult=false' +
                    '&include_video=false' +
                    '&with_genres=' +
                    genre.id +
                    '&page=1'
            );

            genres[i].shows = genreResponse.data.results;
        }

        return {
            props: {
                genres: genres,
                error: false
            }
        };
    } catch (error) {
        return {
            props: {
                error: true
            }
        };
    }
};

export default Page;
