/*eslint-disable */
import { useRef } from 'react';
import Navbar from './Navbar';

const UncontrolledForm = () => {
  const ref = useRef();
  const handler = (event) => {
    event.preventDefault();
    alert(ref.current.value);
  };
  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handler}>
        <label htmlFor="">
          FirstName:
          {' '}
          <input type="text" value="lanzz" readOnly ref={ref} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default UncontrolledForm;
