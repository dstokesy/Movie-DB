import useRouter from 'next/router';
import { contentTypeSelector } from './../../lib/ContentType';
import styles from './showcard.module.scss';
import { IShow } from '../../types/Show';
import Image from 'next/image';
import Link from 'next/link';

export default function ShowCard({ show }: { show: IShow }) {
    let imageMarkup;

    if (show.poster_path) {
        const alt = show.name ? show.name : show.title;

        imageMarkup = (
            <Image
                src={'https://image.tmdb.org/t/p/original/' + show.poster_path}
                height={166}
                width={174}
                className={styles.image}
                alt={alt}
            />
        );
    }

    let rating;

    if (show.vote_average) {
        let percentage = Math.round(show.vote_average * 10);

        rating = <div className={styles.rating}>{percentage}</div>;
    }

    const selection = contentTypeSelector(useRouter);

    return (
        <Link href={`/${selection}/${show.id}`} className={styles.card}>
            {imageMarkup}
            <div className={styles.title}>{show.title}</div>
            {rating}
        </Link>
    );
}
