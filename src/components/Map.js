import { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import css from './Map.module.css';

function Map(props) {
  const [hasCoords, setHasCoords] = useState(false);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  useEffect(() => {
    setLat(props.location.latitude);
    setLng(props.location.longitude);
    setHasCoords(true);
  }, [props]);

  console.log(lat, lng);

  return (
    <div className={css.map}>
      {hasCoords && (
        <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
