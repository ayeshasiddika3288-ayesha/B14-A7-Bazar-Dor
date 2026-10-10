
# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**

চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম-দুধ ও মসলার আজকের বাজারদর, বাজারভিত্তিক বিস্তারিত এবং দামের পরিবর্তন এক জায়গায়।

[![Live Demo](https://img.shields.io/badge/Live-Demo-058a41?style=for-the-badge&logo=vercel&logoColor=white)](https://b14-a7-bazar-dor-six.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

🔗 **Live:** <https://b14-a7-bazar-dor-six.vercel.app>



---

## 📖 Description

**BazarDor** বাংলাদেশের নিত্যপ্রয়োজনীয় ৩৩টি পণ্যের আজকের দাম দেখার একটি ওয়েব অ্যাপ। এখানে সব পণ্যের দাম, গতকালের তুলনায় বাড়া-কমার হার (▲/▼), এবং ১২টি বাজারের সর্বনিম্ন, সর্বোচ্চ ও গড় দাম দেখা যায়। সব দাম ও সংখ্যা বাংলা অঙ্কে দেখানো হয়।

## ✨ Key Features

1. **লাইভ প্রাইস টিকার:** সব পণ্যের ইমোজি, নাম, দাম ও ▲/▼ পরিবর্তন অনবরত স্ক্রল হয় (infinite marquee)।
2. **আজ দাম বেড়েছে / কমেছে:** সবচেয়ে বেশি বাড়া ও কমা ৬টি করে পণ্য আলাদা সেকশনে।
3. **ক্যাটাগরি পেজ ও সর্টিং:** `ডিফল্ট`, `দাম: কম থেকে বেশি`, `দাম: বেশি থেকে কম`। সর্টিং হয় আসল সংখ্যা ধরে, বাংলা স্ট্রিং ধরে নয়।
4. **প্রোটেক্টেড প্রোডাক্ট ডিটেইলস:** লগইন করলে সর্বনিম্ন/সর্বোচ্চ/গড় দাম এবং বাজারভিত্তিক দামের টেবিল দেখা যায়। লগইন ছাড়া গেলে সাইন ইন পেজে পাঠানো হয় ও toast দেখায়।
5. **Authentication:** BetterAuth দিয়ে Email/Password, Google এবং GitHub লগইন, সব ক্ষেত্রে toast নোটিফিকেশন।
6. **প্রোফাইল ও আপডেট:** প্রোফাইল পেজ এবং আলাদা রুটে নাম আপডেটের সুবিধা।
7. **রেসপন্সিভ ডিজাইন:** মোবাইল, ট্যাবলেট ও ডেস্কটপে সঠিকভাবে কাজ করে।
8. **Skeleton loading ও 404 পেজ:** ডেটা লোড হওয়ার সময় skeleton এবং ভুল URL এর জন্য বন্ধুত্বপূর্ণ 404 পেজ।

## 🛠️ Technologies Used

| Purpose | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS, DaisyUI |
| Authentication | BetterAuth (Email/Password, Google, GitHub) |
| Database | MongoDB Atlas |
| Notifications | react-hot-toast |
| Deployment | Vercel |

## 📁 Project Structure

```B14-A7-Bazar-Dor/
├── app/
│   ├── layout.tsx                  # Navbar, ticker, footer, toaster
│   ├── page.tsx                    # Home
│   ├── loading.tsx                 # Home skeleton
│   ├── not-found.tsx               # 404 page
│   ├── category/[slug]/            # Category page (+ loading skeleton)
│   ├── product/[slug]/page.tsx     # Product details (protected)
│   ├── signin/page.tsx
│   ├── signup/page.tsx
│   ├── profile/page.tsx
│   ├── profile/update/page.tsx
│   └── api/auth/[...all]/route.ts  # BetterAuth handler
├── components/
│   ├── Navbar.tsx  CategoryLinks.tsx  UserMenu.tsx
│   ├── Ticker.tsx  Hero.tsx  Footer.tsx
│   ├── ProductCard.tsx  ProductGrid.tsx  ChangeBadge.tsx
│   ├── CategoryView.tsx  SortDropdown.tsx  Skeletons.tsx
│   └── SignInForm.tsx  SocialButtons.tsx  SignOutButton.tsx  UpdateProfileForm.tsx
├── lib/
│   ├── api.ts                      # Fetch products and categories
│   ├── auth.ts                     # BetterAuth server config
│   ├── auth-client.ts              # BetterAuth client
│   └── format.ts                   # Bengali digits, date, price format
├── types/index.ts                  # Product, Category types
└── .env.local                      # Secrets (not committed)                    
```

## 🚀 Run Locally

**Requirements:** Node.js 20 বা তার উপরে, একটি MongoDB database (যেমন MongoDB Atlas free cluster)।

**1. Repository clone করুন**

```bash
git clone https://github.com/ayeshasiddika3288-ayesha/B14-A7-Bazar-Dor.git
cd B14-A7-Bazar-Dor
```

**2. Dependencies install করুন**

```bash
npm install
```

**3. প্রজেক্টের root এ `.env.local` ফাইল বানান**

```env
BETTER_AUTH_SECRET=your_random_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string

# Optional: social login এর জন্য
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

`BETTER_AUTH_SECRET` বানাতে:

```bash
openssl rand -base64 32
```

**4. Development server চালান**

```bash
npm run dev
```

ব্রাউজারে <http://localhost:3000> খুলুন।

> Google/GitHub key না দিলেও Email/Password লগইন কাজ করবে। শুধু social button এ ক্লিক করলে "Provider not found" দেখাবে।

## 🔐 Social Login Setup (optional)

OAuth app তৈরির সময় callback URL হবে:

| Provider | Callback URL |
|---|---|
| Google | `{BETTER_AUTH_URL}/api/auth/callback/google` |
| GitHub | `{BETTER_AUTH_URL}/api/auth/callback/github` |

লোকালে `{BETTER_AUTH_URL}` হলো `http://localhost:3000`, আর production এ Vercel এর URL।

## 🌐 Data Source

প্রজেক্টটি নিচের API থেকে পণ্য ও ক্যাটাগরির ডেটা নেয়:

```text
GET /api/bazardor/products
GET /api/bazardor/products?category=chal
GET /api/bazardor/products/:id
GET /api/bazardor/categories
```

## ☁️ Deployment

Vercel এ deploy করা হয়েছে। Deploy করার সময় Environment Variables এ `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (Vercel এর আসল URL) এবং `MONGODB_URI` দিতে হয়, আর MongoDB Atlas এর Network Access এ `0.0.0.0/0` allow করা থাকতে হয়।

## 👩‍💻 Author

**Ayesha Siddika**

GitHub: [@ayeshasiddika3288-ayesha](https://github.com/ayeshasiddika3288-ayesha)

---

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।*
