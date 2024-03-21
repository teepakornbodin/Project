import Booking from "../../../../../models/booking"
import { connectToDB } from "../../../../../utils/database"

export const GET = async (request, { params }) => {
    try {
        const id = params.id;
        await connectToDB();

        const response = await Booking.findOne({
            _id: id
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
