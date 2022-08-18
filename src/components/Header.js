import { useRef } from 'react';

import css from './Header.module.css';

function Header(props) {
  const inputIPAddress = useRef();

  const ipAddress = props.location?.ip;
  const city = props.location?.location.city;
  const region = props.location?.location.region;
  const postalCode = props.location?.location.postalCode;
  const timezone = props.location?.location.timezone;
  const isp = props.location?.isp;

  const handleGetIP = (event) => {
    event.preventDefault();

    const inputIP = inputIPAddress;
    console.log(inputIP.current.value);

    // const regexValidIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  };

  return (
    <header>
      <div className='flexCol flexCenter gap'>
        <h1 className={css.title}>IP Address Tracker</h1>
        <form onSubmit={handleGetIP}>
          <input autoFocus type='text' placeholder='...' ref={inputIPAddress}></input>
          <button>{'>'}</button>
        </form>
        <section className={css.ipDetails}>
          <div className='flexCol alignStart'>
            <h3>IP ADDRESS</h3>
            <p>{ipAddress === undefined ? '-' : ipAddress}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>LOCATION</h3>
            <p>{city === undefined ? '-' : `${city}, ${region} ${postalCode}`}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>TIME ZONE</h3>
            <p>{timezone === undefined ? '-' : timezone}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>ISP</h3>
            <p>{isp === undefined ? '-' : isp}</p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
