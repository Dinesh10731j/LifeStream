import { LucideView, Calendar, Upload, User, HandHelping, Store, Search } from "lucide-react";

export const donorNavLinks = [
  { title: 'View Donation History', href: '/viewdonationhistory', icon: LucideView },
  { title: 'Schedule New Donations', href: '/schedule', icon: Calendar },
  { title: 'Update Personal Information', href: '/updateinfo', icon: User },
];

export const adminNavLinks = [
  { title: 'Manage Users', href: '/manageusers', icon: User },
  { title: 'Approve/Decline Blood Requests', href: '/approverequests', icon: HandHelping },
  { title: 'Manage Blood Inventory', href: '/manageinventory', icon: Store },
];

export const recipientNavLinks = [
  { title: 'Search for Donors/Blood Banks', href: '/search', icon: Search },
  { title: 'Request Blood', href: '/requestblood', icon: Upload },
  { title: 'View Request History', href: '/viewrequesthistory', icon: LucideView },
];
