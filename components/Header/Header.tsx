import styles from './header.module.scss';
import Link from 'next/link';
import cx from 'classnames';
import { Search } from '@/components';
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
                <div className="grid grid-cols-12 gap-4">
                    <div className="hidden sm:block sm:col-start-1 sm:col-end-7 md:cols-end-5">
                        <div className={cx(styles.logo, 'uppercase')}>
                            <Link href="/">Movie DB</Link>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 sm:col-start-7 md:cols-start-5">
                        <div className="grid grid-flow-col auto-cols-max gap-6 justify-end">
                            <Search />
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
                                            dispatch(
                                                setFiltersTypeState('movie')
                                            )
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
            </div>
        </header>
    );
};

export default Header;
