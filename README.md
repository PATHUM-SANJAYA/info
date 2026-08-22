<div align="center">

  # 🛡️ Pathum Sanjaya | Portfolio Website

  <p align="center">
    <b>Junior Cybersecurity and Network Support Professional</b>
  </p>

  <p align="center">
    <a href="https://pathum-sanjaya.github.io/info">
      <img src="https://img.shields.io/badge/Live_Demo-00EEFF?style=for-the-badge&logo=google-chrome&logoColor=000" alt="Live Demo" />
    </a>
    <a href="https://github.com/PATHUM-SANJAYA/info">
      <img src="https://img.shields.io/badge/Status-Active-00F260?style=for-the-badge&logo=git&logoColor=000" alt="Status" />
    </a>
    <a href="https://reactjs.org/">
      <img src="https://img.shields.io/badge/Built_With-React-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React" />
    </a>
  </p>

  ---

  <p align="center">
    A high-performance, responsive cybersecurity-themed portfolio web application engineered with React, custom SASS styling, canvas-based matrix rain/network node animations, and enterprise security focus.
  </p>

</div>

<br />

## 🌟 Key Highlights & Features

- **⚡ Cyber Animated Background**: Custom HTML5 Canvas matrix binary rain + dynamic floating network topology nodes (60 FPS smooth rendering).
- **🔒 Enterprise Security Focus**: Detailed showcase of hands-on tools including **SIEM, Nessus, PAM, CheckPoint Email Security, MDM, ISOC, CrowdStrike EDR, and DLP**.
- **📱 Fully Responsive Design**: Seamless layout adaptations across Desktop, Tablet, and Mobile viewports with touch-optimized controls.
- **🎨 Dark Mode Optimized**: Glassmorphism UI with neon accent gradients, glowing badges, and crisp typography.
- **🛡️ Hardened Security**: Environment variable isolated tracking keys (`.env.local`), masked contact endpoints, and `noopener/noreferrer` security headers.

---

## 🛠️ Tech Stack & Security Toolkit

### **Frontend Architecture**
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### **Security Platforms & Frameworks**
```
🛡️ SIEM (Security Information & Event Management)  |  🔍 Nessus Vulnerability Scanner
🔑 PAM (Privileged Access Management)                |  ✉️ CheckPoint Email Security
📱 MDM (Mobile Device Management)                    |  🛡️ ISOC & Incident Escalations
🎯 CrowdStrike EDR (Endpoint Detection)              |  💾 DLP (Data Loss Prevention)
🌐 Cisco Routing & Switching                         |  🐧 Linux & Windows Administration
```

---

## 📂 Project Directory Structure

```text
info-main/
├── public/
│   ├── favicon.png
│   ├── index.html            # Hardened HTML template with env GA injection
│   └── responsive-overrides.css
├── src/
│   ├── assets/               # SVGs, icons, and media assets
│   ├── components/           # Reusable UI components
│   │   ├── CircleButton/
│   │   ├── CyberBackground/  # Matrix rain & network nodes canvas component
│   │   ├── Menu/
│   │   └── FreePalestine/
│   ├── config/               # Single source of truth for portfolio content
│   │   ├── index.js          # Main content configuration
│   │   └── icons.js          # Material-UI icon registry
│   ├── sections/             # Page section layouts (Top, Custom, Footer)
│   ├── App.js                # Main React App entry
│   ├── index.js              # DOM Renderer
│   └── index.scss            # Core global design system & tokens
├── .env.local                # Local environment secrets (Git-ignored)
└── package.json
```

---

## 🚀 Local Development Setup

Follow these steps to run the portfolio locally:

### 1. **Clone the Repository**
```bash
git clone https://github.com/PATHUM-SANJAYA/info.git
cd info
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Configure Environment Variables**
Create a `.env.local` file in the root directory:
```env
REACT_APP_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
```

### 4. **Run Dev Server**
```bash
npm start
```
Open `http://localhost:3000` in your browser.

---

## 🌐 Deployment

To build for production:
```bash
npm run build
```

To deploy directly to **GitHub Pages**:
```bash
npm run deploy
```

---

## 📬 Contact & Social Links

- 💼 **LinkedIn**: [Pathum Sanjaya](https://www.linkedin.com/in/pathum-sanjaya-b86155367/)
- 💻 **GitHub**: [@PATHUM-SANJAYA](https://github.com/PATHUM-SANJAYA)
- 💬 **WhatsApp**: [Connect on WhatsApp](https://wa.me/94725510768)
- 📧 **Email**: [pathumsanjaya.info@gmail.com](mailto:pathumsanjaya.info@gmail.com)

---

<div align="center">
  <sub>Designed & Developed by <b>Pathum Sanjaya</b>. Built with React & Cybersecurity Passion.</sub>
</div>
