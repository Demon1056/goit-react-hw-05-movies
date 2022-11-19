import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { Form, FormButton, FormInput } from './FormStyles';

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

FindForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
