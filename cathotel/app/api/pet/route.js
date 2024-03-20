import { nanoid } from "nanoid";
import Pet from "@/models/Pet";
import { connectToDB } from "../../../utils/database"

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
                return new Response(JSON.stringify({ "status": "error", "message": "Pet not found!" }), {
                    status: 404,
                });
            }
        } else {
            const response = await Pet.find({});
            if (response) {
                return new Response(
                    JSON.stringify({ "status": "success", "data": response }),
                    { status: 200 }
                );
            } else {
                return new Response(JSON.stringify({ "status": "error", "message": "No pets found!" }), {
                    status: 404,
                });
            }
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}

export const POST = async (request, response) => {
    try {
        const req = await request.json();
        await connectToDB();

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
                JSON.stringify({ "status": "success", "message": "Pet added successfully" }),
                { status: 201 }
            );
        } else {
            return new Response(JSON.stringify({ "status": "error", "message": "Failed to add pet" }), {
                status: 500,
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}