import styles from './header.module.scss';
import Link from 'next/link';
import cx from 'classnames';
import {
    selectFiltersState,
    setFiltersTypeState
} from '../../store/slices/filters';
import { useDispatch, useSelector } from 'react-redux';

export const Header: React.FC = () => {
    const filtersState = useSelector(selectFiltersState);
    const dispatch = useDispatch();

    return (
        <header className={cx(styles.header, 'p-6')}>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-start-1 col-end-6 md:col-end-5 lg:col-end-4">
                        <div className={cx(styles.logo, 'uppercase')}>
                            <Link href="/">Movie DB</Link>
                        </div>
                    </div>
                    <div className="col-start-6 col-end-13 md:col-start-5 lg:col-start-4">
                        <ul className={styles.link_list}>
                            <li>
                                <button
                                    className={cx(
                                        styles.button,
                                        filtersState.type === 'movie'
                                            ? styles.button_active
                                            : ''
                                    )}
                                    onClick={() =>
                                        dispatch(setFiltersTypeState('movie'))
                                    }
                                >
                                    Movie
                                </button>
                            </li>
                            <li>
                                <button
                                    className={cx(
                                        styles.button,
                                        filtersState.type === 'tv'
                                            ? styles.button_active
                                            : ''
                                    )}
                                    onClick={() =>
                                        dispatch(setFiltersTypeState('tv'))
                                    }
                                >
                                    Tv
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
