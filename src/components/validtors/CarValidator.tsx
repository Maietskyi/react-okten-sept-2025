import * as Joi from "joi";

export const carValidator =Joi.object({
    brand: Joi.string().pattern(/^[A-Za-z0-9]+$/)
        .messages({'string.pattern.base':'Your brand value didnt match pattern'}),
    price: Joi.number().min,
    year: Joi.number(),
})