import ReceipentSidenav from "../../sidenavlayout/RecipientSidenav";
import Bgbubble from "../../Components/Bgbubble";
import { UseReceipentrequesthistory } from "../../hooks/Usebloodrequesthistory";
const RequestHistory = () => {
  const ReceipientantRequesthistory = UseReceipentrequesthistory();

  console.log(ReceipientantRequesthistory?.data)
  return (
<>
<Bgbubble/>

<ReceipentSidenav userid={""}/>
<section>

 

</section>
</>
  )
}

export default RequestHistory