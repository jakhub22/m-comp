import { useMainContext } from '@/context/main';
import { getBodyHeight } from '@/library';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    const height = getBodyHeight(0);
    const { mainData } = useMainContext();

    return (
        <div className="h-screen w-full overflow-hidden">
            <Header />
            <div className="flex h-full">
                {mainData.selectedMenu !== 'Home' && (
                    <div
                        style={{ height: height }}
                        className="w-72 overflow-auto"
                    >
                        <Sidebar />
                    </div>
                )}
                <div
                    style={{ height: height }}
                    className="w-full overflow-auto border-l p-6"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
