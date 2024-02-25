import { NextRequest, NextResponse } from "next/server";
import Booking from "../../../../models/booking";
import { connectToDB } from "../../../../utils/database"

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const getDeluxe = await Booking.find({
            room_type: "STANDARD"
        });

        const getPremium = await Booking.find({
            room_type: "PREMIUM"
        });

        const getVIP = await Booking.find({
            room_type: "VIP"
        });


        if (!getDeluxe && !getPremium && !getVIP) {
            return new Response(JSON.stringify({ error: "Booking Data Not found" }), {
                status: 403,
            });
        }

        return new Response(JSON.stringify({ "STANDARD": getDeluxe.length, "premium": getPremium.length, "vip": getVIP.length }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
};
