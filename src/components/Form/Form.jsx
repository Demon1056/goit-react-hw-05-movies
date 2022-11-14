import { Form, FormButton, FormInput } from './FormStyles';
import { Notify } from 'notiflix';
export const FindForm = ({ handleChange }) => {
  return (
    <>
      <Form
        onSubmit={e => {
          let value = e.target[0].value;
          e.preventDefault();
          handleChange(value);
          if (!value) {
            Notify.info('Please enter the name of the movie');
          }
          e.target[0].value = '';
        }}
      >
        {' '}
        <FormInput />
        <FormButton type="submit">Search</FormButton>
      </Form>
    </>
  );
};
