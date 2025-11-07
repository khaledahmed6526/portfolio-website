# 🚀 Deployment Guide - رفع الموقع على الإنترنت

## 📋 Overview

سنقوم برفع:
- **Frontend (React)** → Netlify (مجاني)
- **Backend (Node.js)** → Render (مجاني)
- **Database** → MongoDB Atlas (جاهز بالفعل ✅)

---

## 🔧 الإعداد الأولي

### 1️⃣ رفع الكود على GitHub

#### أ. إنشاء Repository جديد

1. افتح [GitHub](https://github.com)
2. اضغط **New Repository**
3. اكتب اسم: `portfolio-website`
4. اختار **Private** (للخصوصية)
5. **لا تضيف** README أو .gitignore
6. اضغط **Create Repository**

#### ب. رفع الكود من Terminal

```bash
# في مجلد المشروع
cd "c:\Users\khaled\Desktop\New folder (2)"

# Initialize Git (إذا لم يكن موجوداً)
    git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add remote (استبدل YOUR_USERNAME باسمك على GitHub)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push
git push -u origin main
```

⚠️ **مهم:** تأكد أن ملف `.env` **موجود** في `.gitignore` عشان ما يترفعش على GitHub!

---

## 🎨 الجزء 1: رفع Backend على Render

### الخطوات:

#### 1️⃣ افتح [Render.com](https://render.com)
- سجل دخول بحساب GitHub

#### 2️⃣ إنشاء Web Service جديد
- اضغط **New +** → **Web Service**
- اختار الـ repository: `portfolio-website`
- اضغط **Connect**

#### 3️⃣ إعدادات الـ Service

**Name:** `portfolio-backend` (أو أي اسم تحبه)

**Root Directory:** اتركها فاضية (لأن server في root)

**Environment:** `Node`

**Region:** اختار أقرب region ليك

**Branch:** `main`

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
node server/index.js
```

#### 4️⃣ إضافة Environment Variables

اضغط **Advanced** وأضف المتغيرات دي:

```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://akhaledahmedmahamed_db_user:blh0Ja4xekg8whJ6@cluster0.kkaod63.mongodb.net/portfolio_db?retryWrites=true&w=majority
JWT_SECRET=ThisIsAStr0ngS3cretForJWT
CLIENT_URL=https://your-frontend-url.netlify.app
EMAIL_USER=akhaledahmedmahamed@gmail.com
EMAIL_PASS=your_app_password_here
```

⚠️ **ملاحظة:** `CLIENT_URL` هنحدثه بعد ما نرفع الـ Frontend

#### 5️⃣ اختار Free Plan
- اضغط **Create Web Service**
- انتظر 5-10 دقائق للـ deployment

#### 6️⃣ احفظ رابط الـ Backend
بعد ما ينتهي، هتحصل على رابط زي:
```
https://portfolio-backend-xxxx.onrender.com
```

**احفظ الرابط ده!** هنستخدمه في الـ Frontend

---

## 🌐 الجزء 2: رفع Frontend على Netlify

### الخطوات:

#### 1️⃣ تحديث API URL في Frontend

أولاً، حدّث ملف `client/src/utils/api.js`:

**افتح:** `client/src/utils/api.js`

**ابحث عن:**
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

**تأكد إنها موجودة** (لو مش موجودة، غيّر أول سطر في الـ axios config)

#### 2️⃣ إنشاء ملف Netlify Config

**أنشئ ملف جديد:** `client/netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 3️⃣ افتح [Netlify](https://netlify.com)
- سجل دخول بحساب GitHub

#### 4️⃣ Add New Site
- اضغط **Add new site** → **Import an existing project**
- اختار **GitHub**
- اختار repository: `portfolio-website`

#### 5️⃣ إعدادات الـ Build

**Base directory:** `client`

**Build command:** `npm run build`

**Publish directory:** `client/build`

#### 6️⃣ Environment Variables

اضغط **Show advanced** → **New variable**

أضف:
```
REACT_APP_API_URL=https://portfolio-backend-xxxx.onrender.com/api
```

⚠️ **استبدل** `portfolio-backend-xxxx.onrender.com` برابط الـ Backend اللي حفظته!

#### 7️⃣ Deploy
- اضغط **Deploy site**
- انتظر 2-5 دقائق

#### 8️⃣ احصل على رابط موقعك
بعد الانتهاء، هتحصل على رابط زي:
```
https://your-site-name.netlify.app
```

---

## 🔄 الجزء 3: تحديث CORS في Backend

### الخطوات:

#### 1️⃣ حدّث `CLIENT_URL` في Render

1. ارجع لـ **Render Dashboard**
2. افتح الـ **Web Service** بتاعك
3. اذهب إلى **Environment**
4. حدّث `CLIENT_URL`:
   ```
   CLIENT_URL=https://your-site-name.netlify.app
   ```
5. احفظ التغييرات
6. الـ Service هيعمل re-deploy تلقائياً

---

## 🧪 الجزء 4: اختبار الموقع

### تحقق من:

✅ **Frontend يفتح:** زُر `https://your-site-name.netlify.app`

✅ **الصفحات تشتغل:** Home, About, Services, Portfolio, Contact

✅ **Backend شغال:** زُر `https://portfolio-backend-xxxx.onrender.com/api/health`
   - المفروض تشوف: `{"status":"OK","message":"Server is running"}`

✅ **Services تظهر:** افتح `/services` - المفروض تشوف الخدمات الثلاثة

✅ **Contact Form يشتغل:** 
   - املأ الفورم وابعت
   - شوف إيميلك - المفروض توصلك رسالة!

---

## 🐛 حل المشاكل الشائعة

### مشكلة: "Cannot connect to server"

**الحل:**
1. تأكد إن `REACT_APP_API_URL` في Netlify صحيح
2. تأكد إن Backend شغال على Render
3. تأكد إن `CLIENT_URL` في Render Environment Variables صحيح

### مشكلة: CORS Error

**الحل:**
تأكد إن `CLIENT_URL` في Backend Environment Variables = رابط الـ Frontend الصحيح

### مشكلة: MongoDB Connection Failed

**الحل:**
1. روح على [MongoDB Atlas](https://cloud.mongodb.com)
2. Network Access → Add IP Address
3. اختار **Allow Access from Anywhere** (0.0.0.0/0)

### مشكلة: Emails not sending

**الحل:**
تأكد إن `EMAIL_USER` و `EMAIL_PASS` موجودين في Render Environment Variables

---

## 📱 الجزء 5: Custom Domain (اختياري)

### لو عايز تستخدم دومين خاص بيك:

#### في Netlify:
1. **Domain Settings** → **Add custom domain**
2. اكتب الدومين بتاعك
3. اتبع التعليمات لتحديث الـ DNS

---

## 🎉 تم الانتهاء!

موقعك الآن على الإنترنت! 🚀

**روابطك:**
- 🌐 Frontend: `https://your-site-name.netlify.app`
- 🔧 Backend: `https://portfolio-backend-xxxx.onrender.com`
- 💾 Database: MongoDB Atlas

---

## 🔄 تحديث الموقع مستقبلاً

عندما تريد تحديث الموقع:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

Netlify و Render سيقومون بـ auto-deploy تلقائياً! ✅

---

## 💡 نصائح مهمة

1. ✅ **لا ترفع** `.env` على GitHub أبداً
2. ✅ استخدم **Environment Variables** في Render و Netlify
3. ✅ راقب **Logs** في Render لو حصلت مشاكل
4. ✅ Render Free tier قد ينام بعد 15 دقيقة من عدم الاستخدام (أول request سيوقظه)

---

**Good Luck! 🚀**
