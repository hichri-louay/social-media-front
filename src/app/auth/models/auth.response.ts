export interface SigninResponse {
    success: boolean,
    message: string,
    data: {
        user : User,
        token: string
    }
}




interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string
}