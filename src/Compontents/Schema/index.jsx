import * as Yup from 'yup'

export const signupSchema = Yup.object({
    name: Yup.string().min(2).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).max(16).required("Password Should be atleast 8 characters"),
    phone: Yup.string().min(10).max(12).required("Please enter your phone number"),
    
})