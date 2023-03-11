import styles from './header.module.scss';
import Link from 'next/link';
import cx from 'classnames';

import { MobileNavigation } from './../MobileNavigation';

export const Header: React.FC = () => {
    return (
        <header className={cx(styles.header, 'p-6')}>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="hidden sm:block sm:col-start-1 sm:col-end-7 md:cols-end-5">
                        <div className={styles.logo}>
                            <Link href="/">Movie DB</Link>
                        </div>
                    </div>
                    <div className="col-start-1 col-end-13 sm:col-start-7 md:cols-start-5 text-right">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
