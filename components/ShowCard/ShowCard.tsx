import cx from 'classnames';
import styles from './showcard.module.scss';
import { IShow } from '../../types/Show';
import Image from 'next/image';

export default function ShowCard({ show }: { show: IShow }) {
    let imageMarkup;

    if (show.poster_path) {
        imageMarkup = (
            <Image
                src={'https://image.tmdb.org/t/p/original/' + show.poster_path}
                height={166}
                width={174}
                className={styles.image}
                alt={show.title}
            />
        );
    }

    let rating;

    if (show.vote_average) {
        let percentage = Math.round(show.vote_average * 10);

        rating = <div className={styles.rating}>{percentage}</div>;
    }

    return (
        <div className={styles.card}>
            {imageMarkup}
            {show.title}
            {rating}
        </div>
    );
}
