# Giving Myanmar - API Specification

## Application Overview

This is a Next.js charity platform for Myanmar with the following key features:
- **Frontend Framework**: React with Next.js (Server-side rendering)
- **Benefits**: SEO optimization, enhanced performance, security, and scalability

## Application Structure

### Page Hierarchy

```
→ Home Page
   → Causes List (5 max)
      → Cause Details Page 
         → Total fund raised for this cause
         → Detailed information about this cause
         → Donation list related to causes
   → Donation Lists (all donations - 3) (card - total fund raise/goal amount)
      → Donation Details Page
         → Detailed information about this donation 
         → Donation form (name, email, amount, message) 10, 20, 50, 100 or custom amount
   → Events List (all events)
      → Event Details Page  
         → Event registration form 
   → Profile
      → Login/Signup
      → User profile (name, email, phone, address)
      → Donation history (list of donations made by the user with date and amount)
```

---

## API Endpoints

secret_key:

### 1. Causes API

#### Get All Causes
- **Route**: `/api/causes`
- **Method**: `GET`
- **Description**: Retrieve list of all causes (maximum 5 for home page)

**Response:**
```json
[
  {
    "id": 1,
    "name": "Children Cancer Help Fund",
    "sub_title": "Subtitle of the cause",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "img": "assets/images/donate/donate-2-1.jpg",
    "banner_img": "assets/images/backgrounds/cause-details-banner.jpg"
  },
  {
    "id": 2,
    "name": "Children Cancer Help Fund",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "img": "assets/images/donate/donate-2-1.jpg"
  },
  {
    "id": 3,
    "name": "Children Cancer Help Fund",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "img": "assets/images/donate/donate-2-1.jpg"
  },
  {
    "id": 4,
    "name": "Children Cancer Help Fund",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "img": "assets/images/donate/donate-2-1.jpg"
  },
  {
    "id": 5,
    "name": "Children Cancer Help Fund",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "img": "assets/images/donate/donate-2-1.jpg"
  }
]
```

#### Get Cause Details
- **Route**: `/api/causes/:id`
- **Method**: `GET`
- **Description**: Retrieve detailed information about a specific cause

**Response:**
```json
{
  "id": 1,
  "name": "Children Cancer Help Fund",
  "sub_title": "Subtitle of the cause",
  "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
  "img": "assets/images/donate/donate-2-1.jpg",
  "banner_img": "assets/images/backgrounds/cause-details-banner.jpg"
}
```

---

### 2. Donations API

#### Get All Donations
- **Route**: `/api/donations`
- **Method**: `GET`
- **Description**: Retrieve list of all donations

**Response:**
```json
[
  {
    "id": 1,
    "cause_id": 1,
    "name": "Children Cancer Help Fund",
    "sub_title": "Subtitle of the cause",
    "img": "assets/images/donate/donate-2-1.jpg",
    "raised": "$5,090",
    "goal": "$9,090",
    "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    "cause_name": "Children Cancer Help Fund"
  }
]
```

#### Get Donation Details
- **Route**: `/api/donations/:id`
- **Method**: `GET`
- **Description**: Retrieve detailed information about a specific donation

**Response:**
```json
{
  "id": 1,
  "cause_id": 1,
  "name": "Children Cancer Help Fund",
  "sub_title": "Subtitle of the cause",
  "img": "assets/images/donate/donate-2-1.jpg",
  "raised": "$5,090",
  "goal": "$9,090",
  "description": "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
  "cause_name": "Children Cancer Help Fund"
}
```

---

### 3. User Authentication & Profile API

#### User Registration
- **Route**: `/api/doner/register`
- **Method**: `POST`
- **Description**: Register a new donor account

**Request Body:**
```json
{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "nrc": "12/KaTa(N)123456",
  "phone": "0912345678"
}
```

