import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import config from './../../api/config';
import Layout from '../../layouts';
import styles from './show.module.scss';
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

    console.log(show);

    if (show) {
        let imageMarkup, releaseDate;

        if (show.backdrop_path) {
            imageMarkup = (
                <Image
                    src={
                        'https://image.tmdb.org/t/p/original/' +
                        show.backdrop_path
                    }
                    height={1250}
                    width={1375}
                    className={styles.header_image}
                    alt={show.title}
                />
            );
        }

        if (show.release_date) {
            let date = new Date(show.release_date);
            releaseDate =
                date.getDate() +
                '/' +
                date.getMonth() +
                '/' +
                date.getFullYear();
        }

        return (
            <Layout layout="default">
                <Head>
                    <title>{show.title}</title>
                </Head>

                <div>{imageMarkup}</div>
                <div className="container px-4 sm:px-0 mx-auto">
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2 mt-8 sm:my-8">
                            <h1 className="font-bold text-3xl mb-4">
                                {show.title}
                            </h1>
                            <p className="mb-4">{show.overview}</p>
                        </div>
                        <div className="mb-8 sm:my-8">
                            <div className="mb-2">
                                <strong>Rating:</strong>{' '}
                                {show.vote_average
                                    ? Math.round(show.vote_average * 10) +
                                      '/100'
                                    : 'N/a'}
                            </div>
                            <div className="mb-2">
                                <strong>Runtime:</strong> {show.runtime} mins
                            </div>
                            <div className="mb-2">
                                <strong>Release Date:</strong>{' '}
                                {releaseDate ? releaseDate : 'N/A'}
                            </div>
                            <div className="mb-2">
                                <strong>Genres:</strong>{' '}
                                {show.genres &&
                                    show.genres.map((g) => g.name).join(', ')}
                            </div>
                            <div className="mb-2">
                                <strong>Budget:</strong>{' '}
                                {show.budget
                                    ? '$' + show.budget.toLocaleString('en-US')
                                    : 'N/A'}
                            </div>
                            <div className="mb-2">
                                <strong>Revenue:</strong>{' '}
                                {show.revenue
                                    ? '$' + show.revenue.toLocaleString('en-US')
                                    : 'N/A'}
                            </div>
                            <div className="mb-2">
                                <a
                                    href={show.homepage}
                                    className="text-sky-400"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Vist homepage
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
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
