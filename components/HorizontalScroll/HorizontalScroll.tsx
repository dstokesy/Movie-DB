import styles from './horizontalscroll.module.scss';
import cx from 'classnames';

export default function HorizontalScroll({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.wrapper}>
            <div className={cx(styles.scroll, 'flex flex-row')}>{children}</div>
        </div>
    );
}
