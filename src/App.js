import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';

const apiURL =
  'https://ipgeolocation.abstractapi.com/v1/?api_key=df8591aa1d00430bbf62d60a4951cac9&ip_address=';

function App() {
  const [ip, setIp] = useState(undefined);
  const [location, setLocation] = useState(undefined);
  const [locationAquired, setLocationAquired] = useState(false);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      });
  }, []);

  useEffect(() => {
    if (ip === undefined) return;

    fetch(`${apiURL}${ip}`)
      .then((response) => {
        if (!response.ok) throw new Error("Couldn't load location");
        return response.json();
      })
      .then((data) => {
        setLocation(data);
        setLocationAquired(true);
      })
      .catch((error) => {
        alert(error);
      });
  }, [ip]);

  const handleChangeIP = (ip) => {
    setIp(ip);
  };

  return (
    <main>
      <Header location={location} toParentIP={handleChangeIP} />
      {locationAquired && <Map location={location} />}
    </main>
  );
}

export default App;
