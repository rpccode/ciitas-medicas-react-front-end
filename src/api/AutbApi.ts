
import api from "@/libs/axios";
import { AuthFormData } from "@/modules/types/AuthTypes";
// import { Project, ProjectFormData } from "@/modules/types";

async function CreateCompany(params:AuthFormData) {
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzY4MDJmODBjZDE1MTExM2M0Y2YzNyIsImVtYWlsIjoidHVydm8yMDBAZ21haWwuY29tIiwiaWF0IjoxNzE1MDQ2Mjg5LCJleHAiOjE3MTUwNTM0ODl9.BDnATQ4h67nf8j8AYu1-3ewRSTke8pluhbwzmEoAo74'; 
    try {
        const { data } = await api.post('/project',params)
        return data
    } catch (error) {
        console.log(error)
    }
}










export {
    CreateCompany
}
