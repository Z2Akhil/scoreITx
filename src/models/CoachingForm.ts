import mongoose from "mongoose";

const CoachingFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    instituteName: {
        type: String,
        required: [true, "Please provide the coaching institute name"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
    message: {
        type: String,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.CoachingForm || mongoose.model("CoachingForm", CoachingFormSchema);
