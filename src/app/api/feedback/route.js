import { NextResponse } from 'next/server';
import connectdb from '@/app/lib/connect';
import UserModel from '@/app/models/Users';

export async function POST(request) {
  try {
    // Connect to the database
    await connectdb();

   
    const { name, email, feedback } = await request.json();

    // Create a new user document
    const user = await UserModel.create({ name, email, feedback });

    // Return a success response
    return NextResponse.json({ message: 'Data received successfully', user }, { status: 200 });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: 'An error occurred', details: error.message }, { status: 500 });
  }
}
