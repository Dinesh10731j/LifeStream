export const Endpoints = {
    UserSignup: "/api/signup",
    Userlogin: "/api/login",
    Userprofile: (userid:string) => `/api/userprofile/${userid}` // Function to create the endpoint with user ID
};

