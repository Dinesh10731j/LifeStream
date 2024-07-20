import { useParams } from 'react-router-dom';
import { UseViewHistory } from '../hooks/Useviewhistory';
import Bgbubble from '../Components/Bgbubble';
const Viewuserhistory = () => {
  const { id } = useParams();
  const { data, error, isLoading } = UseViewHistory(id || '');
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Bgbubble/>
    <section className='flex flex-col items-center justify-end'>
      <h1>This is a user profile</h1>

    </section>
    </div>
  );
};

export default Viewuserhistory;
