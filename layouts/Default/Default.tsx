import { Footer, Header } from '@/components';

export const Default: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Default;
