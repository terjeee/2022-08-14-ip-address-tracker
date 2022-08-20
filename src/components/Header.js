import { useRef, useState } from 'react';
import { isIP } from 'is-ip';

import css from './Header.module.css';

function Header(props) {
  const inputIPAddress = useRef();
  const [ipIsValid, setIpIsValid] = useState(true);

  const location = {
    ip: props.location?.ip_address,
    city: props.location?.city,
    region: props.location?.region,
    postalCode: props.location?.postal_code,
    country: props.location?.country,
    timezone: props.location?.timezone?.abbreviation,
    isp: props.location?.connection?.isp_name,
  };

  const displayCityOrCountry =
    location.city === null
      ? location.country
      : `${location.city}, ${location.region} ${location.postalCode}`;

  const handleGetIP = (event) => {
    event.preventDefault();
    const inputIP = inputIPAddress.current.value;

    if (!isIP(inputIP)) return setIpIsValid(false);

    setIpIsValid(true);
    inputIPAddress.current.value = '';
    props.toParentIP(inputIP);
  };

  return (
    <header>
      <div className='flexCol flexCenter gap'>
        <h1 className={css.title}>IP Address Tracker</h1>
        <form onSubmit={handleGetIP}>
          <input
            autoFocus
            type='text'
            placeholder='Search for any IP address'
            ref={inputIPAddress}
          ></input>
          <button>{'>'}</button>
        </form>
        {!ipIsValid && <p className={css.invalid}>IP Address is invalid.</p>}
        <section className={css.ipDetails}>
          <div className='flexCol alignStart'>
            <h3>IP ADDRESS</h3>
            <p>{location.ip === undefined ? '-' : location.ip}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>LOCATION</h3>
            <p>{location.city === undefined ? '-' : displayCityOrCountry}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>TIME ZONE</h3>
            <p>{location.timezone === undefined ? '-' : location.timezone}</p>
          </div>
          <div className='flexCol alignStart'>
            <h3>ISP</h3>
            <p>{location.isp === undefined ? '-' : location.isp}</p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
