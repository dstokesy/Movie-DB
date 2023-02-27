import { DefaultLayout } from './Default/index';
import { NoFooterLayout } from './NoFooter';

interface IProps {
    layout?: 'default' | 'noFooter'; //resctricting selection to these specific layouts. will throw an error otherwise
    children: React.ReactNode;
}
const Layout = ({ layout, children }: IProps): JSX.Element => {
    switch (layout) {
        case 'noFooter':
            return <NoFooterLayout>{children}</NoFooterLayout>;
        default:
            return <DefaultLayout>{children}</DefaultLayout>;
    }
};

export default Layout;
