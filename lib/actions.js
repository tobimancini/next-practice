'use server'

import { redirect } from "next/navigation";
import { deleteMealFromDB, saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
    return !text || text.trim() === "";
}

export const shareMeal = async (prevState, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (isInvalidText(meal.title)) {
        return { message: "Invalid title" };
    }
    if (isInvalidText(meal.summary)) {
        return { message: "Invalid summary" };
    }
    if (isInvalidText(meal.instructions)) {
        return { message: "Invalid instructions" };
    }
    if (isInvalidText(meal.creator)) {
        return { message: "Invalid name" };
    }
    if (isInvalidText(meal.creator_email)) {
        return { message: "Invalid email" };
    }
    if (!meal.creator_email.includes('@')) {
        return { message: "Invalid email format" };
    }
    if (!meal.image || meal.image.size === 0) {
        return { message: "Invalid or missing image" };
    }

    await saveMeal(meal);
    revalidatePath('/meals')
    redirect('/meals');
};