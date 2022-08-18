import { useRef, useState } from 'react';
import { isIP } from 'is-ip';

import css from './Header.module.css';

function Header(props) {
  const inputIPAddress = useRef();
  const [ipIsValid, setIpIsValid] = useState(true);

  const ipAddress = props.location?.ip;
  const city = props.location?.location.city;
  const region = props.location?.location.region;
  const postalCode = props.location?.location.postalCode;
  const timezone = props.location?.location.timezone;
  const isp = props.location?.isp;

  const handleGetIP = (event) => {
    event.preventDefault();
    const inputIP = inputIPAddress.current.value;

    if (!isIP(inputIP)) return setIpIsValid(false);

    setIpIsValid(true);
    return inputIP;
  };

  return (
    <header>
      <div className='flexCol flexCenter gap'>
        <h1 className={css.title}>IP Address Tracker</h1>
        <form onSubmit={handleGetIP}>
          <input autoFocus type='text' placeholder='' ref={inputIPAddress}></input>
          <button>{'>'}</button>
        </form>
        {!ipIsValid && <p className={css.invalid}>IP Address is invalid.</p>}
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
