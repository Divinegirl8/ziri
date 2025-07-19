import logo from '../assets/logo.svg'
import laptop from '../assets/laptop.svg'
import React from "react";
import cloud from '../assets/cloud.svg'
import {useNavigate} from "react-router-dom";


const AccessDenied: React.FC = () =>  {
    const navigate = useNavigate();


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen font-['Manrope']">
            <div className="h-full flex flex-col bg-gray-50 pb-5 ">
                <img className="max-w-68" src={logo} alt="logo.svg" />
                <div className="flex w-full flex-col justify-center items-center h-full">
                    <div className="w-full max-w-md mx-auto p-6 rounded-lg">
                        <p className="text-[16px] font-semibold text-[#F6285F] text-start mb-4">Unauthorized Access</p>
                        <p className="text-[28px] font-bold text-start text-[#101828] mb-4">
                            Access Denied For, <br />
                            This Role
                        </p>
                        <p className="text-[16px] font-medium text-start text-gray-500 mb-4">
                            You’re not authorized to sign in as this role. If you believe this is a mistake, please contact your system administrator.
                        </p>
                        <img className="max-w-68" src={cloud} alt="cloud.svg" />
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <button className="text-[18px] bg-gray-50 border border-gray-300 text-gray-600 font-semibold py-4 px-4 rounded-lg mt-6 hover:bg-gray-100 transition-colors duration-200">
                                Go back
                            </button>
                            <button onClick={() => navigate("/")} className="text-[18px] bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-6 hover:bg-blue-500 transition-colors duration-200">
                                Take me home
                            </button>
                        </div>

                        {/* <p className="text-[16px] text-gray-500">
                            Not an Admin? <a href="#" className=" font-semibold text-blue-500">Switch role</a>
                        </p> */}
                    </div>
                </div>
                <p className="text-gray-400 pl-8 ">
                    © Gooziri 2025
                </p>
            </div>
            <div style={{
                backgroundImage: `url(${laptop})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center 80%',
            }} className="hidden md:flex items-center justify-center">

            </div>
        </div>
    )
}

export default AccessDenied
