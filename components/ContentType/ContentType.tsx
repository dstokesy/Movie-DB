import cx from 'classnames';
import Link from 'next/link';
import useRouter from 'next/router';
import { contentTypeSelector } from './../../lib/ContentType';
import styles from './contenttype.module.scss';

export default function ContentType() {
    const selection = contentTypeSelector(useRouter);

    return (
        <ul className={cx(styles.link_list, 'mb-6')}>
            <li>
                <Link
                    href="/"
                    className={cx(
                        styles.button,
                        selection == 'movie' ? styles.button_active : ''
                    )}
                >
                    Movie
                </Link>
            </li>
            <li>
                <Link
                    href="/show"
                    className={cx(
                        styles.button,
                        selection == 'show' ? styles.button_active : ''
                    )}
                >
                    Tv
                </Link>
            </li>
        </ul>
    );
}
