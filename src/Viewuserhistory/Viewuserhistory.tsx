import { useParams } from 'react-router-dom';
import { UseViewHistory } from '../hooks/Useviewhistory';
const Viewuserhistory = () => {
  const { id } = useParams();
  const { data, error, isLoading } = UseViewHistory(id || '');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User History for ID: {id}</h1>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Viewuserhistory;
