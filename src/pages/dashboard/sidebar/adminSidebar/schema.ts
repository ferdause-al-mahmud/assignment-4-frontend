import { z } from "zod";

export const categories = [
    { value: "Mountain", label: "Mountain" },
    { value: "Road", label: "Road" },
    { value: "Sport", label: "Sport" },
    { value: "Electric", label: "Electric" },
    { value: "Superbike", label: "Superbike" },
];

export const bikeSchema = z.object({
    brand: z.string().min(1, { message: "Brand is required" }),
    model: z.string().min(1, { message: "Model is required" }),
    year: z
        .number()
        .min(1817, { message: "Year must be 1817 or later" }) // First bicycle was made in 1817
        .max(new Date().getFullYear(), { message: "Year cannot be in the future" }),
    price: z.number().min(1, { message: "Price must be a positive number" }),
    image: z.unknown().optional(),

    category: z.enum(["Mountain", "Road", "Sport", "Electric", "Superbike"], {
        message: "Invalid category",
    }),
    description: z.string().min(1, { message: "Description is required" }),
    quantity: z
        .number()
        .min(1, { message: "Quantity must be at least 1" }),

});

export const changePasswordSchema = z.object({
    password: z.string().min(1, { message: "Current Password is required" }),
    newPassword: z.string().min(1, { message: "New Password is required" }),
});
