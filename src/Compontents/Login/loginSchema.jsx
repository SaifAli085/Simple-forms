import * as Yup from 'yup'

export const loginSchema = Yup.object({
    
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).max(16).required("Password Should be atleast 8 characters"),

    
})