import React, { useState } from 'react';
import {Sidebar} from "../component/sidebar/Sidebar.tsx";


export default function FinanceHomePage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <main className="flex-1 p-8 overflow-y-auto">
                <h1 className="text-4xl font-bold text-gray-800">Gooziri finance Dashboard</h1>
            </main>
        </div>
    );
}
