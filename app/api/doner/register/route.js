import { NextResponse } from 'next/server';

// Mock user database
let mockUsers = [
  {
    id: 1,
    username: "testuser",
    email: "test@example.com",
    password: "password123", // In real app, this would be hashed
    nrc: "12/KaTa(N)123456",
    phone: "0912345678"
  }
];

let nextUserId = 2;

export async function POST(request) {
  try {
    const userData = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Validate required fields
    const { username, email, password, confirmPassword, nrc, phone } = userData;
    
    if (!username || !email || !password || !confirmPassword || !nrc || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: 'Passwords do not match' },
        { status: 400 }
      );
    }
    
    // Check if user already exists
    const existingUser = mockUsers.find(
      user => user.username === username || user.email === email
    );
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this username or email already exists' },
        { status: 409 }
      );
    }
    
    // Create new user
    const newUser = {
      id: nextUserId++,
      username,
      email,
      password, // In real app, hash this
      nrc,
      phone
    };
    
    mockUsers.push(newUser);
    
    // Return success (don't send password back)
    const { password: _, ...userResponse } = newUser;
    
    return NextResponse.json(
      { 
        message: 'User registered successfully',
        user: userResponse
      },
      { status: 201 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}