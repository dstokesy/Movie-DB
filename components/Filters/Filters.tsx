import styles from './filters.module.scss';
import { Search } from '@/components';
import ContentType from './ContentType';
import Genre from './Genre';
import Year from './Year';
import { GenreShowsType } from './../../types/Show';

export default function Section({ genres }: { genres?: GenreShowsType[] }) {
    return (
        <form>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="mb-6 col-start-2">
                    <Search />
                </div>
            </div>

            <div className="text-center mb-4">or</div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="mb-6">
                    <ContentType />
                </div>

                <div className="mb-6">
                    <Genre genres={genres} />
                </div>

                <div className="mb-6">
                    <Year />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <div className="mb-6 col-start-2">
                    <button type="submit" className={styles.button}>
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
}
