import cx from 'classnames';
import styles from './search.module.scss';

export default function Search() {
    return (
        <div className="form-group">
            <input
                type="text"
                name="keywords"
                className={cx(styles.input, 'text-left sm:text-right')}
                placeholder="Search..."
            />
        </div>
    );
}
