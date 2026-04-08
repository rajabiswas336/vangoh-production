# Vangoh Production — React + Node.js

## Project Structure

```
vangoh-production/
├── client/          ← React (Vite) frontend
│   └── src/
│       ├── components/
│       ├── hooks/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
└── server/          ← Node.js (Express) backend
    ├── index.js
    ├── .env.example
    └── package.json
```

---

## Local Development

### 1. Install dependencies

```bash
# Frontend
cd client && npm install

# Backend
cd ../server && npm install
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
# Edit server/.env with your email credentials
```

### 3. Run both servers

**Terminal 1 — Backend:**
```bash
cd server && npm run dev
```

**Terminal 2 — Frontend:**
```bash
cd client && npm run dev
```

Open http://localhost:5173

---

## Deployment to Hostinger VPS

> **Recommended plan:** Hostinger KVM 1 VPS (cheapest, ~$5–7/month) supports Node.js

---

### Step 1 — Get a Hostinger VPS

1. Go to hostinger.com → **VPS Hosting**
2. Choose **KVM 1** plan
3. Select **Ubuntu 22.04** as the OS
4. Complete checkout

---

### Step 2 — Connect to your VPS via SSH

In your Hostinger hPanel, go to **VPS → Manage → SSH Access** to find:
- IP address (e.g. `123.45.67.89`)
- Root password

Then open your terminal:

```bash
ssh root@YOUR_VPS_IP
```

---

### Step 3 — Install Node.js & tools on the VPS

```bash
# Update system
apt update && apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install PM2 (keeps your app running forever)
npm install -g pm2

# Install Nginx (reverse proxy)
apt install -y nginx

# Confirm versions
node -v && npm -v
```

---

### Step 4 — Upload your project to the VPS

**Option A — Git (recommended):**
```bash
# On VPS:
cd /var/www
git clone https://github.com/YOUR_USERNAME/vangoh-production.git
cd vangoh-production
```

**Option B — Upload with SCP (from your local machine):**
```bash
scp -r ./vangoh-production root@YOUR_VPS_IP:/var/www/
```

---

### Step 5 — Build the frontend & start the server

```bash
cd /var/www/vangoh-production

# Install backend dependencies
cd server && npm install --production

# Create your .env file
cp .env.example .env
nano .env
# → Fill in your SMTP credentials and domain email

# Build the React frontend
cd ../client && npm install && npm run build

# Start the Node server with PM2
cd ../server
pm2 start index.js --name vangoh
pm2 save
pm2 startup   # follow the printed command to auto-start on reboot
```

---

### Step 6 — Configure Nginx as a reverse proxy

```bash
nano /etc/nginx/sites-available/vangoh
```

Paste this config (replace `yourdomain.com`):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable the site
ln -s /etc/nginx/sites-available/vangoh /etc/nginx/sites-enabled/
nginx -t                  # test config
systemctl reload nginx    # apply
```

---

### Step 7 — Point your Hostinger domain to the VPS

1. In Hostinger **hPanel → Domains → Manage**
2. Click **DNS / Nameservers**
3. Edit the **A record**:
   - **Host:** `@`  → **Points to:** `YOUR_VPS_IP`
   - **Host:** `www` → **Points to:** `YOUR_VPS_IP`
4. Save. DNS propagates in 1–24 hours.

---

### Step 8 — Add free HTTPS (SSL)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com
# Follow prompts, enter email, agree to terms
```

Certbot automatically updates your Nginx config and renews the cert.

---

## Email Setup (Contact Form)

The contact form uses your Hostinger email. To set it up:

1. In Hostinger hPanel → **Emails → Email Accounts**
2. Create `hello@yourdomain.com`
3. Copy the SMTP settings shown (host, port, password)
4. Paste them into `/var/www/vangoh-production/server/.env`
5. Restart the app: `pm2 restart vangoh`

---

## Useful PM2 Commands

```bash
pm2 status           # see if app is running
pm2 logs vangoh      # view live logs
pm2 restart vangoh   # restart after changes
pm2 stop vangoh      # stop the app
```

---

## Updating the site

```bash
# On VPS:
cd /var/www/vangoh-production
git pull                         # get latest code
cd client && npm run build       # rebuild frontend
cd ../server && pm2 restart vangoh
```
