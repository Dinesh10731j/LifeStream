import Bgbubble from "../../Components/Bgbubble";
import AdminSidenav from "../../sidenavlayout/AdminSidenav";
import { UserCircle2, HeartPulseIcon } from "lucide-react";
import { Usedonationinfo } from "../../hooks/Usedonationinfo";

const Managebloodinventory = () => {
  const { data: donationinfo } = Usedonationinfo();

  console.log("This is a donationinfo", donationinfo);

  return (
    <>
      <AdminSidenav userid={""} />
      <Bgbubble />
      <section className="flex flex-col md:flex-row justify-center items-center gap-5">
        <section className="h-72 w-72 shadow-xl rounded-md flex flex-col items-center justify-center gap-4">
          <h1 className="font-sans md:text-3xl text-xl">Total Donors</h1>
          <span className="text-xl">{donationinfo?.totalDonors}</span>
          <UserCircle2 size={40} />
        </section>

        <section className="h-72 w-72 shadow-xl rounded-md flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">Total Blood Donation</h1>
          <span className="text-xl">{donationinfo?.totalDonations}</span>
          <HeartPulseIcon size={40} color="red" />
        </section>
      </section>
    </>
  );
};

export default Managebloodinventory;
