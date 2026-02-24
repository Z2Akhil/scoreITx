import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import CoachingForm from "@/models/CoachingForm";

export async function POST(req: Request) {
    try {
        const { name, email, instituteName, phone, message } = await req.json();

        if (!name || !email || !instituteName || !phone) {
            return NextResponse.json({ error: "Required fields are missing" }, { status: 400 });
        }

        await connectDB();

        const newForm = await CoachingForm.create({
            name,
            email,
            instituteName,
            phone,
            message,
        });

        return NextResponse.json({ message: "Form submitted successfully!", data: newForm }, { status: 201 });
    } catch (error: any) {
        console.error("Coaching Form Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
