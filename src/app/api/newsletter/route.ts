import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Newsletter from "@/models/Newsletter";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        await connectDB();

        const existingSubscriber = await Newsletter.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
        }

        await Newsletter.create({ email });

        return NextResponse.json({ message: "Subscribed successfully!" }, { status: 201 });
    } catch (error: any) {
        if (error.code === 11000) {
            return NextResponse.json({ message: "You are already subscribed!" }, { status: 200 });
        }
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
