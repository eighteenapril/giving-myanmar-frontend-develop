import { NextResponse } from 'next/server';

// Mock user donation history data
const mockUserDonationHistory = {
  1: [
    {
      id: 1,
      cause_name: "Children Cancer Help Fund",
      amount: "$100",
      date: "2023-10-01",
      payment_method: "visa"
    },
    {
      id: 2,
      cause_name: "Clean Water & Health Food",
      amount: "$50",
      date: "2023-09-15",
      payment_method: "master"
    },
    {
      id: 3,
      cause_name: "Education for Rural Children",
      amount: "$75",
      date: "2023-08-20",
      payment_method: "paypal"
    },
    {
      id: 4,
      cause_name: "Healthcare for Elderly",
      amount: "$25",
      date: "2023-07-10",
      payment_method: "visa"
    },
    {
      id: 5,
      cause_name: "Emergency Relief Fund",
      amount: "$100",
      date: "2023-06-05",
      payment_method: "master"
    }
  ]
};

export async function GET(request, { params }) {
  try {
    const userId = parseInt(params.id);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Get user donation history or return empty array if user not found
    const userDonations = mockUserDonationHistory[userId] || [];
    
    return NextResponse.json(userDonations);
  } catch (error) {
    console.error('Error fetching user donation history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user donation history' },
      { status: 500 }
    );
  }
}