# 🏫 Greenfield Smart Academy – 3D Smart School Attendance Digital Twin

A comprehensive 3D Smart School BLE Beacon Indoor Location Tracking and Period-Based Attendance Simulation built using **Three.js, Vanilla JavaScript, and Modern CSS**.

## 🚀 Live Demo

### 👉 [Open Greenfield Smart Academy – Live 3D Simulation](https://ble-beacon-tracker.vercel.app/)

Explore the interactive 3D school campus, BLE beacon tracking, student attendance app, admin dashboard, and library monitoring system.

## 🌟 Key Features

### 1. 🏫 Realistic 3D Smart School Campus
- Interactive 3D school building with landscaped surroundings.
- Classrooms, library, reception, and computer lab.
- Realistic materials, lighting, shadows, and school signboards.
- Interactive camera controls and first-person walking mode.

### 2. 👨‍🎓 Student Avatars and Tracking
- 3D student avatars with uniforms and facial details.
- Student selection and camera focus.
- Movement visualization and indoor location tracking.
- Student profiles and classroom roster.

### 3. 📡 BLE Beacon Indoor Positioning
Nine dedicated simulated beacon zones:

| Location | Beacon ID |
|---|---|
| Class 10-A | BCN-10A |
| Class 10-B | BCN-10B |
| Class 10-C | BCN-10C |
| Class 9-A | BCN-9A |
| Class 9-B | BCN-9B |
| Class 9-C | BCN-9C |
| Central Library | BCN-LIB |
| Reception / Admin | BCN-REC |
| Computer Lab | BCN-LAB |

### 4. 📱 Student Attendance App
- Student selector for 120 student profiles.
- Digital student ID card.
- Simulated BLE signal strength and beacon telemetry.
- Period schedule and attendance status.
- Punch-in workflow with simulated biometric verification.

### 5. 📊 Admin Attendance Dashboard
- Student attendance statistics and KPI cards.
- Classroom-wise attendance monitoring.
- Student records with search and filters.
- CSV export functionality.
- Period countdown and session status.

### 6. 📚 Library Monitoring
- Dedicated library beacon monitoring.
- Occupancy statistics and signal telemetry.
- Student reading-session records.
- Unique library session identifiers.

### 7. ⏱️ Period-Based Attendance Simulation
- **Before 09:00 AM:** Attendance not started.
- **09:00 AM – 10:00 AM:** Attendance session active.
- **At or after 10:00 AM:** Session closed and unpunched students marked absent in the simulation.

Simulation controls include Start, Pause, Reset, speed adjustment, and time presets.

### 8. 🔐 Simulated Biometric Verification
- Interactive face-scanning modal.
- Facial landmark visualization.
- Simulated match confidence and confirmation.
- Duplicate attendance prevention for the same student and period.

*Note: BLE tracking, attendance, and biometric features are simulated for educational demonstration. They do not represent verified physical-device tracking or production biometric authentication.*

## 🛠️ Tech Stack

- **3D Engine:** Three.js
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Visualization:** 3D campus, beacon telemetry, movement trails
- **Testing:** Node.js acceptance and engine tests
- **Deployment:** Vercel

## 🚀 Run Locally

### Option 1: Browser

Open `index.html` in a modern browser. Some browser security restrictions may require a local HTTP server.

### Option 2: Node.js

```bash
npx http-server . -p 8080 -c-1
```

Open `http://localhost:8080/`.

### Option 3: Python

```bash
python -m http.server 8080
```

Open `http://localhost:8080/`.

## 🧪 Testing

Run the available test scripts from the project root:

```bash
node test_acceptance_criteria.js
node test_engine.js
node check_assets.js
```

These commands run the project's local checks. Test success depends on the current code and environment.

## 📁 Project Structure

```text
ble-beacon-tracker/
├── index.html
├── README.md
├── test_acceptance_criteria.js
├── test_engine.js
├── check_assets.js
├── css/
│   ├── school-style.css
│   ├── campus-style.css
│   └── style.css
└── js/
    ├── lib/
    │   ├── three.min.js
    │   └── OrbitControls.js
    ├── school-config.js
    ├── school-engine.js
    ├── school-scene.js
    ├── school-dashboard.js
    └── school-main.js
```

## 🎮 Navigation & Controls

- **Orbit Camera:** Click and drag to rotate; scroll to zoom.
- **Pan:** Right-click and drag.
- **Classroom Navigation:** Select a classroom or Library view.
- **Student Focus:** Select a student from the roster or 3D scene.
- **Walk Mode:** Press `F` to enter or exit first-person mode.
- **Movement:** Use `W`, `A`, `S`, `D` in walk mode.
- **Exit Walk Mode:** Press `Esc` or `F`.

## 🎯 Project Objective

To demonstrate how BLE beacon technology can be integrated with a 3D digital twin to visualize indoor positioning, student movement, period-based attendance, and smart campus operations.

## 👩‍💻 Developer

**Ranjini K.**

---

### 🌐 Try the Live Project

**[▶ Launch Greenfield Smart Academy – 3D BLE Attendance System](https://ble-beacon-tracker.vercel.app/)**
