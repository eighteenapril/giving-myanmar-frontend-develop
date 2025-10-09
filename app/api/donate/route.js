import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Basic validation for required fields
    const requiredFields = ['donation_id', 'amount', 'payment_method'];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Missing required field: ${field}` 
          },
          { status: 400 }
        );
      }
    }

    // Validate amount
    if (typeof body.amount !== 'number' || body.amount <= 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Amount must be a positive number' 
        },
        { status: 400 }
      );
    }

    // Validate payment method
    const validMethods = ['visa', 'master', 'paypal'];
    if (!validMethods.includes(body.payment_method)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid payment method. Supported methods: visa, master, paypal' 
        },
        { status: 400 }
      );
    }

    // Generate mock successful response
    const mockDonation = {
      id: Math.floor(Math.random() * 10000) + 1000,
      donation_id: body.donation_id,
      amount: body.amount,
      message: body.message || '',
      payment_method: body.payment_method,
      transaction_id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      payment_status: 'completed',
      created_at: new Date().toISOString(),
      user: {
        name: body.name_on_card || 'Anonymous Donor',
        email: 'donor@example.com'
      }
    };

    // Return success response with mock data
    return NextResponse.json({
      success: true,
      message: 'Donation processed successfully',
      data: {
        donation_id: mockDonation.id,
        transaction_id: mockDonation.transaction_id,
        amount: mockDonation.amount,
        payment_method: mockDonation.payment_method,
        payment_status: mockDonation.payment_status,
        message: mockDonation.message,
        donor_name: mockDonation.user.name,
        created_at: mockDonation.created_at
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Donation processing error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Method not allowed. This endpoint only supports POST requests.' 
    },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Method not allowed. This endpoint only supports POST requests.' 
    },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { 
      success: false, 
      error: 'Method not allowed. This endpoint only supports POST requests.' 
    },
    { status: 405 }
  );
}
