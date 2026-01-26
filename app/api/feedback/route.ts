import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            name, email, phone,
            designRating, feels, designComments,
            products, productComments,
            navRating, pages, navComments,
            device, mobileRating, mobileComments,
            contact, contactComments,
            overall, priority, suggestions
        } = body;

        // Basic validation
        if (!name || !email) {
            return NextResponse.json(
                { message: "Name and email are required." },
                { status: 400 }
            );
        }

        // Format the private key correctly for Google Auth
        let privateKey = process.env.GOOGLE_PRIVATE_KEY || "";

        // 1. Trim whitespace and newlines from ends
        privateKey = privateKey.trim();

        // 2. Remove surrounding double quotes if present (common Vercel issue)
        if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
            privateKey = privateKey.substring(1, privateKey.length - 1);
        }

        // 3. Convert literal "\n" strings to actual newline characters
        privateKey = privateKey.replace(/\\n/g, "\n");

        if (!privateKey.includes("BEGIN PRIVATE KEY")) {
            return NextResponse.json(
                { message: "Invalid Private Key format. It should start with '-----BEGIN PRIVATE KEY-----'." },
                { status: 500 }
            );
        }

        // Prepare Google Auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: privateKey,
                project_id: process.env.GOOGLE_PROJECT_ID,
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Append to Google Sheet
        const spreadsheetId = process.env.GOOGLE_SHEET_ID;
        const range = "A:T"; // Targets the first sheet (A to T)

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [
                    [
                        new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }), // Timestamp
                        name,
                        email,
                        phone || "N/A",
                        designRating || "N/A",
                        feels || "N/A",
                        designComments || "N/A",
                        Array.isArray(products) ? products.join(", ") : "None",
                        productComments || "N/A",
                        navRating || "N/A",
                        pages || "N/A",
                        navComments || "N/A",
                        device || "N/A",
                        mobileRating || "N/A",
                        mobileComments || "N/A",
                        contact || "N/A",
                        contactComments || "N/A",
                        overall || "N/A",
                        priority || "N/A",
                        suggestions || "N/A"
                    ],
                ],
            },
        });

        return NextResponse.json(
            { message: "Feedback submitted successfully!", data: response.data },
            { status: 200 }
        );
    } catch (error: any) {
        // Safer logging to avoid circular reference crashes in JSON.stringify
        const errorDetail = error.response?.data || error.errors || error.message;
        console.error("Google Sheets API Error Details:", errorDetail);

        if (error.stack) {
            console.error("Stack Trace:", error.stack);
        }

        return NextResponse.json(
            {
                message: "Feedback submission failed.",
                error: error.message
            },
            { status: 500 }
        );
    }
}
