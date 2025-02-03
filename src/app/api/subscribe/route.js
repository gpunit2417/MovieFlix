import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConn';
import Subscriber from '@/models/subscriber';

export async function POST(req, res) {
    try {
        await dbConnect(); // Connect to MongoDB

        const { email } = await req.json();
        if (!email) {
            return NextResponse.json({ success: false, message: "Email is required" }, { status: 400 });
        }

        // Check if the email is already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json({ success: false, message: "Email already subscribed" }, { status: 400 });
        }

        // Save new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        return NextResponse.json({ success: true, message: "Subscription successful!" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}