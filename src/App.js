import { useEffect, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';

const apiType1 =
  'https://geo.ipify.org/api/v2/country?apiKey=at_NkfEDFDaVWVJEIOGhDUtTSmBjkv27&ipAddress=';
const apiType2 =
  'https://geo.ipify.org/api/v2/country,city?apiKey=at_NkfEDFDaVWVJEIOGhDUtTSmBjkv27&ipAddress=';

function App() {
  const [ip, setIp] = useState(undefined);
  const [location, setLocaton] = useState(undefined);
  const [locationAquired, setLocationAquired] = useState(false);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  }, []);

  useEffect(() => {
    if (ip === undefined) return;

    fetch(`${''}${ip}`)
      .then((response) => {
        if (!response.ok) throw new Error("Couldn't load location");
        return response.json();
      })
      .then((data) => {
        setLocationAquired(true);
        setLocaton(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, [ip]);

  return (
    <main>
      <Header location={location} />
      {locationAquired && <Map location={location} />}
    </main>
  );
}

export default App;
