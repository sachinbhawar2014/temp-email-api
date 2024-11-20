import express from "express";

const app = express();

// Dummy email data
const emails = [
    {
        id: 1,
        from: "sachin.bhawar@example.com",
        subject: "Meeting Reminder",
        body: "Don't forget about our meeting scheduled for tomorrow at 10:00 AM.",
        favourite: true,
        timestamp: "22/10/2024 3:07 pm",
    },
    {
        id: 2,
        from: "sanju.sangade@example.com",
        subject: "Invoice for services",
        body: "Dear Customer, please find the attached invoice for the services rendered.",
        favourite: false,
        timestamp: "03/11/2024 12:07 pm",
    },
    {
        id: 3,
        from: "info@newsletter.com",
        subject: "Your weekly newsletter",
        body: "Hello! Here is your weekly newsletter filled with updates and news.",
        favourite: false,
        timestamp: "20/10/2024 9:53 am",
    },
    {
        id: 4,
        from: "support@company.com",
        subject: "Support Ticket Update",
        body: "Your support ticket #12345 has been updated. Please log in to your account to view the details.",
        favourite: true,
        timestamp: "31/07/2024 4:00 pm",
    },
    {
        id: 5,
        from: "no-reply@socialmedia.com",
        subject: "You have a new follower!",
        body: "Great news! You have a new follower on your social media account. Check it out now!",
        favourite: false,
        timestamp: "15/09/2024 7:01 am",
    },
];

app.get("/api/get-emails", (req, res) => {
    res.json(emails);
});

export default app;
