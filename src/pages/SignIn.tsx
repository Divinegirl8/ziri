import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.svg'
import laptop from '../assets/laptop.svg'
import type { LoginFormData } from '../interface';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
        rememberMe: false,
    })

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if (formData.email === '' || formData.password === '') {
            setIsFormValid(false);
            return;
        }
        setIsFormValid(true);
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !formData.password) {
            setError('Email and password are required.');
            setIsLoading(false);
            return;
        }
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            setIsLoading(false);
            return;
        }

        const payload = {
            email: formData.email,
            password: formData.password,
        }

        try {
            const { data } = await axios.post('https://gooziri.onrender.com/auth/login', payload)
            console.log('Sign-in successful:', data);
            setIsLoading(false);
            alert("Sign-in successful!");
            navigate("/financeDashboard")
        } catch (error) {
            setIsLoading(false);
            console.error('Sign-in error:', error);
            setError('Invalid email or password. Please try again.');
            setIsLoading(false);
        }
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen font-['Manrope']">
            <div className="h-full flex flex-col bg-gray-50">
                <img className="max-w-68" src={logo} alt="logo.svg" />
                <div className="flex w-full flex-col justify-center items-center h-full">
                    <div className="w-full max-w-md mx-auto p-6 rounded-lg">
                        <p className="text-2xl text-start mb-4">Sign in</p>
                        <p className="text-[15px] text-start text-gray-500 mb-6">
                            Manage users, roles, system health, <br />
                            and data visibility.
                        </p>

                        <form onSubmit={handleSignIn} className='flex-1 space-y-8'>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="w-full text-[15px] px-10 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="w-full px-10 text-[15px] py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                >
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </button>
                            </div>
                            {error && (
                                <p className="text-red-500 text-sm">{error}</p>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="text-[14px] text-gray-600">Remember for thirty days</label>
                                </div>
                                <p className="text-blue-400">forgot password</p>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${ isFormValid ? "bg-blue-600 hover:bg-blue-700" : "bg-violet-200" }  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>

                            {/* <p className="text-gray-400 text-center">
                                Not an Admin? <a href="#" className="text-[14px] font-semibold text-blue-500">Switch role</a>
                            </p> */}
                        </form>
                    </div>
                </div>
                <p className="text-gray-400 p-8">
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

export default SignIn;
