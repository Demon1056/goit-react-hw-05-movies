import { ErrorTitle } from './NotFound.styled';
const NotFound = () => {
  return (
    <ErrorTitle>
      <span>This page is not found</span>
      <br />
      <span>Error 404</span>
      <br />
      <span>Please go to the home page</span>
    </ErrorTitle>
  );
};
export default NotFound;
