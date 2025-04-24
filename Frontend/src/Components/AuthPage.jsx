import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        password: '', 
        confirmPassword: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();

    // Toggle dark mode
    useEffect(() => {
        document.body.className = darkMode ? 'bg-gray-900' : 'bg-gray-50';
    }, [darkMode]);

    // Password strength calculator
    useEffect(() => {
        if (!formData.password) {
            setPasswordStrength(0);
            return;
        }

        let strength = 0;
        // Length check
        if (formData.password.length > 5) strength += 1;
        if (formData.password.length > 8) strength += 1;
        // Complexity checks
        if (/[A-Z]/.test(formData.password)) strength += 1;
        if (/[0-9]/.test(formData.password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(formData.password)) strength += 1;

        setPasswordStrength(Math.min(strength, 5));
    }, [formData.password]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'checkbox' ? checked : value 
        }));
    };

    const validate = () => {
        const newErrors = {};
        
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        
        if (!isLogin) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
            if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to the terms';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setIsLoading(false);
            navigate('/');
        }
    };

    const getPasswordStrengthColor = () => {
        if (passwordStrength <= 2) return 'bg-red-500';
        if (passwordStrength === 3) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-black'} flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors duration-300`}>
            {/* Dark mode toggle */}
            <button 
                onClick={() => setDarkMode(!darkMode)}
                className="absolute top-32 right-4 p-2 rounded-full bg-opacity-20 bg-gray-500 hover:bg-opacity-30 transition"
            >
                {darkMode ? '☀️' : '🌙'}
            </button>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={`mt-6 text-center text-5xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>
                        {isLogin ? (
                            <>Sign <span className="text-[#f7931e]">In</span></>
                        ) : (
                            <>Sign <span className="text-[#f7931e]">Up</span></>
                        )}
                    </h2>
                    <p className={`mt-2 text-center text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {isLogin ? 'Welcome back! Please enter your details.' : 'Join us today! Create your account.'}
                    </p>
                </motion.div>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} shadow-xl rounded-lg overflow-hidden`}
                >
                    <div className="py-8 px-4 sm:px-10">

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div>
                                            <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Full name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    autoComplete="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`appearance-none block w-full text-white px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:border-[#f7931e] sm:text-sm ${
                                                        darkMode ? 'bg-gray-700 border-gray-600' 
                                                            : errors.name 
                                                                ? 'border-red-300 text-pink-400' 
                                                                : 'border-gray-300  text-pink-400'
                                                    }`}
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:border-[#f7931e] sm:text-sm ${
                                            darkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white' 
                                                : errors.email 
                                                    ? 'border-red-300' 
                                                    : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Password
                                </label>
                                <div className="mt-1 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete={isLogin ? "current-password" : "new-password"}
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:border-[#f7931e] sm:text-sm ${
                                            darkMode 
                                                ? 'bg-gray-700 border-gray-600 text-white' 
                                                : errors.password 
                                                    ? 'border-red-300' 
                                                    : 'border-gray-300'
                                        }`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                        ) : (
                                            <FaEye className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                        )}
                                    </button>
                                </div>
                                {!isLogin && formData.password && (
                                    <div className="mt-2">
                                        <div className="flex space-x-1">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div 
                                                    key={i}
                                                    className={`h-1 flex-1 rounded-full ${
                                                        i <= passwordStrength 
                                                            ? getPasswordStrengthColor() 
                                                            : darkMode 
                                                                ? 'bg-gray-700' 
                                                                : 'bg-gray-200'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <p className={`mt-1 text-xs ${
                                            passwordStrength <= 2 
                                                ? 'text-red-500' 
                                                : passwordStrength === 3 
                                                    ? 'text-yellow-500' 
                                                    : 'text-green-500'
                                        }`}>
                                            {passwordStrength <= 2 ? 'Weak' : passwordStrength === 3 ? 'Moderate' : 'Strong'} password
                                        </p>
                                    </div>
                                )}
                                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                            </div>

                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div>
                                            <label htmlFor="confirmPassword" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                Confirm Password
                                            </label>
                                            <div className="mt-1 relative">
                                                <input
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    autoComplete="new-password"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:border-[#f7931e] sm:text-sm ${
                                                        darkMode 
                                                            ? 'bg-gray-700 border-gray-600 text-white' 
                                                            : errors.confirmPassword 
                                                                ? 'border-red-300' 
                                                                : 'border-gray-300'
                                                    }`}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    {showConfirmPassword ? (
                                                        <FaEyeSlash className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                                    ) : (
                                                        <FaEye className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                                    )}
                                                </button>
                                            </div>
                                            {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isLogin && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className={`h-4 w-4 rounded focus:ring-[#f7931e] ${
                                                darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'
                                            }`}
                                        />
                                        <label htmlFor="remember-me" className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className={`font-medium hover:text-[#f7931e] ${darkMode ? 'text-gray-300' : 'text-[#f7931e]'}`}>
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                            )}

                            {!isLogin && (
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            type="checkbox"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            className={`h-4 w-4 rounded focus:ring-[#f7931e] ${
                                                darkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300'
                                            }`}
                                        />
                                    </div>
                                    <div className="ml-2 text-sm">
                                        <label htmlFor="agreeToTerms" className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                            I agree to the{' '}
                                            <a href="#" className="text-[#f7931e] hover:underline">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                        {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
                                    </div>
                                </div>
                            )}

                            <div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isLoading}
                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#f7931e] hover:bg-[#e68217] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f7931e] ${
                                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    ) : null}
                                    {isLogin ? 'Sign in' : 'Create account'}
                                </motion.button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {isLogin ? (
                                    <>Don't have an account?{' '}
                                    <button 
                                        onClick={() => setIsLogin(false)}
                                        className={`font-medium hover:text-[#f7931e] ${darkMode ? 'text-gray-300' : 'text-[#f7931e]'}`}
                                    >
                                        Sign up
                                    </button>
                                    </>
                                ) : (
                                    <>Already have an account?{' '}
                                    <button 
                                        onClick={() => setIsLogin(true)}
                                        className={`font-medium hover:text-[#f7931e] ${darkMode ? 'text-gray-300' : 'text-[#f7931e]'}`}
                                    >
                                        Sign in
                                    </button>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthPage;