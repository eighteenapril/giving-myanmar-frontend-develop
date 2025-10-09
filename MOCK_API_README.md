# Mock API Documentation

This document explains how to use the mock API endpoints for the Giving Myanmar project.

## Overview

The mock API is built using Next.js API routes and provides all the endpoints specified in the `api_spec.md` file. This allows you to develop and test the frontend without needing a real backend.

## Setup

1. Make sure your `.env.local` file has:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

2. Start your Next.js development server:
   ```bash
   npm run dev
   ```

3. Your mock API will be available at `http://localhost:3000/api`

## Available Endpoints

### 1. Causes API
- `GET /api/causes` - Get all causes
- `GET /api/causes/[id]` - Get cause details

### 2. Donations API
- `GET /api/donations` - Get all donations
- `GET /api/donations/[id]` - Get donation details

### 3. User Authentication
- `POST /api/doner/register` - Register new user
- `POST /api/doner/login` - Login user

### 4. Events API
- `GET /api/events` - Get all events
- `POST /api/events/register` - Register for event

## Test Data

### Test User Account
- **Username**: `testuser`
- **Password**: `password123`
- **Email**: `test@example.com`

### Sample API Calls

#### Get All Causes
```javascript
const response = await fetch('http://localhost:3000/api/causes');
const causes = await response.json();
```

#### Login
```javascript
const response = await fetch('http://localhost:3000/api/doner/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'testuser',
    password: 'password123'
  })
});
const result = await response.json();
```

#### Register New User
```javascript
const response = await fetch('http://localhost:3000/api/doner/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'newuser',
    email: 'newuser@example.com',
    password: 'password123',
    confirmPassword: 'password123',
    nrc: '12/KaTa(N)654321',
    phone: '0987654321'
  })
});
const result = await response.json();
```

## Features

### Realistic Delays
All endpoints include simulated network delays (300-800ms) to mimic real API behavior.

### Error Handling
The mock API includes proper error responses:
- 400 Bad Request (missing fields, validation errors)
- 401 Unauthorized (invalid credentials)
- 404 Not Found (resource doesn't exist)
- 409 Conflict (user already exists)
- 500 Internal Server Error

### Data Persistence
- User registrations are stored in memory during the development session
- Event registrations are tracked
- Data resets when you restart the development server

## Using with Your Services

Your existing service functions in `/services/apiServices.js` will work automatically with this mock API. No changes needed!

```javascript
import { getCausesServices, loginUserServices } from '@/services/apiServices';

// These will now hit your mock API
const causes = await getCausesServices();
const loginResult = await loginUserServices({ username: 'testuser', password: 'password123' });
```

## Moving to Production

When you're ready to use a real backend:

1. Update `NEXT_PUBLIC_API_URL` in `.env.local`
2. Remove the `/app/api` folder
3. Your service functions will automatically use the new API URL

## Alternative Mock API Tools

If you prefer other mock API tools, here are some options:

### 1. JSON Server
```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

### 2. MSW (Mock Service Worker)
```bash
npm install msw --save-dev
```

### 3. Postman Mock Server
Create a mock server in Postman and use the generated URL.

### 4. MockAPI.io
Online service for creating mock APIs.

## Tips

1. **Development**: Use the built-in Next.js mock API (current setup)
2. **Testing**: Consider MSW for more sophisticated mocking
3. **Prototyping**: JSON Server for quick external mock APIs
4. **Team Collaboration**: Postman Mock Server for shared mocking

The current Next.js implementation is perfect for your project as it keeps everything in one codebase and provides realistic API behavior!