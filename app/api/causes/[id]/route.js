import { NextResponse } from 'next/server';

// Mock data for individual cause details
const mockCausesDetails = {
  1: {
    id: 1,
    name: "Children Cancer Help",
    sub_title: "Supporting young cancer patients",
    description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut. This comprehensive program provides medical support, emotional care, and financial assistance to children battling cancer.",
    img: "/assets/images/donate/donate-2-1.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg",
    total_raised: 15420,
    goal: 25000,
    donors_count: 127,
    days_left: 45
  },
  2: {
    id: 2,
    name: "Clean Water Initiative",
    sub_title: "Providing clean water access",
    description: "Help us bring clean water to communities in need across Myanmar. Our initiative focuses on building wells, water purification systems, and educating communities about water safety.",
    img: "/assets/images/donate/donate-2-2.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg",
    total_raised: 8750,
    goal: 18000,
    donors_count: 89,
    days_left: 30
  },
  3: {
    id: 3,
    name: "Education for All",
    sub_title: "Building schools and futures",
    description: "Supporting education infrastructure and resources for underprivileged children. We build schools, provide learning materials, and train teachers to ensure quality education.",
    img: "/assets/images/donate/donate-2-3.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg",
    total_raised: 12300,
    goal: 20000,
    donors_count: 156,
    days_left: 60
  },
  4: {
    id: 4,
    name: "Emergency Relief Fund",
    sub_title: "Disaster response and aid",
    description: "Providing immediate relief during natural disasters and emergencies. Our rapid response team delivers food, shelter, and medical aid to affected communities.",
    img: "/assets/images/donate/donate-2-4.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg",
    total_raised: 22100,
    goal: 35000,
    donors_count: 203,
    days_left: 15
  },
  5: {
    id: 5,
    name: "Healthcare Support",
    sub_title: "Medical care for everyone",
    description: "Improving healthcare access and medical facilities in rural areas. We establish clinics, provide medical equipment, and train healthcare workers.",
    img: "/assets/images/donate/donate-2-5.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg",
    total_raised: 9890,
    goal: 15000,
    donors_count: 98,
    days_left: 25
  }
};

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const cause = mockCausesDetails[parseInt(id)];
    
    if (!cause) {
      return NextResponse.json(
        { error: 'Cause not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(cause, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch cause details' },
      { status: 500 }
    );
  }
}