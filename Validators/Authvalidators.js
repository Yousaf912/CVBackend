const { z } = require('zod');

const SignupZodSchema = z.object({
    name: z.string({ required_error: 'Name is Required' })
    .trim()
    .min(3, { message: 'Name must be at least 3 char' })
    .max(100,{message:'Name must not be more than 100'}),
    email: z.string({ required_error: 'email is Required' })
    .trim()
    .email({message:"Invalid Email"}),
    password: z.string({ required_error: 'password is Required' })
    
    .min(7, { message: 'Password must be at least 7 char' })
    .max(12,{message:'Password must not be more than 12'}),
})

module.exports = SignupZodSchema