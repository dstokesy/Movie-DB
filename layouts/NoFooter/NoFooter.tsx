import { Header } from '@/components';

export const NoFooter: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div>
            <div>
                <Header />
                {children}
            </div>
        </div>
    );
};

export default NoFooter;
