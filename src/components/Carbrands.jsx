/*eslint-disable */
const CarBrandItems = ({ carbrands }) => (
  carbrands.map((element, key) => <option value={element} key={key}>{element}</option>)
);
export default CarBrandItems;
