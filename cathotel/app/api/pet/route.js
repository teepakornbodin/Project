import { nanoid } from "nanoid";
import Pet from "../../../models/Pet";
import { connectToDB } from "../../../utils/database"
//ส่งข้อมูล
export const GET = async (request) => {
    try {
        const searchParams = new URL(request.url).searchParams;
        await connectToDB();

        if (searchParams.get("id")) {
            const petId = searchParams.get("id");
            const response = await Pet.findOne({ code: petId });

            if (response) {
                return new Response(
                    JSON.stringify({ "status": "success", "data": response }),
                    { status: 200 }
                );
            } else {
                return new Response(JSON.stringify({ "status": "error", "message": "ไม่พบรหัสสัตว์เลี้ยงของท่าน!" }), {
                    status: 500,
                });
            }


        }
        else {
            const response = await Pet.find({});
            if (response) {
                return new Response(
                    JSON.stringify({ "status": "success", "data": response }),
                    { status: 200 }
                );
            } else {
                return new Response(JSON.stringify({ "status": "error", "message": "ไม่พบรหัสสัตว์เลี้ยงของท่าน!" }), {
                    status: 500,
                });
            }
        }


    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}

//เช็คข้อมูล
export const POST = async (request, response) => {
    try {
        const req = await request.json();
        await connectToDB();
        console.log("req", req)
        const response = await Pet.create({
            code: req.code,
            name: req.name,
            user: req.user || null,
            breed: req.breed,
            gender: req.gender,
            color: req.color,
            age: req.age
        })

        if (response) {
            return new Response(
                JSON.stringify({ "status": "success", "message": "Add new pet successfully" }),
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