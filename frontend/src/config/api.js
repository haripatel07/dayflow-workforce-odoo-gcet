// API Configuration
// This will automatically use the environment variable set in .env file
// For production deployment:
// 1. Set VITE_API_URL in Vercel environment variables to your Render backend URL
// 2. Example: https://your-app-name.onrender.com

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Helper to get auth config
export const getAuthConfig = () => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    };
};
