import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './../filters.module.scss';
import {
    selectFiltersState,
    setFiltersTypeState
} from '../../../store/slices/filters';

export default function ContentType() {
    const filtersState = useSelector(selectFiltersState);
    const dispatch = useDispatch();

    return (
        <ul className={cx(styles.link_list, 'mb-6')}>
            <li>
                <button
                    className={cx(
                        styles.button,
                        filtersState.type === 'movie'
                            ? styles.button_active
                            : ''
                    )}
                    onClick={() => dispatch(setFiltersTypeState('movie'))}
                >
                    Movie
                </button>
            </li>
            <li>
                <button
                    className={cx(
                        styles.button,
                        filtersState.type === 'tv' ? styles.button_active : ''
                    )}
                    onClick={() => dispatch(setFiltersTypeState('tv'))}
                >
                    Tv
                </button>
            </li>
        </ul>
    );
}
