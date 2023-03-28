/*eslint-disable */
import { useState } from 'react';

const InputField = ({ changeInput }) => {
  const [value, changeValue] = useState('');
  const [message, changemessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      changeInput(value);
      changeValue('');
      changemessage('');
      document.querySelector('#input').value = '';
    } else {
      changemessage('Please provide an input');
    }
  };
  const handler = (e) => {
    changeValue(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="input" type="text" placeholder="Add Todo..." defaultValue={value} onChange={handler} />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};
export default InputField;
