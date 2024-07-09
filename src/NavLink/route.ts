type SimpleRoute = {
    path: string;
    name: string;
  };
  
  type NestedRoute = {
    name: string;
    routes: { [key: string]: Route };
  };
  
  type Route = SimpleRoute | NestedRoute;
  
  const routes: { [key: string]: Route } = {
    auth: {
      name: "Auth",
      routes: {
        register: { path: "/register", name: "User Registration" },
        login: { path: "/login", name: "Login" },
        logout: { path: "/logout", name: "Logout" },
      },
    },
    dashboard: {
      name: "Dashboard",
      routes: {
        base: { path: "/dashboard", name: "User Dashboard" },
        donor: {
          name: "Donor Dashboard",
          routes: {
            base: { path: "/dashboard/donor", name: "Donor Dashboard" },
            viewHistory: { path: "/dashboard/donor/view-history", name: "View Donation History" },
            schedule: { path: "/dashboard/donor/schedule", name: "Schedule Donation" },
          },
        },
        recipient: {
          name: "Recipient Dashboard",
          routes: {
            base: { path: "/dashboard/recipient", name: "Recipient Dashboard" },
            searchBlood: { path: "/dashboard/recipient/search-blood", name: "Search Blood" },
            requestBlood: { path: "/dashboard/recipient/request-blood", name: "Request Blood" },
          },
        },
        admin: { path: "/dashboard/admin", name: "Admin Dashboard" },
      },
    },
    notifications: { path: "/notifications", name: "Notifications" },
  };
  
  export default routes;
  