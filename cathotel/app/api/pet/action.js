'use server'
import Pet from "@/models/Pet"
import db from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const addData = async(FormData) => {
    const {code, name, user, breed, gender, color, age, create_at} = 
    Object.fromEntries(FormData);
    try {
        db.connect()
        const newPet = new Pet({
            code, name, user, breed, gender, color, age, create_at
        })
        await newPet.save()
    } catch (error) {
        throw new Error("Failed to Create Data" + error)
    }
    // revalidatePath("/")
    // redirect("/")
}
