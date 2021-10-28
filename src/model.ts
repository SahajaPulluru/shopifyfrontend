export interface User {
    username : string,
    email : string,
    country : string,
    password : string
}

export interface LoginUser {
    username : string,
    password : string
}

export interface LoginResponce {
    message : string,
    token : string
}