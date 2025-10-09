import { NextResponse } from 'next/server';

// Mock user profile data
const mockUserProfile = {
  id: 1,
  username: "John Doe",
  email: "john.doe@example.com",
  nrc: "12/KaTa(N)123456",
  phone: "09123456789",
  address: "123 Main Street, Yangon, Myanmar",
  joined_date: "2023-01-15",
  total_donations: 5,
  total_amount_donated: 350,
  events_joined: 2
};

export async function GET() {
  try {
    // Simulate authentication check
    // In a real app, you would verify the JWT token here
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return NextResponse.json(mockUserProfile);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 }
    );
  }
}