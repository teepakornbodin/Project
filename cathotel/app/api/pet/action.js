'use server'
import Pet from "../../../models/pet"

export const addData = async (FormData) => {
    const { code, name, user, breed, gender, color, age, create_at, check_out, health, food, excretion } =
        Object.fromEntries(FormData);
    try {
        const newPet = new Pet({
            code, name, user, breed, gender, color, age, create_at, check_out, health, food: "NOT EATEN", excretion
        })
        await newPet.save()
    } catch (error) {
        throw new Error("Failed to Create Data" + error)
    }
}