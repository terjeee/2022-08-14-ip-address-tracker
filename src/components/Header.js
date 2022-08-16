import { useRef } from 'react';

import css from './Header.module.css';

function Header() {
  const inputIPAddress = useRef();

  const handleGetLocation = (event) => {
    event.preventDefault();

    // const ip = inputIPAddress;

    // const regexValidIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  };

  return (
    <header>
      <div className='flexCol flexCenter gap'>
        <h1 className={css.title}>IP Address Tracker</h1>
        <form className={css} onSubmit={handleGetLocation}>
          <input placeholder='' ref={inputIPAddress}></input>
          <button type='button'>{'>'}</button>
        </form>
        <section className={css.ipDetails}>
          <div className='flexCol alignStart'>
            <h3>IP ADDRESS</h3>
            <p>192.212.174.101{}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>LOCATION</h3>
            <p>Brooklyn, NY 10000{}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>TIME ZONE</h3>
            <p>UTC -05:00{}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>ISP</h3>
            <p>SpaceX Starlink{}</p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
