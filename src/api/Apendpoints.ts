export const Endpoints = {
  UserSignup: "/api/signup",
  Userlogin: "/api/login",
  Userprofile: (userid: string) => `/api/userprofile/${userid}`,
  Scheduledonation: "/api/schedulenewdonations",
  Donorhistory: (email: string) => `/api/donordonationhistory/${email}`,
  UpdateInfo: (userid: string) => `/api/updatepersonalinformation/${userid}`,
  Totaldonordonation: "/api/totaldonationinfo",
  Requestblood: "/api/bloodrequest",
  Bloodrequesthistory: (email: string) =>
    `/api/getbloodrequesthistory/${email}`,
  Managebloodrquest: "/api/managebloodrequest",
  Deleterequestdata: "/api/deleteid",
  Editrequest: "/api/editid",
  Getusers: "/api/users",
  Changerole: "/api/changerole",
  Deleteuser: "/api/deleteuser",
  Userhistory: "/api/userhistory",
  Donationstats: "/api/donation-stats",
  DonationInfo: "/api/donation-info",
  Donordonationstats: "/api/donor-donation-stats",
  DeleteRequest: "/api/delete-request",
  Acceptrequest: "/api/accept",
  Rejectrequest: "/api/reject",
  Chat:'/api/chat',
  Receiptantoverview:"/api/receiptant_overview",
  Removeaccount:'/api/remove_account'
};
