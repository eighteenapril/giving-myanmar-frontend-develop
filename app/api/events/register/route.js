import { NextResponse } from 'next/server';

// Mock event registrations storage
let mockRegistrations = [];
let nextRegistrationId = 1;

export async function POST(request) {
  try {
    const registrationData = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 700));
    
    const { event_id, full_name, email, phone, participants } = registrationData;
    
    // Validate required fields
    if (!event_id || !full_name || !email || !phone || !participants) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate participants count
    if (participants < 1 || participants > 10) {
      return NextResponse.json(
        { error: 'Participants must be between 1 and 10' },
        { status: 400 }
      );
    }
    
    // Create registration
    const newRegistration = {
      id: nextRegistrationId++,
      event_id: parseInt(event_id),
      full_name,
      email,
      phone,
      participants: parseInt(participants),
      registration_date: new Date().toISOString(),
      status: 'confirmed'
    };
    
    mockRegistrations.push(newRegistration);
    
    return NextResponse.json(
      { 
        message: 'Registration successful',
        registration: newRegistration
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