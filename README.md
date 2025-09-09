
# Career Guidance System

This repository contains a full-stack Career Guidance System with a Django backend and a React frontend.

<img width="1462" height="827" alt="Screenshot 2025-09-09 at 11 14 56 PM" src="https://github.com/user-attachments/assets/3e34e6ca-b13a-4be6-86a1-35bc1c087221" />

---

## Backend: Django

### Location
`career_guidance_backend/`

### Prerequisites
- Python 3.10+
- pip
- (Recommended) Virtual environment tool: `venv` or `virtualenv`

### Setup & Run
1. **Navigate to backend folder:**
	```
	cd career_guidance_backend
	```
2. **Create and activate virtual environment:**
	```
	python3 -m venv venv
	source venv/bin/activate
	```
3. **Install dependencies:**
	```
	pip install -r requirements.txt
	```
4. **Set up environment variables:**
	- Copy `.env.example` to `.env` and update as needed (if applicable).
5. **Apply migrations:**
	```
	python manage.py migrate
	```
6. **Create superuser (optional):**
	```
	python manage.py createsuperuser
	```
7. **Run server:**
	```
	python manage.py runserver
	```
	The backend will be available at `http://127.0.0.1:8000/`

---

## Frontend: React

### Location
`career_guidance_frontend/`

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Setup & Run
1. **Navigate to frontend folder:**
	```
	cd career_guidance_frontend
	```
2. **Install dependencies:**
	```
	npm install
	```
3. **Start development server:**
	```
	npm start
	```
	The app will run at `http://localhost:3000/`

### Environment Variables
- To configure API endpoints, create a `.env` file in the frontend root:
  ```
  REACT_APP_API_URL=http://localhost:8000/api/
  ```

---

## Project Structure
- `career_guidance_backend/` - Django backend
- `career_guidance_frontend/` - React frontend

## Useful Commands
- **Run backend tests:**
  ```
  python manage.py test
  ```
- **Run frontend tests:**
  ```
  npm test
  ```
- **Build frontend for production:**
  ```
  npm run build
  ```

## Troubleshooting
- Ensure correct Python and Node.js versions.
- If you encounter dependency issues, delete `node_modules` (frontend) or recreate your virtual environment (backend).
- For database issues, delete `db.sqlite3` and re-run migrations.

---
For more details, see the individual READMEs in each folder and the source code.
