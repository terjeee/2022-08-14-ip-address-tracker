import { useRef } from 'react';

import css from './Header.module.css';

function Header() {
  const inputIPAddress = useRef();

  const handleGetLocation = (event) => {
    event.preventDefault();

    const ip = inputIPAddress;

    // const regexValidIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  };

  return (
    <header className='flexCol'>
      <h1>IP Address Tracker</h1>
      <form className={css.inputField} onSubmit={handleGetLocation}>
        <input placeholder='...' ref={inputIPAddress}></input>
        <button type='button'>></button>
      </form>
      <main className={css.ipDetails}>
        <div className='flexCol'>
          <h3>IP ADDRESS</h3>
          <p>{}</p>
        </div>
        <div>
          <h3>LOCATION</h3>
          <p>{}</p>
        </div>
        <div>
          <h3>TIME ZONE</h3>
          <p>{}</p>
        </div>
        <div>
          <h3>ISP</h3>
          <p>{}</p>
        </div>
      </main>
    </header>
  );
}

export default Header;
