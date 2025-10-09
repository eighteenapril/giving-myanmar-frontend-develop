import { NextResponse } from 'next/server';

// Mock data for donation details
const mockDonationDetails = {
  1: {
    id: 1,
    cause_id: 1,
    name: "Children Cancer Help Fund",
    sub_title: "Supporting young cancer patients",
    img: "/assets/images/donate/donate-2-1.jpg",
    raised: "$15,420",
    goal: "$25,000",
    description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut. This comprehensive program provides medical support, emotional care, and financial assistance to children battling cancer and their families. We work with leading hospitals and medical professionals to ensure the best possible care for young patients.",
    cause_name: "Children Cancer Help Fund",
    progress: 61.7,
    donors_count: 127,
    recent_donations: [
      { donor: "Anonymous", amount: "$100", date: "2023-10-01" },
      { donor: "John D.", amount: "$250", date: "2023-09-30" },
      { donor: "Sarah M.", amount: "$50", date: "2023-09-29" }
    ]
  },
  2: {
    id: 2,
    cause_id: 2,
    name: "Clean Water Initiative",
    sub_title: "Providing clean water access",
    img: "/assets/images/donate/donate-2-2.jpg",
    raised: "$8,750",
    goal: "$18,000",
    description: "Help us bring clean water to communities in need across Myanmar. Our initiative focuses on building wells, water purification systems, and educating communities about water safety. Every dollar donated directly contributes to providing clean, safe drinking water to families who need it most.",
    cause_name: "Clean Water Initiative",
    progress: 48.6,
    donors_count: 89,
    recent_donations: [
      { donor: "Mike R.", amount: "$200", date: "2023-10-01" },
      { donor: "Anonymous", amount: "$75", date: "2023-09-29" },
      { donor: "Lisa K.", amount: "$150", date: "2023-09-28" }
    ]
  },
  3: {
    id: 3,
    cause_id: 3,
    name: "Education for All",
    sub_title: "Building schools and futures",
    img: "/assets/images/donate/donate-2-3.jpg",
    raised: "$12,300",
    goal: "$20,000",
    description: "Supporting education infrastructure and resources for underprivileged children. We build schools, provide learning materials, and train teachers to ensure quality education. Education is the foundation of a better future, and your contribution helps break the cycle of poverty.",
    cause_name: "Education for All",
    progress: 61.5,
    donors_count: 156,
    recent_donations: [
      { donor: "David L.", amount: "$300", date: "2023-10-01" },
      { donor: "Emma S.", amount: "$125", date: "2023-09-30" },
      { donor: "Anonymous", amount: "$80", date: "2023-09-30" }
    ]
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