import styles from './../filters.module.scss';

export default function Genre() {
    return (
        <select className={styles.select}>
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
        </select>
    );
}
