export interface SigninDto {
    email: string;
    password: string;
}


export interface SignupDto {
    firstName: string,
    lastName: string,
    email: string;
    password: string;
    confirmPassword: string;
}