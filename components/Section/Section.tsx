import styles from './section.module.scss';

export default function Section({
    children,
    title
}: {
    children: React.ReactNode;
    title?: string;
}) {
    let headingMarkup;

    if (title) {
        headingMarkup = <h2 className="heading">{title}</h2>;
    }

    return (
        <div className={styles.wrapper}>
            {headingMarkup}
            {children}
        </div>
    );
}
