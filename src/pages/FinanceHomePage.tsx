import { useEffect, useState } from 'react';
import { Sidebar } from "../component/sidebar/Sidebar.tsx";
import axios, { AxiosError } from "axios";
import type { UserData } from '../interface.ts';



const  FinanceHomePage:React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [userData, setUserData] = useState<UserData | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get<UserData>('https://gooziri.onrender.com/users/me');
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                
            
                if (error instanceof AxiosError && error.response?.status === 401) {
                    console.error('Unauthorized access:', error);
                } else {
                    alert('Failed to fetch user data. Please try again later.');
                }
            }
        }
        fetchUser();
    }, []);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-gray-800">Gooziri finance Dashboard</h1>
                {userData && (
                    <p>
                        Welcome, {userData.fullName}
                    </p>
                )}
            </main>
        </div>
    );
}

export default FinanceHomePage