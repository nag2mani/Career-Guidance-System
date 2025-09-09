# Career Guidance Backend (Django)

This is the backend for the Career Guidance System, built with Django.

## Prerequisites
- Python 3.10+
- pip
- (Recommended) Virtual environment tool: `venv` or `virtualenv`

## Setup Instructions

### 1. Clone the Repository
```
git clone <repo-url>
cd Career-Guidance-System/career_guidance_backend
```

### 2. Create and Activate Virtual Environment
```
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```
pip install -r requirements.txt
```

### 4. Set Up Environment Variables
- Copy `.env.example` to `.env` and update values as needed (if applicable).

### 5. Apply Migrations
```
python manage.py migrate
```

### 6. Create Superuser (Optional, for admin access)
```
python manage.py createsuperuser
```

### 7. Run the Development Server
```
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000/`

## Project Structure
- `authentication/` - User authentication app
- `career/` - Career-related models and APIs
- `career_guidance_backend/` - Project settings and configuration

## Useful Commands
- Run tests:
  ```
  python manage.py test
  ```
- Collect static files (if needed):
  ```
  python manage.py collectstatic
  ```

## API Endpoints
See the code in `authentication/urls.py` and `career/urls.py` for available endpoints.

## Troubleshooting
- If you encounter issues, ensure your Python version matches the requirements.
- Check that all dependencies are installed.
- For database issues, delete `db.sqlite3` and re-run migrations.

---
For more details, see the source code and comments in each app.
