import mongoose from "mongoose";

const NewsletterSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Newsletter || mongoose.model("Newsletter", NewsletterSchema);
