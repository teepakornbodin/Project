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
            age: req.age,
            create_at: req.create_at,
            check_out: req.check_out,
            health: req.health,
            food: req.food,
            excretion: req.excretion,
            update_time: req.update_time,
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

export const PUT = async (request) => {
    try {
        const searchParams = new URL(request.url).searchParams;
        await connectToDB();

        if (searchParams.get('id')) {
            const petId = searchParams.get('id');
            const req = await request.json();

            const updatedPet = await Pet.findOneAndUpdate(
                { code: petId },
                req,
                { new: true }
            );

            if (updatedPet) {
                return new Response(
                    JSON.stringify({ status: 'success', data: updatedPet }),
                    { status: 200 }
                );
            } else {
                return new Response(
                    JSON.stringify({ status: 'error', message: 'Pet not found!' }),
                    { status: 404 }
                );
            }
        } else {
            return new Response(
                JSON.stringify({ status: 'error', message: 'Pet ID is required!' }),
                { status: 400 }
            );
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
};


export const DELETE = async (request) => {
    try {
        const searchParams = new URL(request.url).searchParams;
        await connectToDB();

        if (searchParams.get('id')) {
            const petId = searchParams.get('id');

            const deletedPet = await Pet.findOneAndDelete({ code: petId });

            if (deletedPet) {
                return new Response(
                    JSON.stringify({ status: 'success', message: 'Pet deleted successfully' }),
                    { status: 200 }
                );
            } else {
                return new Response(
                    JSON.stringify({ status: 'error', message: 'Pet not found!' }),
                    { status: 404 }
                );
            }
        } else {
            return new Response(
                JSON.stringify({ status: 'error', message: 'Pet ID is required!' }),
                { status: 400 }
            );
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
};