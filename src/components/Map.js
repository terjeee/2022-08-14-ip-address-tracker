import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import css from './Map.module.css';

// ChangeCoords endrer location på kartet gjennom map.setView()/flyTo() da MapContainer (onMount render) er immutable - https://stackoverflow.com/questions/64665827/react-leaflet-center-attribute-does-not-change-when-the-center-state-changes
const ChangeCoords = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom);
  return null;
};

function Map(props) {
  const [hasCoords, setHasCoords] = useState(false);
  const [coords, setCoords] = useState([null, null]);

  useEffect(() => {
    setHasCoords(false);
    setCoords([props.location.latitude, props.location.longitude]);
  }, [props]);

  console.log(coords);

  useEffect(() => {
    if (
      coords[0] !== null &&
      coords[1] !== null &&
      coords[0] !== undefined &&
      coords[1] !== undefined
    )
      return setHasCoords(true);

    setHasCoords(false);
  }, [coords]);

  return (
    <div className={css.map}>
      {hasCoords && (
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false} keyboard={true}>
          <ChangeCoords center={coords} zoom={13} />
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
