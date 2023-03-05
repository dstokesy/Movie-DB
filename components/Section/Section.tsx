import styles from './section.module.scss';
import cx from 'classnames';

export default function Section({
    children,
    title
}: {
    children: React.ReactNode;
    title?: string;
}) {
    let headingMarkup;

    if (title) {
        headingMarkup = <h2 className={styles.heading}>{title}</h2>;
    }

    return (
        <div className={styles.wrapper}>
            {headingMarkup}
            {children}
        </div>
    );
}
