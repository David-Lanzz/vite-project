import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdown, setdropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setdropdown(false);
      }
    };
    document.querySelector('#services').classList.toggle('display');
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [dropdown]);
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button type="button" onClick={() => { setdropdown(!dropdown); }}>
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          <ul id="services" className="display">
            <li>Design</li>
            <li>Development</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
