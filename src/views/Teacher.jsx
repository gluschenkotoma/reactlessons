import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

import { Header } from '../components/Header';
import { useFetch } from '../hooks/useFetch';

function Teacher() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacher = useFetch(id);

  return (
    <>
      <Header size="h3" title={`${teacher.name} ${teacher.surname}`} />
      <p>ID: {teacher.id}</p>
      {teacher.description && <p>Описание: {teacher.description}</p>}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
export { Teacher };
