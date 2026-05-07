# AttractionsNepal — Full Stack App

React + Node.js + Prisma + Supabase + Google Maps, deployed on Render.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS, React Query |
| Routing | React Router v6 |
| Maps | @vis.gl/react-google-maps (Google Maps JS API) |
| Backend | Node.js, Express |
| ORM | Prisma |
| Database | Supabase (PostgreSQL) |
| Image Storage | Supabase Storage (1GB free) |
| Deploy | Render (free tier) |

---

## First-time Setup

### 1. Supabase

1. Create a new project at https://supabase.com
2. Go to **Project Settings → Database → Connection string**
   - Copy the **Transaction pooler** URL → `DATABASE_URL` (port 6543)
   - Copy the **Session/Direct** URL → `DIRECT_URL` (port 5432)
3. Go to **Project Settings → API**
   - Copy `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
4. Go to **Storage** → Create a new bucket called `place-images` → set to **Public**

### 2. Backend

```bash
cd backend
cp .env.example .env
# Fill in your env values

npm install
npm run db:push        # creates tables in Supabase
npm run db:generate    # generates Prisma client
npm run db:seed        # adds 3 sample places
npm run dev            # starts on port 3000
```

### 3. Frontend

```bash
cd frontend
cp .env.example .env
# Fill in your env values (API URL, Google Maps key, affiliate IDs)

npm install
npm run dev            # starts on port 5173
```

### 4. Google Maps

1. Go to https://console.cloud.google.com
2. Enable **Maps JavaScript API**
3. Create an API key → add to `VITE_GOOGLE_MAPS_KEY`
4. Go to **Google Maps Platform → Map IDs** → create a Map ID → add to `VITE_GOOGLE_MAP_ID`
5. Restrict the API key to your domain in production

### 5. Render Deploy

1. Push to GitHub
2. Go to https://render.com → New → Blueprint
3. Point to your repo — Render will read `render.yaml`
4. Fill in all the `sync: false` env vars in the Render dashboard
5. Deploy!

---

## Adding a Place (via API)

```bash
# 1. Login to get a token
curl -X POST https://your-api.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"yourpassword"}'

# 2. Create a place
curl -X POST https://your-api.onrender.com/api/admin/places \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nuwakot Durbar",
    "category": "DURBAR_PALACE",
    "summary": "A magnificent 7-storey palace...",
    "story": "<p>Full HTML content here</p>",
    "district": "Nuwakot",
    "province": "BAGMATI",
    "lat": 27.9886,
    "lng": 85.1622,
    "elevation": 1128,
    "gygQuery": "Nuwakot Nepal",
    "bookingCity": "Nuwakot",
    "published": true,
    "featured": false
  }'
```

---

## Category Reference

| Enum | URL | Description |
|---|---|---|
| TEMPLE | /category/temple | Hindu temples |
| MONASTERY | /category/monastery | Buddhist monasteries |
| STUPA | /category/stupa | Buddhist stupas |
| DURBAR_PALACE | /category/durbar-palace | Royal palaces & durbar squares |
| ARCHAEOLOGICAL | /category/archaeological | Ancient sites |
| CULTURAL_VILLAGE | /category/cultural-village | Heritage villages |
| HILL_VIEWPOINT | /category/hill-viewpoint | Hilltop viewpoints |
| MOUNTAIN_VIEW | /category/mountain-view | Himalayan view spots |
| RIVER | /category/river | Rivers & confluences |
| WATERFALL | /category/waterfall | Waterfalls |
| LAKE | /category/lake | Lakes & ponds |
| HOT_SPRING | /category/hot-spring | Natural hot springs |
| CAVE | /category/cave | Caves |
| NATIONAL_PARK | /category/national-park | Parks & wildlife |
| TREK_ROUTE | /category/trek-route | Trekking routes |
| ADVENTURE_SPORTS | /category/adventure-sports | Bungee, paragliding etc. |
| AMUSEMENT_PARK | /category/amusement-park | Theme parks |

---

## Monetisation Hooks Built In

- **GetYourGuide widget** — set `gygQuery` on any place → auto-embeds tour widget
- **Booking.com affiliate** — set `bookingCity` on any place → affiliate hotel search link
- **PlaceSection links** — add `type: "affiliate"` links via the sections API
- Both affiliate IDs live in frontend `.env` — never in DB
