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
    <header className='flexCol flexCenter'>
      <h1 className={css.title}>IP Address Tracker</h1>
      <form onSubmit={handleGetLocation}>
        <input placeholder='' ref={inputIPAddress}></input>
        <button type='button'>{'>'}</button>
      </form>
      <section className={css.ipDetails}>
        <div className='flexCol alignStart'>
          <h3>IP ADDRESS</h3>
          <p>Test{}</p>
        </div>
        <div className='flexCol alignStart'>
          <h3>LOCATION</h3>
          <p>Test{}</p>
        </div>
        <div className='flexCol alignStart'>
          <h3>TIME ZONE</h3>
          <p>Test{}</p>
        </div>
        <div className='flexCol alignStart'>
          <h3>ISP</h3>
          <p>Test{}</p>
        </div>
      </section>
    </header>
  );
}

export default Header;
