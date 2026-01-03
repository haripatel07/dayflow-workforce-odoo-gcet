# Deployment Guide

This guide covers deploying Dayflow HRMS with the backend on Render and frontend on Vercel.

## Architecture
- **Backend**: Node.js + Express on Render
- **Frontend**: React + Vite on Vercel
- **Database**: MongoDB Atlas (Cloud)

---

## Prerequisites

1. **GitHub Repository**: Push your code to GitHub
2. **MongoDB Atlas Account**: Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
3. **Render Account**: Sign up at [render.com](https://render.com)
4. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
5. **Groq API Key**: Get from [console.groq.com](https://console.groq.com)

---

## Part 1: Deploy Backend to Render

### Step 1: Prepare Backend
1. Ensure your `backend/package.json` has a start script:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

2. Add `backend/.env` to `.gitignore` (it's already ignored)

### Step 2: Create Web Service on Render
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **New** → **Web Service**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `dayflow-hrms-backend` (or your choice)
   - **Region**: Choose closest to your users
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or paid for production)

### Step 3: Add Environment Variables
In Render, go to **Environment** and add:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
GROQ_API_KEY=your_groq_api_key_from_console_groq_com
```

**Important**: 
- Get MongoDB URI from MongoDB Atlas (include username, password, and database name)
- Generate a strong JWT_SECRET (64+ random characters recommended)
- Get Groq API key from [console.groq.com](https://console.groq.com)

### Step 4: Deploy
1. Click **Create Web Service**
2. Wait for deployment (5-10 minutes)
3. Your backend will be at: `https://your-app-name.onrender.com`
4. Test: `https://your-app-name.onrender.com/api/users/login`

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Update Frontend Configuration
1. In `frontend/.env`, set:
   ```env
   VITE_API_URL=https://your-app-name.onrender.com
   ```

2. **Important**: Replace `your-app-name` with your actual Render app name

### Step 2: Deploy to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

### Step 3: Add Environment Variables
In Vercel, go to **Settings** → **Environment Variables** and add:

```env
VITE_API_URL=https://your-app-name.onrender.com
```

**Important**: Use the same Render URL from Part 1

### Step 4: Deploy
1. Click **Deploy**
2. Wait for deployment (2-5 minutes)
3. Your frontend will be at: `https://your-project.vercel.app`

### Step 5: Configure Custom Domain (Optional)
1. In Vercel, go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed

---

## Part 3: MongoDB Atlas Setup

### Step 1: Create Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Choose a cloud provider and region (same as Render for lower latency)

### Step 2: Configure Network Access
1. Go to **Network Access**
2. Click **Add IP Address**
3. Click **Allow Access From Anywhere** (0.0.0.0/0)
   - For production, whitelist only Render's IPs
4. Click **Confirm**

### Step 3: Create Database User
1. Go to **Database Access**
2. Click **Add New Database User**
3. Choose **Password** authentication
4. Set username and password (save these securely)
5. Set role to **Read and write to any database**
6. Click **Add User**

### Step 4: Get Connection String
1. Go to **Database** → **Connect**
2. Choose **Connect your application**
3. Copy the connection string
4. Replace `<password>` with your database user password
5. Replace `<dbname>` with `dayflow-hrms` (or your choice)
6. Use this in Render's `MONGODB_URI` environment variable

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dayflow-hrms?retryWrites=true&w=majority
```

---

## Part 4: Post-Deployment

### Step 1: Test Backend
```bash
curl https://your-app-name.onrender.com/api/users/login \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpassword"}'
```

### Step 2: Create SuperAdmin (Optional)
```bash
# SSH into Render or run locally with production MONGODB_URI
cd backend
node seed_superadmin.js
```

### Step 3: Test Frontend
1. Open your Vercel URL
2. Try to register a new company
3. Test login and features

### Step 4: Monitor Logs
- **Render**: Dashboard → Your Service → Logs
- **Vercel**: Dashboard → Your Project → Deployments → View Function Logs
- **MongoDB**: Atlas → Database → Monitoring

---

## Environment Variables Reference

### Backend (Render)
| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection | `mongodb+srv://...` |
| `JWT_SECRET` | JWT signing key | `random64charstring...` |
| `GROQ_API_KEY` | Groq AI API key | `gsk_...` |

### Frontend (Vercel)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://app.onrender.com` |

---

## Troubleshooting

### Backend Issues
1. **502 Bad Gateway**: Check Render logs, ensure MongoDB is accessible
2. **CORS Errors**: Verify frontend URL is allowed in CORS config
3. **JWT Errors**: Ensure JWT_SECRET is set correctly

### Frontend Issues
1. **API Connection Failed**: Verify `VITE_API_URL` is correct
2. **Build Errors**: Check Node version compatibility (use Node 18+)
3. **Blank Page**: Check browser console for errors

### Database Issues
1. **Connection Failed**: Check MongoDB Atlas network access whitelist
2. **Authentication Failed**: Verify database user credentials
3. **Slow Queries**: Check MongoDB Atlas monitoring and indexes

---

## Scaling & Performance

### Backend (Render)
- Upgrade from Free to Starter plan for better performance
- Free tier sleeps after 15 minutes of inactivity
- Consider adding Redis for caching (Render Redis addon)

### Frontend (Vercel)
- Vercel automatically scales with serverless functions
- Free tier includes 100GB bandwidth/month
- Upgrade to Pro for analytics and better support

### Database (MongoDB Atlas)
- Free M0 tier: 512MB storage, shared CPU
- Upgrade to M10+ for production workloads
- Enable backups on paid tiers

---

## Security Checklist

- [ ] Use strong JWT_SECRET (64+ random characters)
- [ ] Enable MongoDB IP whitelist (not 0.0.0.0/0 in production)
- [ ] Use HTTPS only (enforced by Render/Vercel)
- [ ] Set NODE_ENV=production
- [ ] Rotate JWT tokens regularly
- [ ] Enable rate limiting
- [ ] Monitor error logs
- [ ] Keep dependencies updated

---

## Continuous Deployment

### Automatic Deployments
Both Render and Vercel support auto-deployment:

1. **Push to GitHub**: Code changes automatically trigger deployments
2. **Render**: Monitors `main` branch, auto-deploys on push
3. **Vercel**: Monitors all branches, creates preview deployments for PRs

### Manual Deployments
- **Render**: Dashboard → Manual Deploy → Deploy latest commit
- **Vercel**: Dashboard → Deployments → Redeploy

---

## Cost Estimates

### Free Tier (Development/Small Projects)
- **Render**: Free (with sleep after 15 min inactivity)
- **Vercel**: Free (100GB bandwidth/month)
- **MongoDB Atlas**: Free (512MB storage)
- **Total**: $0/month

### Production Setup
- **Render**: $7/month (Starter plan, always on)
- **Vercel**: $20/month (Pro plan, analytics)
- **MongoDB Atlas**: $9/month (M10 cluster)
- **Total**: ~$36/month

---

## Support & Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Dayflow HRMS**: [GitHub Repository](https://github.com/dayflow/hrms)

---

## Quick Deploy Commands

```bash
# Backend local test with production DB
cd backend
npm install
MONGODB_URI="your_production_uri" JWT_SECRET="test" npm start

# Frontend local test with production API
cd frontend
echo "VITE_API_URL=https://your-app.onrender.com" > .env
npm install
npm run dev

# Build frontend for production
npm run build

# Preview production build
npm run preview
```

---

**Congratulations!** 🎉 Your Dayflow HRMS is now deployed and accessible worldwide!
