import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import { useAuthStore } from "../../store/authStore";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, isLoading, error } = useAuthStore();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };
    const handleGoogleLoginSuccess = async (response) => {
        const { credential } = response;
        const userData = jwtDecode(credential);
        setEmail(userData.email);
        await login(userData.email, "defaultpassword");
        navigate("/");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        >
            <div className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-olive to-grey text-transparent bg-clip-text">
                    Welcome Back
                </h2>

                <form onSubmit={handleLogin}>
                    <Input
                        icon={Mail}
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        icon={Lock}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="flex items-center mb-6">
                        <Link to="/forgot-password" className="text-sm text-olive hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    {error && <p className="text-red-500 font-semibold mb-2">{error}</p>}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-4 bg-gradient-to-r from-olive to-brown text-white font-bold rounded-lg shadow-lg hover:from-grey hover:to-black focus:outline-none focus:ring-2 focus:ring-grey focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
                    </motion.button>
                </form>

                <div className="mt-6 text-center">
                    <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                        onError={() => console.log("Google Login Failed")}
                        useOneTap
                    />
                </div>
            </div>

            <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
                <p className="text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-olive font-bold hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};
export default LoginPage;