
import { connectToDB } from "../../../utils/database"
import Booking from "../../../models/booking";

export const POST = async (request, response) => {
    try {
        const req = await request.json();
        await connectToDB();
        console.log("req", req)

        const response = await Booking.create({
            name: req.name,
            start_date: req.start_date,
            end_date: req.end_date,
            guest: req.guest,
        })

        if (response) {
            return new Response(
                JSON.stringify(response),
                { status: 200 }
            );
        } else {
            return new Response(JSON.stringify({ "status": "error", "message": "Add new pet Failed!" }), {
                status: 500,
            });
        }


    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}