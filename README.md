🖼️ AI Background Remover

An AI-powered web application that removes image backgrounds instantly.
Built with React, Clerk Authentication, MongoDB, and the Clipdrop API, deployed seamlessly on Vercel.
🌐 Live Demo

Frontend (React App): https://ai-background-remover-vzbe.vercel.app/

Backend (Express API): https://ai-background-remover-mu.vercel.app/

🚀 Features

🔑 User Authentication – Secure login/signup with Clerk.

🖼️ Background Removal – Upload images and get clean cutouts.

💳 Credit System – Each user gets 5 free credits. One credit = one processed image.

📥 Download Images – Save processed images easily.

🗂️ MongoDB Integration – Stores user accounts & credit info.

⚡ Responsive Frontend – Modern React + Tailwind UI.

☁️ Deployed on Vercel – Backend and frontend hosted separately.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS, Clerk

Backend: Node.js, Express.js, MongoDB, Clipdrop API

Deployment: Vercel

⚙️ Installation & Local Setup
1. Clone the repo
git clone https://github.com/KushagraTiwari0/Ai-Background-Remover.git
cd Ai-Background-Remover

2. Setup Backend
cd server
npm install


Create a .env file in server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIPDROP_API_KEY=your_clipdrop_api_key
CLERK_API_KEY=your_clerk_api_key


Run locally:

npm run dev

3. Setup Frontend
cd client
npm install


Create .env.local in client/:

REACT_APP_CLERK_FRONTEND_API=your_clerk_frontend_api
REACT_APP_BACKEND_URL=http://localhost:5000


Run locally:

npm start

📸 Usage

Visit the frontend site
.

Sign in / sign up with Clerk.

Upload an image and remove the background.

Download the result (credits deducted automatically).

📂 Project Structure
Ai-Background-Remover/
│── client/        # React frontend
│── server/        # Express backend
│── models/        # MongoDB schemas
│── routes/        # API endpoints
│── config/        # DB + Clerk config
│── .env           # Environment variables
│── package.json

🔮 Future Roadmap

💳 Payment gateway for buying credits

👨‍💼 Admin panel for monitoring users & credits

📱 Mobile UI improvements

🖼️ Bulk image uploads

🤝 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to improve.

📜 License

This project is licensed under the MIT License.
