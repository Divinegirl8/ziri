import React, {useEffect, useState} from 'react';
import {Sidebar} from "../component/sidebar/Sidebar.tsx";
import axios from "axios";


export default function FinanceHomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('https://gooziri.onrender.com/users/me', {
                    withCredentials: true,
                });
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                if (error.response && error.response.status === 401) {
                    // window.location.href = '/signIn';
                    console.error('Error fetching user data:', error);
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
                {  userData && (
                    <p>
                        {userData.fullName}
                    </p>
                )}
            </main>
        </div>
    );
}
