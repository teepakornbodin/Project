import { NextRequest, NextResponse } from "next/server";
import Booking from "../../../../models/booking";
import { connectToDB } from "../../../../utils/database"

export const GET = async (request, { params }) => {
    try {
        const roomType = params.type.toUpperCase();
        await connectToDB();

        const response = await Booking.find({
            room_type: roomType //["DELUXE", "PREMIUM", "VIP"]
        })


        if (!response) {
            return new Response(JSON.stringify({ error: "Booking Data Not found" }), {
                status: 403,
            });
        }

        return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
};
