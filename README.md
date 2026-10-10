# 🛒 বাজার দর (BazarDor)

বাংলাদেশের প্রয়োজনীয় নিত্যপণ্যের (চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ, মসলা) আজকের বাজারদর এক নজরে দেখার একটি ওয়েব অ্যাপ। বিভিন্ন বাজারের দাম, সর্বনিম্ন, সর্বোচ্চ ও গড় দাম এবং দাম বাড়া-কমার হার সহজে দেখা যায়।

🔗 **Live:** https://b14-a7-bazar-dor-six.vercel.app

## ✨ Key Features
1. **লাইভ প্রাইস টিকার**: সব পণ্যের দাম ও ▲/▼ পরিবর্তন অনবরত স্ক্রল হয়
2. **আজ দাম বেড়েছে / কমেছে**: সবচেয়ে বেশি বাড়া ও কমা ৬টি করে পণ্য
3. **ক্যাটাগরি পেজ ও সর্টিং**: ডিফল্ট, দাম কম থেকে বেশি, বেশি থেকে কম (বাংলা সংখ্যা সঠিকভাবে হ্যান্ডেল করে)
4. **প্রোটেক্টেড প্রোডাক্ট ডিটেইলস**: লগইন করলে সর্বনিম্ন/সর্বোচ্চ/গড় দাম ও বাজারভিত্তিক দামের তালিকা
5. **Authentication**: BetterAuth দিয়ে Email/Password, Google ও GitHub লগইন, toast নোটিফিকেশন
6. **প্রোফাইল আপডেট**: নাম পরিবর্তনের সুবিধা
7. **সম্পূর্ণ রেসপন্সিভ ডিজাইন**, skeleton loading এবং কাস্টম 404 পেজ

## 🛠️ Technologies Used
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- BetterAuth
- MongoDB
- react-hot-toast
- Vercel (Deployment)

## 🚀 Run Locally
```bash
git clone https://github.com/ayeshasiddika3288-ayesha/B14-A7-Bazar-Dor.git
cd B14-A7-Bazar-Dor
npm install
```

`.env.local` ফাইলে দিন:
```
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

```bash
npm run dev
```

## 👩‍💻 Author
Ayesha Siddika