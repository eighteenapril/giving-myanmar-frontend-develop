import { NextResponse } from 'next/server';

// Mock user event history data
const mockUserEventHistory = {
  1: [
    {
      id: 1,
      title: "Charity Run 2023",
      date: "2023-11-15",
      location: "Central Park, NYC",
      description: "Join us for a charity run to raise funds for children's education.",
      img: "/assets/images/donate/donate-2-2.jpg",
      status: "completed",
      registration_date: "2023-10-01",
      participants: 2
    },
    {
      id: 2,
      title: "Healthcare Awareness Workshop",
      date: "2023-11-20",
      location: "Community Center, Yangon",
      description: "Learn about preventive healthcare and wellness practices.",
      img: "/assets/images/donate/donate-2-1.jpg",
      status: "upcoming",
      registration_date: "2023-10-15",
      participants: 1
    }
  ]
};

export async function GET(request, { params }) {
  try {
    const userId = parseInt(params.id);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Get user event history or return empty array if user not found
    const userEvents = mockUserEventHistory[userId] || [];
    
    return NextResponse.json(userEvents);
  } catch (error) {
    console.error('Error fetching user event history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user event history' },
      { status: 500 }
    );
  }
}