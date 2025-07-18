import React, { useState } from 'react';
import {
    HomeIcon,
    UsersIcon,
    ClockIcon,
    CalendarIcon,
    SettingsIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    GooziriLogo,
    FinancialIcon,
    ManageDataIcon,
    CaseIcon,
    PieIcon
} from '../Icons.tsx';

interface NavItemProps {
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    isOpen: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
    isDropdown?: boolean;
    isSubmenuOpen?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, active, isOpen, onClick, children, isDropdown, isSubmenuOpen }) => {
    return (
        <li className={`relative group mb-7 ${active ? 'bg-[#1355FF] rounded-lg text-indigo-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}`}>
            <a
                href="#"
                onClick={onClick}
                className="flex items-center py-3 px-4 rounded-lg transition-colors duration-200"
            >
                <span className={`  ${isOpen ? "" : "relative right-1"}  rounded-lg ${active ? 'p-1 text-[#1355FF] bg-gray-50' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
                { isOpen && (
                    <span className={`${active ? "text-gray-50" : "text-gray-700"} overflow-hidden transition-all duration-300 ${isOpen ? 'w-40 ml-3' : 'w-0'}`}>{text}</span>
                )}
                {isDropdown && isOpen && (
                    <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform duration-300 ${isSubmenuOpen ? 'rotate-180' : ''}`} />
                )}
            </a>
            {!isOpen && (
                <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-900 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                    {text}
                </div>
            )}
            {isOpen && children}
        </li>
    );
};

const SubNavItem: React.FC<{ text: string, active?: boolean, onClick?: () => void }> = ({ text, active, onClick }) => (
    <li>
        <a href="#" onClick={onClick} className={`block py-2 pr-4 pl-12 text-sm ${active ? 'text-indigo-700 font-semibold' : 'text-gray-500 hover:text-gray-800'}`}>
            {text}
        </a>
    </li>
);

export const Sidebar: React.FC<{ isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isOpen, setIsOpen }) => {
    const [activeItem, setActiveItem] = useState('Home');
    const [activeSubItem, setActiveSubItem] = useState('Projects');
    const [isDataMenuOpen, setIsDataMenuOpen] = useState(false);

    const handleNavClick = (item: string) => {
        if(item === 'Financial Onboarding') {
            setIsDataMenuOpen(!isDataMenuOpen);
        } else {
            setActiveItem(item);
            if(item !== 'Financial Onboarding') setIsDataMenuOpen(false);
        }
    };

    const handleSubNavClick = (subItem: string, parent: string) => {
        setActiveItem(parent);
        setActiveSubItem(subItem);
        if (!isDataMenuOpen) setIsDataMenuOpen(true);
    };


    return (
        <aside className={`h-screen bg-white shadow-xl  transition-all duration-300 ease-in-out ${isOpen ? 'md:w-72 lg:w-72 w-24' : 'w-24'}`}>
            <nav className="h-full flex flex-col">
                <div className={`p-4 pb-2 flex ${isOpen ? 'justify-between' : 'justify-center'} items-center`}>
                    <div className={`flex items-center overflow-hidden relative left-3 transition-all duration-300 ${isOpen ? 'w-40' : 'w-30  md:left-3'}`}>
                        <GooziriLogo className="w-8 h-8" />
                        { isOpen && (
                            <span className="text-1xl hidden md:block font-semibold text-[#1355FF] ml-3">Gooziri</span>
                        ) }
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className={`p-2 hidden md:block relative left-10 rounded-lg bg-[#1355FF] text-white font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50`}>
                        {isOpen ? <ChevronLeftIcon className="w-2.5 h-2.5" /> : <ChevronRightIcon className="w-3 h-3" />}
                    </button>
                </div>

                {/*<div className={`p-4 flex justify-center ${!isOpen ? 'block' : 'hidden'}`}>*/}
                {/*    <GooziriLogo className="w-9 h-9" />*/}
                {/*</div>*/}


                <nav className="flex-1 flex flex-col justify-between h-full px-5 mt-4 ">
                    <ul className="flex-1">
                        <NavItem
                            text="Home"
                            icon={<HomeIcon className={`w-6 h-6`} />}
                            active={activeItem === 'Home'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('Home')}
                        />
                        <NavItem
                            text="Manage Budgets"
                            icon={<UsersIcon className="w-6 h-6" />}
                            active={activeItem === 'Manage Budgets'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('Manage Budgets')}
                        />
                        <NavItem
                            text="Manage Data"
                            icon={<ManageDataIcon className="w-6 h-6" />}
                            active={activeItem === 'Manage Data'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('Manage Data')}
                        />
                        <NavItem
                            text="Financial Onboarding"
                            icon={<FinancialIcon className="w-6 h-6" />}
                            active={activeItem === 'Financial Onboarding'}
                            isOpen={isOpen}
                            isDropdown={true}
                            isSubmenuOpen={isDataMenuOpen}
                            onClick={() => handleNavClick('Financial Onboarding')}
                        >
                            {isDataMenuOpen && (
                                <ul className="overflow-hidden transition-all duration-500 ease-in-out">
                                    <SubNavItem text="Projects" active={activeSubItem === 'Projects' && activeItem === 'View All Data'} onClick={() => handleSubNavClick('Projects', 'View All Data')} />
                                    <SubNavItem text="Resources" active={activeSubItem === 'Resources' && activeItem === 'View All Data'} onClick={() => handleSubNavClick('Resources', 'View All Data')} />
                                    <SubNavItem text="PODs" active={activeSubItem === 'PODs' && activeItem === 'View All Data'} onClick={() => handleSubNavClick('PODs', 'View All Data')} />
                                    <SubNavItem text="Budgets" active={activeSubItem === 'Budgets' && activeItem === 'View All Data'} onClick={() => handleSubNavClick('Budgets', 'View All Data')} />
                                </ul>
                            )}
                        </NavItem>
                        <NavItem
                            text="View All Projects"
                            icon={<CaseIcon className="w-6 h-6" />}
                            active={activeItem === 'View All Projects'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('View All Projects')}
                        />
                        <NavItem
                            text="View All PODS"
                            icon={<CaseIcon className="w-6 h-6" />}
                            active={activeItem === 'View All PODS'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('View All PODS')}
                        />
                        <NavItem
                            text="Reports and Dashboards"
                            icon={<PieIcon className="w-6 h-6" />}
                            active={activeItem === 'Reports and Dashboards'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('Reports and Dashboards')}
                        />
                    </ul>

                    <ul className="pb-8">
                        <NavItem
                            text="Settings"
                            icon={<SettingsIcon className="w-6 h-6" />}
                            active={activeItem === 'Settings'}
                            isOpen={isOpen}
                            onClick={() => handleNavClick('Settings')}
                        />

                        {isOpen && (
                            <p className="text-center text-xs text-gray-400 mt-4">© Gooziri 2025</p>
                        )}
                    </ul>
                </nav>
            </nav>
        </aside>
    );
};
