# 🚀 Render Deployment - Quick Fix

## Issue: Missing Environment Variables

Your deployment failed because environment variables are not configured in Render.

---

## ✅ Fix: Add Environment Variables in Render

### Step 1: Go to Render Dashboard
1. Open [https://dashboard.render.com](https://dashboard.render.com)
2. Click on your web service (dayflow-hrms-backend or similar)
3. Click **Environment** in the left sidebar

### Step 2: Add These Environment Variables
Click **Add Environment Variable** and add each of these:

```env
MONGODB_URI
mongodb+srv://username:password@cluster.mongodb.net/dayflow-hrms?retryWrites=true&w=majority

JWT_SECRET
your_super_secret_jwt_key_at_least_32_characters_long

GROQ_API_KEY
gsk_your_groq_api_key_from_console_groq_com

NODE_ENV
production

PORT
5000
```

### Step 3: Get MongoDB URI (if you don't have it)
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Click **Database** → **Connect**
3. Choose **Connect your application**
4. Copy the connection string
5. Replace `<password>` with your database password
6. Replace `<dbname>` with `dayflow-hrms`

Example:
```
mongodb+srv://myuser:mypassword123@cluster0.abcde.mongodb.net/dayflow-hrms?retryWrites=true&w=majority
```

### Step 4: Generate JWT Secret (if you don't have one)
Run in terminal:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Step 5: Get Groq API Key (if you don't have it)
1. Go to [https://console.groq.com](https://console.groq.com)
2. Sign up or log in
3. Go to **API Keys**
4. Create new API key
5. Copy it (starts with `gsk_`)

### Step 6: Save and Redeploy
1. Click **Save Changes** at the top
2. Render will automatically redeploy with the new environment variables
3. Wait 2-3 minutes for deployment

---

## ✅ Verify Deployment

### Check Logs
1. In Render Dashboard, click **Logs**
2. You should see:
   ```
   Server running on port 5000
   MongoDB Connected Successfully
   ```

### Test API
```bash
curl https://your-app-name.onrender.com/

# Should return: "API is running..."
```

---

## 🔒 Security Checklist

- [ ] MongoDB Atlas network access allows Render IPs (or 0.0.0.0/0 for now)
- [ ] Database user has read/write permissions
- [ ] JWT_SECRET is at least 32 characters
- [ ] Environment variables are NOT in your code or git repository
- [ ] `.env` file is in `.gitignore`

---

## 📊 Common Issues

### Issue 1: MongoDB Connection Error
```
Error: querySrv ENOTFOUND _mongodb._tcp
```
**Solution**: MONGODB_URI is missing or incorrect. Add it in Render Environment tab.

### Issue 2: Authentication Failed
```
MongoServerError: bad auth
```
**Solution**: Wrong username/password in MongoDB URI. Check MongoDB Atlas database user credentials.

### Issue 3: Network Error
```
MongoNetworkError: connection timeout
```
**Solution**: 
1. Go to MongoDB Atlas → Network Access
2. Click **Add IP Address**
3. Choose **Allow Access From Anywhere** (0.0.0.0/0)

### Issue 4: JWT Secret Missing
```
TypeError: Cannot read property 'sign' of undefined
```
**Solution**: Add JWT_SECRET in Render Environment tab.

---

## 🎯 After Successful Deployment

Your backend will be at: `https://your-app-name.onrender.com`

### Update Frontend
1. Go to Vercel
2. Add environment variable:
   ```
   VITE_API_URL=https://your-app-name.onrender.com
   ```
3. Redeploy frontend

---

## 💰 Important: Free Tier Limitations

- **Render Free**: Service sleeps after 15 minutes of inactivity
- **First request after sleep**: Takes 30-60 seconds to wake up
- **Solution**: Upgrade to Starter plan ($7/month) for always-on service

---

## 📞 Need Help?

1. Check Render docs: https://render.com/docs
2. MongoDB Atlas docs: https://docs.atlas.mongodb.com
3. Check project DEPLOYMENT.md for full guide

---

## ✅ Current Deployment Status

Based on your logs:
- ✅ Build successful
- ✅ Packages installed
- ✅ Server started
- ❌ **Missing environment variables** ← FIX THIS
- ❌ MongoDB connection failed

**Next Step**: Add environment variables in Render dashboard and redeploy.
