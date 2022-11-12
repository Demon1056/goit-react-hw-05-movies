import { Form, FormButton, FormInput } from './FormStyles';

export const FindForm = ({ handleChange }) => {
  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault();
          handleChange(e.target[0].value);
        }}
      >
        {' '}
        <FormInput />
        <FormButton type="submit">Search</FormButton>
      </Form>
    </>
  );
};

// export const Searchbar = ({ changeInputValue }) => {
//     const [inputValue, setInputValue] = useState('');
//     const resetForm = () => setInputValue('');
//     const handleChange = e => setInputValue(e.target.value);
//     const handleSubmit = e => {
//         e.preventDefault();
//         changeInputValue(inputValue);
//         resetForm();
//     };

//     return (

//         <SearchForm onSubmit={handleSubmit}>
//             <SearchFormButton type="submit">
//                 {' '}
//                 <AiOutlineSearch color={'grey'} size={'20px'} />
//                 <SearchFormButtonLabel></SearchFormButtonLabel>
//             </SearchFormButton>

//             <SearchFormInput
//                 name="findValue"
//                 value={inputValue}
//                 type="text"
//                 autocomplete="off"
//                 autoFocus
//                 placeholder="Search images and photos"
//                 onChange={handleChange}
//             />
//         </SearchForm>{ ' ' }

//     );
// };