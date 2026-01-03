import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            setUser(userInfo);
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
            setUser(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    };

    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
    };

    const [attendanceStatus, setAttendanceStatus] = useState('Checked Out');

    const fetchAttendanceStatus = async () => {
        if (!user) return;
        try {
            const config = { headers: { Authorization: `Bearer ${user.token}` } };
            // Use API to check open session specifically or parse from list
            // Ideally we create a specific status endpoint, but list works for now
            const { data } = await axios.get('http://localhost:5000/api/attendance/my', config);

            // Check if there is ANY open session (checkOut is null)
            const openSession = data.find(d => !d.checkOut);

            if (openSession) {
                setAttendanceStatus('Checked In');
            } else {
                setAttendanceStatus('Checked Out');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (user) {
            fetchAttendanceStatus();
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, attendanceStatus, fetchAttendanceStatus }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
