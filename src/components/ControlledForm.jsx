/*eslint-disable */
import { useState } from 'react';
import CarBrandItems from './Carbrands';

const ControlledForm = () => {
  const [state, changeState] = useState({
    firstname: '', lastname: '', message: '', carbrands: '', gender: '',
  });
  const handler = (e) => {
    changeState({ ...state, [e.target.name]: e.target.value });
  };
  const [checked, changeChecked] = useState({ isChecked: false });
  const checkHandler = () => {
    changeChecked(!checked ? 'Yes' : 'No');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state, checked);
  };
  const carbrand = ['mercedes', 'bmw', 'toyota', 'honda'];
  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          first name:
          {' '}
          <input name="firstname" type="text" defaultValue={state.firstname} onChange={handler} />
          last name:
          {' '}
          <input name="lastname" type="text" defaultValue={state.lastname} onChange={handler} />
          Mssage:
          {' '}
          <textarea name="message" type="text" defaultValue={state.message} onChange={handler} />
        </label>
        <label htmlFor="">
          <select name="carbrands" id="" value={state.carbrand} onChange={handler}>
            <option value="" disabled>--Pick a brand--</option>
            <CarBrandItems carbrands={carbrand} />
          </select>
        </label>
        <label htmlFor="">
          <input type="checkbox" name="checked" id="check" onChange={checkHandler} defaultValue={checked ? 'Yes' : 'No'} />
        </label>
        <label htmlFor="">
          <input type="radio" name="gender" value="male" onClick={handler} />
          <input type="radio" name="gender" value="female" onClick={handler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>
        first name:
        {state.firstname}
      </h3>
      <h3>
        last name:
        {state.lastname}
      </h3>
      <h3>
        message:
        {state.message}
      </h3>
      <h3>
        car brand:
        {state.carbrands}
      </h3>
      <h3>
        Is it checked?:
        {checked ? 'Yes' : 'No' ? 'Yes' : 'No'}
      </h3>
      <h3>
        I am a:
        {state.gender}
      </h3>
    </>
  );
};
export default ControlledForm;
