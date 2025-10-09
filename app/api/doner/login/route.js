import { NextResponse } from 'next/server';

// Mock user database (same as register)
const mockUsers = [
  {
    id: 1,
    username: "testuser",
    email: "test@example.com",
    password: "password123", // In real app, this would be hashed
    nrc: "12/KaTa(N)123456",
    phone: "0912345678"
  }
];

// Simple JWT-like token generation (for demo purposes only)
function generateMockToken(user) {
  const payload = {
    userId: user.id,
    email: user.email,
    timestamp: Date.now()
  };
  
  // In real app, use proper JWT library
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

export async function POST(request) {
  try {
    const credentials = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const { username, password } = credentials;
    
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    // Find user
    const user = mockUsers.find(
      u => (u.username === username || u.email === username) && u.password === password
    );
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate token
    const token = generateMockToken(user);
    
    return NextResponse.json(
      { 
        token, // must return
        message: 'Login successful',
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}