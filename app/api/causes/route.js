import { NextResponse } from 'next/server';

// Mock data for causes
const mockCauses = [
  {
    id: 1,
    name: "Children Cancer Help Fund",
    sub_title: "Supporting young cancer patients",
    description: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut",
    img: "/assets/images/donate/donate-2-1.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  {
    id: 2,
    name: "Clean Water Initiative",
    sub_title: "Providing clean water access",
    description: "Help us bring clean water to communities in need across Myanmar",
    img: "/assets/images/donate/donate-2-2.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  {
    id: 3,
    name: "Education for All",
    sub_title: "Building schools and futures",
    description: "Supporting education infrastructure and resources for underprivileged children",
    img: "/assets/images/donate/donate-2-1.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  {
    id: 4,
    name: "Emergency Relief Fund",
    sub_title: "Disaster response and aid",
    description: "Providing immediate relief during natural disasters and emergencies",
    img: "/assets/images/donate/donate-2-1.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  },
  {
    id: 5,
    name: "Healthcare Support",
    sub_title: "Medical care for everyone",
    description: "Improving healthcare access and medical facilities in rural areas",
    img: "/assets/images/donate/donate-2-1.jpg",
    banner_img: "/assets/images/slider/slider-v5-img-1.jpg"
  }
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(mockCauses, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch causes' },
      { status: 500 }
    );
  }
}