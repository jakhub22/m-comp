import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
    return (
        <div className="h-screen w-full overflow-hidden">
            <Header />
            <div className="flex h-full">
                <div className="h-full w-72 overflow-auto">
                    <Sidebar />
                </div>
                <div className="h-full w-full overflow-auto border-l p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
