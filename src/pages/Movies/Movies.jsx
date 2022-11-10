import { useSearchParams } from 'react-router-dom';
import { FindForm } from 'components/Form/Form';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const filmName = searchParams.get('name') ?? '';
  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <>
      <h2>Find movies</h2>
      <FindForm handleChange={updateQueryString} />
    </>
  );
};
export default Movies;
