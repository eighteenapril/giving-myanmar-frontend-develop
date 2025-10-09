import { NextResponse } from 'next/server';

// Mock data for donations
const mockDonations = [
	{
		id: 1,
		cause_id: 1,
		name: "Children Cancer Help",
		sub_title: "Supporting young cancer patients",
		img: "/assets/images/donate/donate-2-1.jpg",
		raised: "232",
		goal: "34000",
		description:
			"Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut. This comprehensive program provides medical support, emotional care, and financial assistance to children battling cancer.",
		cause_name: "Children Cancer Help Fund",
		donors_count: 127,
	},
	{
		id: 2,
		cause_id: 1,
		name: "Clean Water Initiative",
		sub_title: "Providing clean water access",
		img: "/assets/images/donate/donate-2-2.jpg",
		raised: "5564",
		goal: "7700",
		description:
			"Help us bring clean water to communities in need across Myanmar. Our initiative focuses on building wells, water purification systems, and educating communities about water safety.",
		cause_name: "Clean Water Initiative",
		donors_count: 89,
	},
	{
		id: 3,
		cause_id: 1,
		name: "Education for All",
		sub_title: "Building schools and futures",
		img: "/assets/images/donate/donate-2-3.jpg",
		raised: "200",
		goal: "800",
		description:
			"Supporting education infrastructure and resources for underprivileged children. We build schools, provide learning materials, and train teachers to ensure quality education.",
		cause_name: "Education for All",
		donors_count: 156,
	},
	{
		id: 4,
		cause_id: 1,
		name: "Children Cancer Help",
		sub_title: "Supporting young cancer patients",
		img: "/assets/images/donate/donate-2-1.jpg",
		raised: "232",
		goal: "34000",
		description:
			"Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit asuraut. This comprehensive program provides medical support, emotional care, and financial assistance to children battling cancer.",
		cause_name: "Children Cancer Help",
		donors_count: 127,
	},
	{
		id: 5,
		cause_id: 1,
		name: "Clean Water Initiative",
		sub_title: "Providing clean water access",
		img: "/assets/images/donate/donate-2-2.jpg",
		raised: "5564",
		goal: "7700",
		description:
			"Help us bring clean water to communities in need across Myanmar. Our initiative focuses on building wells, water purification systems, and educating communities about water safety.",
		cause_name: "Clean Water Initiative",
		donors_count: 89,
	},
	{
		id: 66,
		cause_id: 1,
		name: "Education for All",
		sub_title: "Building schools and futures",
		img: "/assets/images/donate/donate-2-3.jpg",
		raised: "200",
		goal: "800",
		description:
			"Supporting education infrastructure and resources for underprivileged children. We build schools, provide learning materials, and train teachers to ensure quality education.",
		cause_name: "Education for All",
		donors_count: 156,
	},
];

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    return NextResponse.json(mockDonations, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch donations' },
      { status: 500 }
    );
  }
}