#### User Login
- **Route**: `/api/doner/login`
- **Method**: `POST`
- **Description**: Authenticate user and return access token

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "225rqwefasfa3w242fwasdfasdfasdfasdf"
}
```

**Authentication Flow:**
1. Login response contains JWT token (hashed with userid and user email)
2. Store token in localStorage
3. For logout: Clear token from localStorage
4. For private API calls: Attach token in Authorization header
5. Header format: `Authorization: Bearer <token>` 

#### Get User Profile
- **Route**: `/api/doner/detail`
- **Method**: `GET`
- **Authentication**: Required (Bearer Token)
- **Description**: Retrieve authenticated user's profile information

**Response:**
```json
{
  "id": 1,
  "username": "user1",
  "email": "user1@example.com",
  "nrc": "12/KaTa(N)123456",
  "phone": "0912345678"
}
```

#### Get User Donation History
- **Route**: `/api/doner/:id/donations`
- **Method**: `GET`
- **Authentication**: Required (Bearer Token)
- **Description**: Retrieve donation history for authenticated user

**Response:**
```json
[
  {
    "id": 1,
    "cause_name": "Children Cancer Help Fund",
    "amount": "$100",
    "date": "2023-10-01",
    "payment_method": "visa"
  },
  {
    "id": 2,
    "cause_name": "Clean Water & Health Food",
    "amount": "$50",
    "date": "2023-09-15",
    "payment_method": "master"
  }
]
```

---

### 4. Payment API

#### Create Donation Payment
- **Route**: `/api/donate`
- **Method**: `POST`
- **Authentication**: Required (Bearer Token)
- **Description**: Process donation payment

**Request Body:**
```json
{
  "donation_id": 1,
  "amount": 100,
  "message": "Keep up the good work!",
  "payment_method": "visa",
  "card_number": "4111111111111111",
  "expiry_date": "12/25",
  "cvv": "123",
  "name_on_card": "John Doe",
  "billing_address": "123 Main St, City, Country"
}
```

**Payment Methods:**
- `visa`
- `master`
- `paypal`

---

### 5. Events API

#### Get All Events
- **Route**: `/api/events`
- **Method**: `GET`
- **Description**: Retrieve list of all events

**Response:**
```json
[
  {
    "id": 1,
    "title": "Charity Run 2023",
    "date": "2023-11-15",
    "location": "Central Park, NYC",
    "description": "Join us for a charity run to raise funds for children's education.",
    "img": "assets/images/events/event-1.jpg",
    "max_participants": 100
  }
]
```

#### Get Event Details
- **Route**: `/api/events/:id`
- **Method**: `GET`
- **Description**: Retrieve detailed information about a specific event

**Response:**
```json
{
  "id": 1,
  "title": "Charity Run 2023",
  "date": "2023-11-15",
  "location": "Central Park, NYC",
  "description": "Join us for a charity run to raise funds for children's education.",
  "img": "assets/images/events/event-1.jpg",
  "max_participants": 100,
  "details": "The Charity Run 2023 is a 5K run/walk event to support children's education programs. All participants will receive a t-shirt and refreshments."
}
```

#### Event Registration
- **Route**: `/api/events/register`
- **Method**: `POST`
- **Description**: Register for an event

**Request Body:**
```json
{
  "event_id": 1,
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "0912345678",
  "participants": 2
}
```

---

## Technical Notes

### Donation Form Features
- **Preset amounts**: $10, $20, $50, $100
- **Custom amount**: User can enter any amount
- **Required fields**: Name, email, amount, message
- **Payment integration**: Support for Visa, MasterCard

### Authentication
- JWT token-based authentication for protected routes
- Token required for user profile, donation history, and making donations
- Public registration for events (no authentication required)

### Data Types
- **Rich text**: Description fields support rich text formatting
- **Images**: All image paths are relative to the public assets directory
- **Dates**: ISO 8601 format (YYYY-MM-DD)
- **Currency**: Number format as currency format and currency will be added in FE side