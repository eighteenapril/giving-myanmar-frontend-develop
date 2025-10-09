import { NextResponse } from 'next/server';

// Mock data for donation details
const mockDonationDetails = {
  1: {
    id: 1,
    title: "Charity Run 2023",
    date: "2023-11-15",
    location: "Central Park, NYC",
    description: "Join us for a charity run to raise funds for children's education.",
    img: "/assets/images/donate/donate-2-2.jpg",
    max_participants: 100,
    current_participants: 67,
    registration_fee: "$25",
    organizer: "Myanmar Education Foundation",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  2: {
    id: 2,
    title: "Healthcare Awareness Workshop",
    date: "2023-11-20",
    location: "Community Center, Yangon",
    description: "Learn about preventive healthcare and wellness practices.",
    img: "/assets/images/donate/donate-2-2.jpg",
    max_participants: 50,
    current_participants: 23,
    registration_fee: "Free",
    organizer: "Myanmar Health Initiative",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  3: {
    id: 3,
    title: "Clean Water Project Volunteer Day",
    date: "2023-11-25",
    location: "Rural Villages, Mandalay Region",
    description: "Help us install water purification systems in remote villages.",
    img: "/assets/images/donate/donate-2-2.jpg",
    max_participants: 30,
    current_participants: 18,
    registration_fee: "$10",
    organizer: "Clean Water Myanmar",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  }
};

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 350));
    
    const donation = mockDonationDetails[parseInt(id)];
    
    if (!donation) {
      return NextResponse.json(
        { error: 'Donation not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(donation, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch donation details' },
      { status: 500 }
    );
  }
}