# Career Guidance Frontend (React)

This is the frontend for the Career Guidance System, built with React.

## Prerequisites
- Node.js (v16+ recommended)
- npm (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
```
git clone <repo-url>
cd Career-Guidance-System/career_guidance_frontend
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the Development Server
```
npm start
```

The app will run at `http://localhost:3000/` by default.

## Project Structure
- `public/` - Static files and HTML template
- `src/` - Source code
  - `components/Auth/` - Authentication components (Login, Register)
  - `pages/` - Main pages (Dashboard, CareerList, CareerDetail, etc.)
  - `services/` - API service for backend communication

## Environment Variables
- If you need to configure API endpoints, create a `.env` file in the root and add variables like:
  ```
  REACT_APP_API_URL=http://localhost:8000/api/
  ```

## Running Tests
```
npm test
```

## Building for Production
```
npm run build
```
The production build will be in the `build/` folder.

## Troubleshooting
- Ensure Node.js and npm are installed and up to date.
- Delete `node_modules` and run `npm install` again if you encounter dependency issues.

---
For more details, see the source code and comments in each component and page.
