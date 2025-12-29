# 🎵 Audio Stream Webpage

A modern **Audio Streaming Web Application** that allows users to browse, search, and play music tracks in real time on a single page.
The project focuses on **clean UI, smooth playback, and user-friendly interactions**.

---

## 📌 Features

* 🎧 Play music directly in the browser
* 🔍 Centered glass-effect search bar
* 🎶 Clickable music list with hover & zoom effects
* ⏯️ Music player with play / pause controls
* 🕒 Recent playlist section
* ✨ Modern glassmorphism UI
* ⚡ Single Page Application (SPA)
* 📱 Responsive layout

---

## 🧱 Project Structure

```
audio-stream/
│
├── components/
│   ├── Navbar.tsx
│   ├── MusicPlayer.tsx
│   ├── MusicList.tsx
│   ├── Sidebar.tsx
│   ├── RecentPlaylist.tsx
│   └── SearchBar.tsx
│
├── app/
│   └── page.tsx   // Main dashboard page
│
├── public/
│   └── audio/     // Demo audio files
│
├── README.md
└── package.json
```

---
<img width="1676" height="812" alt="Screenshot 2025-12-29 at 9 10 46 PM" src="https://github.com/user-attachments/assets/524f45a0-b7b1-4746-af43-4852ea5efde0" />
<img width="1669" height="822" alt="Screenshot 2025-12-29 at 9 10 53 PM" src="https://github.com/user-attachments/assets/d6fbc4b3-766a-4ccf-90f3-b8644f7a311a" />


## 🛠️ Tech Stack

### Frontend

* **Next.js (React)**
* **TypeScript**
* **Tailwind CSS**

### Audio

* **HTML5 Audio API**
* Browser-based audio streaming

---

## 🚀 How It Works

1. User selects a song from the music list
2. The audio source is loaded dynamically
3. HTML5 Audio API streams the audio
4. Music starts playing instantly
5. Recent playlist updates automatically

---

## 🖥️ UI Components Explained

### Search Bar

* Center aligned
* Glassmorphism effect
* Hover highlight
* Click zoom animation

### Music List

* Displays song title, artist, duration
* Hover effect for each item
* Click to play

### Music Player

* Shows current track
* Play / Pause functionality
* Controlled from state

### Recent Playlist

* Displays recently played tracks
* Scrollable
* Click to replay

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/audio-stream-webpage.git

# Go to project folder
cd audio-stream-webpage

# Install dependencies
npm install

# Run development server
npm run dev
```

Open a browser and visit:

```
http://localhost:3000
```


---

## 🌱 Future Enhancements

* User authentication
* Backend audio streaming (Spring Boot / Node.js)
* Cloud storage (AWS S3)
* Playlist creation
* Audio progress seek bar
* Volume control
* 

---

## 📚 Learning Outcomes

* React component architecture
* State-based audio control
* UI/UX design for media apps
* Browser audio streaming concepts
* Modular frontend development

---
