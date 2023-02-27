import styles from './footer.module.scss';
import cx from 'classnames';

export default function Footer() {
    return (
        <footer className={cx(styles.footer, 'p-6')}>
            <div className="container mx-auto text-right">
                <a href="https://portfolio-dstokesy.vercel.app/">
                    By Daniel Stokes
                </a>
            </div>
        </footer>
    );
}
