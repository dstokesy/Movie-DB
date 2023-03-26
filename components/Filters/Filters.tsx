import { Search } from '@/components';
import Genre from './Genre';
import Year from './Year';

export default function Filters() {
    return (
        <form>
            <div className="mb-6">
                <Search />
            </div>

            <div className="text-center mb-4">or</div>

            <div className="mb-6">
                <Genre />
            </div>
            <div className="mb-6">
                <Year />
            </div>
        </form>
    );
}
