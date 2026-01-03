import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Users, Calendar, Clock, Activity, Flame, Rocket } from 'lucide-react';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [stats, setStats] = useState({
        attendanceCount: 0,
        leaveBalance: 0,
        pendingTasks: 0,
        activity: []
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const config = { headers: { Authorization: `Bearer ${user.token}` } };
                const { data } = await axios.get('http://localhost:5000/api/users/dashboard/stats', config);
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
        fetchStats();
    }, [user]);

    // Odoo-style Card Component
    const DashboardCard = ({ title, value, subtext, icon: Icon, color }) => (
        <div style={{
            background: 'white',
            padding: '1.5rem',
            borderRadius: '2px', // Sharp corners
            border: '1px solid #1f2937', // Black/Dark Border
            boxShadow: 'none', // No soft shadows
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '0.9rem', color: '#1f2937', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{title}</h3>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#111827', margin: 0 }}>{value}</h2>
                </div>
                <div style={{ padding: '0.5rem', background: `${color}20`, borderRadius: '4px' }}>
                    <Icon size={24} color={color} />
                </div>
            </div>
            {subtext && <p style={{ fontSize: '0.85rem', color: '#374151', margin: 0, fontWeight: '500' }}>{subtext}</p>}
        </div>
    );

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                    Dashboard
                </h1>
                <p style={{ color: '#374151', fontSize: '0.95rem', fontWeight: '500' }}>
                    Welcome back, {user && user.name.split(' ')[0]}! Here's what's happening today.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <DashboardCard
                    title="Attendance"
                    value={stats.attendanceCount}
                    subtext="Days present this month"
                    icon={Calendar}
                    color="#017e84"
                />
                <DashboardCard
                    title="Leave Balance"
                    value={stats.leaveBalance}
                    subtext="Available paid leaves"
                    icon={Clock}
                    color="#d63384"
                />
                <DashboardCard
                    title="Pending Tasks"
                    value={stats.pendingTasks}
                    subtext="Requires your attention"
                    icon={Activity}
                    color="#f59e0b"
                />
                <DashboardCard
                    title="Total Employees"
                    value="12"
                    subtext="Active workforce"
                    icon={Users}
                    color="#10b981"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {/* Recent Activity */}
                <div style={{
                    background: 'white',
                    padding: '0',
                    borderRadius: '2px',
                    border: '1px solid #1f2937'
                }}>
                    <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', background: '#f8f9fa' }}>
                        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#111827' }}>Recent Activity</h3>
                    </div>
                    <div style={{ padding: '0' }}>
                        {stats.activity && stats.activity.length > 0 ? (
                            stats.activity.map((item, index) => (
                                <div key={index} style={{
                                    padding: '1rem 1.5rem',
                                    borderBottom: index < stats.activity.length - 1 ? '1px solid #f3f4f6' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        background: item.type === 'attendance' ? '#017e84' : '#d63384'
                                    }}></div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ margin: 0, fontWeight: '600', color: '#1f2937', fontSize: '0.9rem' }}>{item.title}</p>
                                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#4b5563' }}>
                                            {new Date(item.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className={`badge ${item.status === 'Present' || item.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No recent activity</div>
                        )}
                    </div>
                </div>

                {/* Quick Actions / Announcements */}
                <div style={{
                    background: 'white',
                    padding: '0',
                    borderRadius: '2px',
                    border: '1px solid #1f2937'
                }}>
                    <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', background: '#f8f9fa' }}>
                        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#111827' }}>Announcements</h3>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', padding: '1rem', borderRadius: '2px', marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Flame size={16} color="#d97706" />
                                <h4 style={{ margin: 0, color: '#92400e', fontSize: '0.95rem' }}>New Policy Update</h4>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#b45309' }}>Please review the updated leave policy effective from next month.</p>
                        </div>
                        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', padding: '1rem', borderRadius: '2px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Rocket size={16} color="#2563eb" />
                                <h4 style={{ margin: 0, color: '#1e40af', fontSize: '0.95rem' }}>Team Meeting</h4>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#1d4ed8' }}>Monthly townhall scheduled for Friday at 3 PM.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
