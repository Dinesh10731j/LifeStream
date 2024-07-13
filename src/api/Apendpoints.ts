export const Endpoints = {
    UserSignup: "/api/signup",
    Userlogin: "/api/login",
    Userprofile: (userid:string) => `/api/userprofile/${userid}` ,
    Scheduledonation:"/api/schedulenewdonations",
    Donorhistory:(email:string)=>`/api/donordonationhistory/${email}`,
    UpdateInfo:(userid:string)=>`/api/updatepersonalinformation/${userid}`
};

