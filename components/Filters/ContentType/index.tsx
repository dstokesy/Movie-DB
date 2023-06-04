import styles from './../filters.module.scss';

export default function Genre() {
    return (
        <select className={styles.select}>
            <option value="film">Film</option>
            <option value="show">Show</option>
        </select>
    );
}
