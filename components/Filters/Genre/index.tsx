import styles from './../filters.module.scss';
import { GenreShowsType } from './../../../types/Show';

export default function Genre({ genres }: { genres?: GenreShowsType[] }) {
    return (
        <select className={styles.select}>
            <option>Genre</option>
            {genres &&
                genres.map((genre) => (
                    <option key={genre.id}>{genre.name}</option>
                ))}
        </select>
    );
}
