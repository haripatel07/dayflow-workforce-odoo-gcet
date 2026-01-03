const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
    console.error('❌ ERROR: Missing required environment variables:');
    missingEnvVars.forEach(varName => {
        console.error(`   - ${varName}`);
    });
    console.error('\n📋 Required environment variables:');
    console.error('   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname');
    console.error('   JWT_SECRET=your_jwt_secret_key');
    console.error('   GROQ_API_KEY=your_groq_api_key (optional for AI features)');
    console.error('\n💡 For Render deployment, set these in the Environment tab');
    process.exit(1);
}

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const chatRoutes = require('./routes/chatRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const taskRoutes = require('./routes/taskRoutes');
const superAdminRoutes = require('./routes/superAdminRoutes');

app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/superadmin', superAdminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
