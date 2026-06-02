# 🏡 Aashiyana Residences — Owner's Website Guide

## Your Complete No-Code Website Management Guide

---

## 📁 Your Website Files

```
aashiyana/
├── index.html          ← Home Page
├── listings.html       ← All Properties Page
├── css/
│   └── style.css       ← All styling
├── js/
│   ├── main.js         ← ⭐ ADD/EDIT PROPERTIES HERE
│   └── listings.js     ← Filter logic (don't edit)
└── data/
    └── properties.json ← Reference copy of property data
```

---

## ✅ HOW TO ADD A NEW PROPERTY (Super Simple!)

### Step 1: Open `js/main.js`
Open this file in any text editor (Notepad, TextEdit, VS Code, etc.)

### Step 2: Find the property list
Look for this line near the top:
```
const PROPERTIES_DATA = [
```

### Step 3: Copy this template and fill it in
```json
{
  "id": 7,
  "name": "Your Property Name",
  "location": "Locality, City Name",
  "city": "Delhi",
  "price": "₹2.5 Cr",
  "priceValue": 25000000,
  "bedrooms": 3,
  "bathrooms": 3,
  "area": "2000 sq ft",
  "type": "Apartment",
  "status": "Available",
  "featured": false,
  "image": "YOUR_IMAGE_URL",
  "images": [
    "IMAGE_1_URL",
    "IMAGE_2_URL",
    "IMAGE_3_URL"
  ],
  "description": "Write a compelling 2-3 sentence description here.",
  "amenities": ["Amenity 1", "Amenity 2", "Amenity 3"]
},
```

### Step 4: Paste it inside the array, after the last `},`
The array ends with `];` — paste your new property just before that.

### Step 5: Save the file. Done!
The property will automatically appear on both the Home page (if featured: true) and the All Properties page.

---

## 📝 FIELD REFERENCE

| Field | What to put | Example |
|-------|------------|---------|
| `id` | Next number in sequence | `7` |
| `name` | Property name | `"Skyline Villa"` |
| `location` | Full locality + city | `"Vasant Kunj, New Delhi"` |
| `city` | City only (for filter) | `"Delhi"` or `"Gurugram"` or `"Noida"` |
| `price` | Display price | `"₹3.5 Cr"` or `"₹85 L"` |
| `priceValue` | Price in numbers (for filter) | `35000000` |
| `bedrooms` | Number of bedrooms | `4` |
| `bathrooms` | Number of bathrooms | `4` |
| `area` | Area with unit | `"3200 sq ft"` |
| `type` | Property type | `"Villa"`, `"Apartment"`, `"Penthouse"`, `"Farmhouse"`, `"Row House"` |
| `status` | Always `"Available"` | `"Available"` |
| `featured` | Show on home page? | `true` or `false` |
| `image` | Main image URL | Unsplash or your hosted URL |
| `images` | 3 image URLs for gallery | Array of 3 URLs |
| `description` | Property description | 2-3 sentences |
| `amenities` | List of features | `["Pool", "Gym", "Security"]` |

---

## 🖼️ HOW TO ADD PROPERTY IMAGES

### Option A: Use Unsplash (Free, Beautiful)
1. Go to https://unsplash.com
2. Search "luxury house", "apartment interior", "villa" etc.
3. Click the photo → right-click → Copy image address
4. Paste that URL in your property's `image` field

### Option B: Upload your own photos
1. Upload to Google Drive or Dropbox
2. Make the file publicly viewable
3. Copy the direct link
4. Paste it in the `image` field

### Option C: Use a free image host
- **imgbb.com** — upload and get a direct URL
- **cloudinary.com** — free tier available

---

## ✏️ HOW TO EDIT EXISTING PROPERTY DETAILS

1. Open `js/main.js`
2. Find the property by its `name`
3. Change any field value
4. Save the file

---

## 🗑️ HOW TO REMOVE A PROPERTY

1. Open `js/main.js`
2. Find the property block (starts with `{` and ends with `},`)
3. Delete everything from that `{` to its closing `},`
4. Save the file

---

## 🌟 MAKING A PROPERTY "FEATURED" (shows on home page)

Change `"featured": false` to `"featured": true`

Only 3-4 featured properties look best on the home page.

---

## 📞 HOW TO UPDATE CONTACT DETAILS

Open `index.html` and `listings.html` and search for:
- `+91-98765-43210` → Replace with your phone number
- `hello@aashiyanaresidences.in` → Replace with your email
- `wa.me/919876543210` → Replace `919876543210` with your WhatsApp number (country code + number, no spaces)
- `Connaught Place, New Delhi` → Replace with your address

---

## 🚀 DEPLOYMENT GUIDE

### Recommended: Netlify (Free, Easiest)
1. Go to https://netlify.com and sign up free
2. Drag your entire `aashiyana` folder into Netlify's upload area
3. Your site is live! You get a free URL like `aashiyana.netlify.app`
4. You can connect a custom domain like `aashiyanaresidences.in`

### Alternative: GitHub Pages (Also Free)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages → Enable GitHub Pages

### To update the website after changes:
- On Netlify: Just drag and drop the updated folder again
- They also have a "drag to update" feature for individual files

---

## 🌐 CUSTOM DOMAIN SETUP

1. Buy domain from GoDaddy or Namecheap (e.g., `aashiyanaresidences.in`)
2. In Netlify: Settings → Domain Management → Add custom domain
3. Update DNS records as shown by Netlify (takes ~24 hours)

---

## 📈 SEO TIPS

The website already has:
- ✅ Meta tags for all pages
- ✅ Open Graph tags (looks great when shared on WhatsApp/Facebook)
- ✅ Structured data for real estate
- ✅ Fast loading images (lazy loaded)
- ✅ Mobile-first responsive design

To boost SEO further:
- Add your business to **Google My Business**
- Share listings on **MagicBricks, 99acres, Housing.com**
- Post regularly on **Instagram** with property photos linking to your website

---

## 💬 WHATSAPP INTEGRATION

The floating WhatsApp button auto-links to your number. When visitors click it, they get a pre-filled message. To change the message:

In `index.html`, find:
```
https://wa.me/919876543210?text=Hello...
```
Change the text after `text=` (URL-encoded — use spaces as `%20`)

---

## 📞 SUPPORT

If you ever get stuck, just open the files in any text editor (even Notepad works).  
The website uses only plain HTML, CSS, and JavaScript — no complex frameworks.

**Recommended free editors:**
- **VS Code** (best) — https://code.visualstudio.com
- **Notepad++** — https://notepad-plus-plus.org

---

*Built with ❤️ for Aashiyana Residences*
