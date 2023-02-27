import cx from 'classnames';
import styles from './hamburger.module.scss';

export default function Hamburger() {
    return (
        <span className={styles.wrapper}>
            <span className={styles.line}></span>
            <span className={cx(styles.line, styles.middle)}></span>
            <span className={cx(styles.line, styles.bottom)}></span>
        </span>
    );
}
