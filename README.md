## 🐣 ChibiBuddy Reminder — Chrome Extension

A cute and interactive productivity buddy that reminds you of tasks at the right time — with pop-ups, sound, themes, and voice alerts! ✨

![image](https://github.com/user-attachments/assets/1771264e-e2fd-463a-94a9-d1e5dc0b07c7)


---

# Features

- 🔔 **Task Reminders** — Add tasks with custom time, get notified exactly when needed
- ⏱️ **Live Countdown** — See how many minutes are left for each task
- ✅ **Completed Tasks Log** — Track what you’ve completed and when
- 💤 **Snooze Tasks** — Push reminders forward by 5 minutes if you're busy
- 🎨 **Day/Night Theme Toggle** — Switch UI themes to match your vibe
- 🗣️ **Voice Alerts** — Hear your tasks spoken aloud using the Web Speech API
- 📄 **Export Tasks** — Download your tasks in JSON format for backup or reuse
- 🐥 **Chibi Mascot** — Feel good every time you open the extension!

---

# Folder Structure
    chibi-reminder-extension/
    ├── manifest.json
    ├── popup.html
    ├── popup.css
    ├── popup.js
    ├── background.js
    ├── icon.png
    ├── chibi.png
    ├── reminder.mp3 (optional)
    └── README.md

# How to Use

1. Clone or download this repo
2. Go to `chrome://extensions/` in your browser
3. Enable **Developer Mode**
4. Click **Load Unpacked** and select the `chibi-reminder-extension` folder
5. You’ll see the cute 🐣 icon appear next to your address bar
6. Click it → Add a task → Set a time → Done!

# Tech Used

- **HTML + CSS + JavaScript (Vanilla)**
- Chrome APIs: `alarms`, `storage`, `notifications`
- Web Speech API for voice reminders
- Blob + File API for JSON export

## 📄 Export Format

You can export your tasks with this button:
It will download your current and completed tasks as a `.json` file — portable and readable!

# Why ChibiBuddy?

Productivity shouldn't feel cold and robotic —  
ChibiBuddy brings a soft and joyful twist to managing your goals.

# Want to Contribute?

Feel free to fork, star, or open a PR!  
You can also reach out with ideas, bugs, or chibi mascots you want to see added. 🎀



Made with love by [Nandika S]

> Life is tough, but your reminders don’t have to be. 🌈
